import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { serviceQenv } from './coretraffic.config';
import { SmartNginx } from '@pushrocks/smartnginx';
import { DockerHost } from '@mojoio/docker';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class CoreTraffic {
  private acmeRemoteClient: plugins.smartacme.CertRemoteClient;
  private dockerHost: plugins.docker.DockerHost;
  private smartNginx: SmartNginx;

  constructor() {
    this.acmeRemoteClient = new plugins.smartacme.CertRemoteClient({
      remoteUrl: serviceQenv.getEnvVarOnDemand('SMARTACME_REMOTE_URL'),
      secret: serviceQenv.getEnvVarOnDemand('SMARTACME_REMOTE_SECRET')
    });
    this.dockerHost = new DockerHost(); // defaults to locally mounted docker sock
    this.smartNginx = new SmartNginx({ logger, defaultProxyUrl: 'https://nullresolve.lossless.one/status/firewall' });
  }

  /**
   * will handle Docker Events
   */
  public async handleDockerEvents() {
    const eventObservable = await this.dockerHost.getEventObservable();
    const eventSubscription = eventObservable.subscribe(event => {
      logger.log('info', `Docker event of type ${event.Type}`);
      // console.log(event);
      if (event.Type === 'image' || event.Type === 'network' || event.Type === 'container' || event.Type === 'service' || event.Type === 'node') {
        // console.log(event);
        console.log('got docker event, but for now not doing anything');
        /* logger.log('info', `event of type ${event.Type}: triggering reconfiguration of nginx now.`); */
        this.setupRoutingTask.trigger();
      }
    });
  }

  /**
   * a task to run setup routing, runs buffered
   */
  public setupRoutingTask = new plugins.taskbuffer.Task({
    buffered: true,
    bufferMax: 2,
    taskFunction: async () => {
      logger.log('info', `routing setup task triggered`);
      logger.log('ok', `debounce for 10 seconds`);
      await plugins.smartdelay.delayFor(10000);
      await this.setupRouting();
    }
  });

  /**
   * sets up routing
   */
  private async setupRouting() {
    const containers = await this.dockerHost.getContainers();
    logger.log('info', `Found ${containers.length} containers!`);
    for (const container of containers) {
      let webgatewayName: string = null;
      Object.keys(container.NetworkSettings.Networks).forEach(networkName => {
        if(networkName.includes('webgateway')) {
          webgatewayName = networkName;
        }
      });
      if (webgatewayName && container.Labels['servezone.domain']) {
        logger.log('ok', `found a container on the webgateway network.`);
        const destination = container.NetworkSettings.Networks[webgatewayName].IPAddress;
        const hostName = container.Labels['servezone.domain'];
        const destinationPortString: string = container.Labels['servezone.container.port'];
        const destinationPort: number = (() => {
          if (destinationPortString) {
            return parseInt(destinationPortString, 10);
          } else {
            return 80;
          }
        })();
        logger.log('ok', `trying to obtain a certificate for ${hostName}`);
        const certificate = await this.acmeRemoteClient.getCertificateForDomain(hostName);
        this.smartNginx.addHostCandidate({
          destination,
          destinationPort,
          hostName,
          privateKey: certificate.privateKey,
          publicKey: certificate.publicKey
        });
      } else {
        logger.log('ok', `found a container either NOT on the webgateway network or without an assigned domain.`);
      }
    }
    await this.smartNginx.deploy();
  }

  /**
   * starts coretraffic
   */
  public async start() {
    await this.handleDockerEvents();
    await this.setupRoutingTask.triggerBuffered();
  }

  /**
   * stops coretraffic
   */
  public async stop() {
    this.smartNginx.nginxProcess.stop();
  }
}
