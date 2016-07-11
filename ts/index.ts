console.log("**** Starting ht-docker-traffic ****");
import plugins = require("./traffic.plugins");
import paths = require("./traffic.paths");

import TrafficCerts = require("./traffic.certs");
import TrafficDockersock = require("./traffic.dockersock");
import TrafficEnvironment = require("./traffic.environment");
import TrafficEvents = require("./traffic.events");
import TrafficOptions = require("./traffic.options");
import TrafficNginx = require("./traffic.nginx");
import TrafficSsh = require("./traffic.ssh");


/**************************************************************
 ************ Initial Start ********
 **************************************************************/
plugins.beautylog.log("Modules loaded! Now running initial checks");
TrafficEnvironment.checkDebug()
    .then(TrafficOptions.buildOptions)
    .then(TrafficSsh.setupSshFromEnv)
    .then(TrafficCerts.setupCerts)
    .then(TrafficEvents.startTicker);

//prevent Ticker from executing indefinitely for tests
export let noTicker = function(){
    TrafficEvents.noTicker = true;
};