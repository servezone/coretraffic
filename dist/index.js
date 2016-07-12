"use strict";
console.log("**** Starting coretraffic ****");
var plugins = require("./traffic.plugins");
var TrafficDockersock = require("./traffic.dockersock");
var TrafficEvents = require("./traffic.events");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
var startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficDockersock.init)
    .then(TrafficEvents.init);
// start coretraffic
startCoretraffic.resolve();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLElBQU8sT0FBTyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFHOUMsSUFBTyxpQkFBaUIsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELElBQU8sYUFBYSxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFHbkQ7O2dFQUVnRTtBQUNoRSxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekMsZ0JBQWdCLENBQUMsT0FBTztLQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0tBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFOUIsb0JBQW9CO0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDIn0=