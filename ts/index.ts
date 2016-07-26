console.log("**** Starting coretraffic ****");
import * as plugins from "./coretraffic.plugins";
import * as paths from "./coretraffic.paths";

import * as CoretrafficConfig from "./coretraffic.config";
import * as CoretrafficDockersock from "./coretraffic.dockersock";
import * as CoretrafficEnvironment from "./coretraffic.environment";
import * as CoretrafficEvents from "./coretraffic.events";
import * as CoretrafficNginx from "./coretraffic.nginx";

/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startDeferred = plugins.q.defer();
startDeferred.promise
    .then(CoretrafficEnvironment.init)
    .then(CoretrafficDockersock.init)
    .then(CoretrafficEvents.init);

/**
 * starts coretraffic with a given config;
 */
export let start = (optionsArg:CoretrafficConfig.ICoretrafficConfig) => {
    CoretrafficConfig.setConfig(optionsArg);
    startDeferred.resolve();
}