"use strict";
console.log("**** Starting coretraffic ****");
const plugins = require("./coretraffic.plugins");
const CoretrafficDockersock = require("./coretraffic.dockersock");
const CoretrafficEnvironment = require("./coretraffic.environment");
const CoretrafficEvents = require("./coretraffic.events");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(CoretrafficEnvironment.init)
    .then(CoretrafficDockersock.init)
    .then(CoretrafficEvents.init);
// start coretraffic
exports.start = () => {
    startCoretraffic.resolve();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLE1BQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFHbEQsTUFBTyxxQkFBcUIsV0FBVywwQkFBMEIsQ0FBQyxDQUFDO0FBQ25FLE1BQU8sc0JBQXNCLFdBQVcsMkJBQTJCLENBQUMsQ0FBQztBQUNyRSxNQUFPLGlCQUFpQixXQUFXLHNCQUFzQixDQUFDLENBQUM7QUFHM0Q7O2dFQUVnRTtBQUNoRSxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekMsZ0JBQWdCLENBQUMsT0FBTztLQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO0tBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7S0FDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxDLG9CQUFvQjtBQUNULGFBQUssR0FBRztJQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSJ9