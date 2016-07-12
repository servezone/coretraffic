"use strict";
console.log("**** Starting coretraffic ****");
var plugins = require("./traffic.plugins");
var TrafficDockersock = require("./traffic.dockersock");
/**************************************************************
 ************ Initial Start ********
 **************************************************************/
var startCoretraffic = plugins.q.defer();
startCoretraffic.promise
    .then(TrafficDockersock.init);
// start coretraffic
startCoretraffic.resolve();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlDLElBQU8sT0FBTyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFHOUMsSUFBTyxpQkFBaUIsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBSTNEOztnRUFFZ0U7QUFDaEUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pDLGdCQUFnQixDQUFDLE9BQU87S0FDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxDLG9CQUFvQjtBQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyJ9