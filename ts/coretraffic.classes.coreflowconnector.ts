import * as plugins from './coretraffic.plugins';
import { logger } from './coretraffic.logging';
import { CoreTraffic } from './coretraffic.classes.coretraffic';

/**
 * Coreflow Connector
 */
export class CoreflowConnector {
  public typedrouter = new plugins.typedrequest.TypedRouter();
  public coretrafficRef: CoreTraffic;
  public typesocketClient: plugins.typedsocket.TypedSocket;

  constructor(coretrafficRefArg: CoreTraffic) {
    this.coretrafficRef = coretrafficRefArg;
    this.coretrafficRef.typedrouter.addTypedRouter(this.typedrouter)
    
    this.typedrouter.addTypedHandler<
      plugins.lointCloudly.request.routing.IRequest_Coreflow_Coretraffic_RoutingUpdate
    >(new plugins.typedrequest.TypedHandler('updateRouting', async (requestData) => {
      console.log(requestData);
      await this.coretrafficRef.taskmanager.setupRoutingTask.trigger(requestData.reverseConfigs);
      return {
        status: 'ok',
        errorText: ''
      };
    }));
  }

  /**
   * starts the corechatConnector
   */
  public async start() {
    this.typesocketClient = await plugins.typedsocket.TypedSocket.createClient(
      this.typedrouter,
      'http://coreflow:3000'
    );
  }

  public async getHostCandidates() {
    // TODO: support triggering ReactionRequests in smartuniverse
  }
}
