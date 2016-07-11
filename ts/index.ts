console.log("**** Starting coretraffic ****");
import plugins = require("./traffic.plugins");
import paths = require("./traffic.paths");

import TrafficEvents = require("./traffic.events");
import TrafficOptions = require("./traffic.options");
import TrafficNginx = require("./traffic.nginx");

/**************************************************************
 ************ Initial Start ********
 **************************************************************/
plugins.beautylog.log("Modules loaded! Now running initial checks");
let startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficOptions.buildOptions)
    .then(TrafficEvents.startTicker);

//prevent Ticker from executing indefinitely for tests
export let noTicker = function(){
    TrafficEvents.noTicker = true;
};

// start coretraffic
startCoretraffic.resolve();