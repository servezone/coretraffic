import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreflowConnector } from './coretraffic.classes.coreflowconnector';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class CoreTraffic {
  public coreflowConnector = new CoreflowConnector();
  private smartproxy = new plugins.smartproxy.SmartProxy();

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
    const hostCandidates = await this.coreflowConnector.getHostCandidates();
    logger.log('info', `Found ${hostCandidates.length} host Candidates!`);
    for (const hostCandidate of hostCandidates) {
      this.smartproxy.addHostCandidate({
        destinationIp: hostCandidate.destinationIp,
        destinationPort: hostCandidate.destinationPort,
        hostName: hostCandidate.hostName,
        privateKey: hostCandidate.privateKey,
        publicKey: hostCandidate.publicKey
      });
    }
    logger.log('info', `trying to deploy host candidates now`);
    await this.smartproxy.update();
  }

  /**
   * starts coretraffic
   */
  public async start() {
    await this.setupRoutingTask.triggerBuffered();
  }

  /**
   * stops coretraffic
   */
  public async stop() {
    this.smartproxy
  }
}
