import * as plugins from './coretraffic.plugins';
import { CoreTraffic } from './coretraffic.classes.coretraffic';
import { logger } from './coretraffic.logging';

export class CoretrafficTaskManager {
  public coretrafficRef: CoreTraffic;
  public taskmanager: plugins.taskbuffer.TaskManager;

  /**
   * a task to run setup routing, runs buffered
   */
  public setupRoutingTask: plugins.taskbuffer.Task;

  constructor(coretrafficRefArg: CoreTraffic) {
    this.coretrafficRef = coretrafficRefArg;
    this.taskmanager = new plugins.taskbuffer.TaskManager();

    this.setupRoutingTask = new plugins.taskbuffer.Task({
      buffered: true,
      bufferMax: 2,
      taskFunction: async () => {
        logger.log('info', `routing setup task triggered`);
        const reverseConfigs = await this.coretrafficRef.coreflowConnector.getHostCandidates();
        logger.log('info', `Found ${reverseConfigs.length} host reverse configs!`);
        logger.log('info', `trying to deploy host candidates now`);
        await this.coretrafficRef.smartproxy.updateReversConfigs(reverseConfigs);
      }
    });
  }

  public async start() {
    this.taskmanager.addAndScheduleTask(this.setupRoutingTask, '0 */1 * * * *' );
  }

  public async stop() {
    this.taskmanager.descheduleTask(this.setupRoutingTask);
  }
}