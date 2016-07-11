"use strict";
console.log("**** Starting coretraffic ****");
var plugins = require("./traffic.plugins");
var TrafficEvents = require("./traffic.events");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
plugins.beautylog.log("Modules loaded! Now running initial checks");
var startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficEvents.start);
// start coretraffic
startCoretraffic.resolve();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLElBQU8sT0FBTyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFHOUMsSUFBTyxhQUFhLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUduRDs7Z0VBRWdFO0FBQ2hFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDcEUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pDLGdCQUFnQixDQUFDLE9BQU87S0FDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUvQixvQkFBb0I7QUFDcEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMifQ==