console.log("**** Starting coretraffic ****");
import plugins = require("./traffic.plugins");
import paths = require("./traffic.paths");

import TrafficEvents = require("./traffic.events");
import TrafficNginx = require("./traffic.nginx");

/**************************************************************
 ************ Initial Start ********
 **************************************************************/
plugins.beautylog.log("Modules loaded! Now running initial checks");
let startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficEvents.start);

// start coretraffic
startCoretraffic.resolve();