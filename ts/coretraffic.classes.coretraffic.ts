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
    this.smartNginx = new SmartNginx({ logger });
  }

  /**
   * will handle Docker Events
   */
  public async handleDockerEvents() {
    const eventObservable = await this.dockerHost.getEventObservable();
    const eventSubscription = eventObservable.subscribe(event => {
      logger.log('info', `Docker event`);
      this.setupRoutingTask.trigger();
    });
  }

  /**
   * a task to run setup routing, runs buffered
   */
  public setupRoutingTask = new plugins.taskbuffer.Task({
    buffered: true,
    bufferMax: 1,
    taskFunction: async () => {
      await this.setupRouting();
    },
    name: 'setupRouting',
  });

  /**
   * sets up routing
   */
  private async setupRouting () {
    const containers = await this.dockerHost.getContainers();
    this.smartNginx.wipeHosts(); // make sure we have a clean slate
    for (const container of containers) {
      if(
        container.NetworkSettings.Networks.webgateway
        && container.Labels['servezone.domain']
      ) {
        const destination = container.NetworkSettings.Networks.webgateway.IPAddress;
        const hostName = container.Labels['servezone.domain'];
        const certificate = await this.acmeRemoteClient.getCertificateForDomain(hostName);
        this.smartNginx.addHost({
          destination,
          hostName,
          privateKey: certificate.privateKey,
          publicKey: certificate.publicKey
        });
      }
    }
  }
}
