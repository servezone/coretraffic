"use strict";
const plugins = require("./coretraffic.plugins");
const TrafficDockersock = require("./traffic.dockersock");
exports.init = () => {
    let done = plugins.q.defer();
    let dockerChangeObservable = TrafficDockersock.dockersock.getChangeObservable();
    let changeSubscription = dockerChangeObservable.subscribe(function (x) {
        TrafficDockersock.handleChange();
    }, function (err) {
        console.log('Error: ' + err);
    }, function () {
        console.log('Completed');
    });
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29yZXRyYWZmaWMuZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELE1BQVksaUJBQWlCLFdBQU0sc0JBQXNCLENBQUMsQ0FBQTtBQUUvQyxZQUFJLEdBQUc7SUFDZCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLElBQUksc0JBQXNCLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDaEYsSUFBSSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQ3JELFVBQVUsQ0FBQztRQUNQLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUMsRUFDRCxVQUFVLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQ0Q7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FDSixDQUFDO0lBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=