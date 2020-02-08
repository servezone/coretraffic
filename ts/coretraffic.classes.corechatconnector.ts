import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreTraffic } from './coretraffic.classes.coretraffic';

/**
 * Coreflow Connector
 */
export class CorechatConnector {
  public coretrafficRef: CoreTraffic;
  public universeClient: plugins.smartuniverse.ClientUniverse;
  public corechatChannel: plugins.smartuniverse.ClientUniverseChannel;

  constructor(coretrafficRefArg: CoreTraffic) {
    this.coretrafficRef = coretrafficRefArg;
    this.universeClient = new plugins.smartuniverse.ClientUniverse({
      serverAddress: 'http://corechat:3000',
      autoReconnect: true
    });
    this.corechatChannel = this.universeClient.addChannel('corechat', 'corechat');
    const reverseConfigReaction = new plugins.smartuniverse.ReactionResponse<
      plugins.lointCluster.request.routing.IRequest_Coreflow_Coretraffic_RoutingUpdate
    >({
      method: 'updateRouting',
      channels: [this.corechatChannel],
      funcDef: async requestData => {
        console.log(requestData);
        await this.coretrafficRef.taskmanager.setupRoutingTask.trigger(requestData.reverseConfigs);
        return {
          status: 'ok',
          errorText: ''
        };
      }
    });
  }

  /**
   * starts the corechatConnector
   */
  public async start() {
    await this.universeClient.start();
  }

  public async getHostCandidates() {
    // TODO: support triggering ReactionRequests in smartuniverse
  }
}
