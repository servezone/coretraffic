console.log("**** Starting coretraffic ****");
import plugins = require("./traffic.plugins");
import paths = require("./traffic.paths");

import TrafficDockersock = require("./traffic.dockersock");
import TrafficEvents = require("./traffic.events");
import TrafficNginx = require("./traffic.nginx");

/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficDockersock.init);

// start coretraffic
startCoretraffic.resolve();