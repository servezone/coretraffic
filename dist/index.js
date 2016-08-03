"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
console.log("**** Starting coretraffic ****");
const plugins = require("./coretraffic.plugins");
const CoretrafficConfig = require("./coretraffic.config");
const CoretrafficDockersock = require("./coretraffic.dockersock");
__export(require("./coretraffic.taskchains"));
const CoretrafficEnvironment = require("./coretraffic.environment");
const CoretrafficEvents = require("./coretraffic.events");
const CoretrafficNginx = require("./coretraffic.nginx");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startDeferred = plugins.q.defer();
let coreTrafficRunning = plugins.q.defer();
startDeferred.promise
    .then(CoretrafficEnvironment.init)
    .then(CoretrafficDockersock.init)
    .then(CoretrafficNginx.init)
    .then(CoretrafficEvents.init)
    .then(coreTrafficRunning.resolve);
/**
 * starts coretraffic with a given config;
 */
exports.start = (optionsArg) => {
    let done = plugins.q.defer();
    CoretrafficConfig.setConfig(optionsArg);
    startDeferred.resolve();
    coreTrafficRunning.promise.then(() => {
        plugins.beautylog.info("start tasks complete!");
        done.resolve();
    });
    return done.promise;
};
exports.end = () => {
    CoretrafficDockersock.dockersock.endRequests();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLE1BQVksT0FBTyxXQUFNLHVCQUF1QixDQUFDLENBQUE7QUFHakQsTUFBWSxpQkFBaUIsV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBQzFELE1BQVkscUJBQXFCLFdBQU0sMEJBQTBCLENBQUMsQ0FBQTtBQUNsRSxpQkFBYywwQkFDZCxDQUFDLEVBRHVDO0FBQ3hDLE1BQVksc0JBQXNCLFdBQU0sMkJBQTJCLENBQUMsQ0FBQTtBQUNwRSxNQUFZLGlCQUFpQixXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDMUQsTUFBWSxnQkFBZ0IsV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBRXhEOztnRUFFZ0U7QUFDaEUsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QyxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0MsYUFBYSxDQUFDLE9BQU87S0FDaEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztLQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO0tBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7S0FDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztLQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdEM7O0dBRUc7QUFDUSxhQUFLLEdBQUcsQ0FBQyxVQUErQztJQUMvRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVTLFdBQUcsR0FBRztJQUNiLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuRCxDQUFDLENBQUMifQ==