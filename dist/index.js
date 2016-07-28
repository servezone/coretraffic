"use strict";
console.log("**** Starting coretraffic ****");
const plugins = require("./coretraffic.plugins");
const CoretrafficConfig = require("./coretraffic.config");
const CoretrafficDockersock = require("./coretraffic.dockersock");
const CoretrafficEnvironment = require("./coretraffic.environment");
const CoretrafficEvents = require("./coretraffic.events");
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
exports.start = (optionsArg) => {
    CoretrafficConfig.setConfig(optionsArg);
    startDeferred.resolve();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLE1BQVksT0FBTyxXQUFNLHVCQUF1QixDQUFDLENBQUE7QUFHakQsTUFBWSxpQkFBaUIsV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBQzFELE1BQVkscUJBQXFCLFdBQU0sMEJBQTBCLENBQUMsQ0FBQTtBQUNsRSxNQUFZLHNCQUFzQixXQUFNLDJCQUEyQixDQUFDLENBQUE7QUFDcEUsTUFBWSxpQkFBaUIsV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBRzFEOztnRUFFZ0U7QUFDaEUsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QyxhQUFhLENBQUMsT0FBTztLQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO0tBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7S0FDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxDOztHQUVHO0FBQ1EsYUFBSyxHQUFHLENBQUMsVUFBK0M7SUFDL0QsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUEifQ==