"use strict";
console.log("**** Starting coretraffic ****");
const plugins = require("./traffic.plugins");
const TrafficDockersock = require("./traffic.dockersock");
const TrafficEvents = require("./traffic.events");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficDockersock.init)
    .then(TrafficEvents.init);
// start coretraffic
startCoretraffic.resolve();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLE1BQU8sT0FBTyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFHOUMsTUFBTyxpQkFBaUIsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU8sYUFBYSxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFHbkQ7O2dFQUVnRTtBQUNoRSxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekMsZ0JBQWdCLENBQUMsT0FBTztLQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0tBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFOUIsb0JBQW9CO0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDIn0=