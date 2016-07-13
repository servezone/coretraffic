"use strict";
var plugins = require("./traffic.plugins");
var TrafficDockersock = require("./traffic.dockersock");
exports.init = function () {
    var done = plugins.q.defer();
    var dockerChangeObservable = TrafficDockersock.dockersock.getChangeObservable();
    var changeSubscription = dockerChangeObservable.subscribe(function (x) {
        TrafficDockersock.handleChange();
    }, function (err) {
        console.log('Error: ' + err);
    }, function () {
        console.log('Completed');
    });
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy5ldmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90cmFmZmljLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUM5QyxJQUFZLGlCQUFpQixXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFFL0MsWUFBSSxHQUFHO0lBQ2QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2hGLElBQUksa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUNyRCxVQUFVLENBQUM7UUFDUCxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDLEVBQ0QsVUFBVSxHQUFHO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUNEO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQ0osQ0FBQztJQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9