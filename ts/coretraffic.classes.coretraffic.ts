import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreflowConnector } from './coretraffic.classes.coreflowconnector';
import { CoretrafficTaskManager } from './coretraffic.classes.taskmanager';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class CoreTraffic {
  public typedrouter = new plugins.typedrequest.TypedRouter();
  public corechatConnector: CoreflowConnector;
  public taskmanager: CoretrafficTaskManager;
  public smartproxy: plugins.smartproxy.SmartProxy;

  constructor() {
    this.corechatConnector = new CoreflowConnector(this);
    this.taskmanager = new CoretrafficTaskManager(this);
    this.smartproxy = new plugins.smartproxy.SmartProxy({});
  }

  /**
   * starts coretraffic
   */
  public async start() {
    await this.smartproxy.start();
    await this.taskmanager.start();
    await this.corechatConnector.start();
  }

  /**
   * stops coretraffic
   */
  public async stop() {
    this.smartproxy.stop();
  }
}
