import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import {} from './coretraffic.config';
import { SmartNginx } from '@pushrocks/smartnginx';
import { DockerHost } from '@mojoio/docker';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class Coretraffic {
  acmeRemoteClient: plugins.smartacme.CertRemoteClient;
  dockerHost: plugins.docker.DockerHost;
  smartNginx: SmartNginx;

  public async init() {
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
    });
  };

  /**
   * sets up routing
   */
  public async setupRouting () {
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
