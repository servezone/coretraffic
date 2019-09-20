import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreflowConnector } from './coretraffic.classes.coreflowconnector';
import { CoretrafficTaskManager } from './coretraffic.classes.taskmanager';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class CoreTraffic {
  public coreflowConnector: CoreflowConnector;
  public coretrafficTaskManager: CoretrafficTaskManager;
  public smartproxy: plugins.smartproxy.SmartProxy;

  constructor() {
    this.coreflowConnector = new CoreflowConnector(this);
    this.coretrafficTaskManager = new CoretrafficTaskManager(this);
    this.smartproxy = new plugins.smartproxy.SmartProxy();
  }

  /**
   * starts coretraffic
   */
  public async start() {
    await this.smartproxy.start();
    await this.coretrafficTaskManager.setupRoutingTask.triggerBuffered();
  }

  /**
   * stops coretraffic
   */
  public async stop() {
    this.smartproxy.stop();
  }
}
