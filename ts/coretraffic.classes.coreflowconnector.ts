import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreTraffic } from './coretraffic.classes.coretraffic';

/**
 * Coreflow Connector
 */
export class CoreflowConnector {
  public coretrafficRef: CoreTraffic;

  /**
   * a task to run setup routing, runs buffered
   */
  public setupRoutingTask: plugins.taskbuffer.Task;

  constructor(coretrafficRefArg: CoreTraffic) {
    this.coretrafficRef = coretrafficRefArg;
  }

  public async getHostCandidates(): Promise<any[]> {
    return [];
  }
}
