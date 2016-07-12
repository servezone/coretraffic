"use strict";
var plugins = require("./traffic.plugins");
var traffic_dockersock_1 = require("./traffic.dockersock");
exports.init = function () {
    var done = plugins.q.defer();
    var dockerChangeObservable = traffic_dockersock_1.dockersock.getChangeObservable();
    var changeSubscription = dockerChangeObservable.subscribe(function (x) {
        console.log('TickerCycle#: ' + x);
    }, function (err) {
        console.log('Error: ' + err);
    }, function () {
        console.log('Completed');
    });
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy5ldmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90cmFmZmljLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUM5QyxtQ0FBeUIsc0JBQXNCLENBQUMsQ0FBQTtBQUVyQyxZQUFJLEdBQUc7SUFDZCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLElBQUksc0JBQXNCLEdBQUcsK0JBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlELElBQUksa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUNyRCxVQUFVLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFDRCxVQUFVLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQ0Q7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FDSixDQUFDO0lBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=