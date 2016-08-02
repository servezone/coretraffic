"use strict";
const plugins = require("./coretraffic.plugins");
const corerafficDockersock = require("./coretraffic.dockersock");
const taskchains = require("./coretraffic.taskchains");
exports.init = () => {
    let done = plugins.q.defer();
    let dockerChangeObservable = corerafficDockersock.dockersock.getChangeObservable();
    let changeSubscription = dockerChangeObservable.subscribe(function (x) {
        taskchains.taskHandleChange.trigger();
    }, function (err) {
        console.log('Error: ' + err);
    }, function () {
        console.log('Completed');
    });
    plugins.beautylog.ok("Subscribed to change events!");
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29yZXRyYWZmaWMuZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSx1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pELE1BQVksb0JBQW9CLFdBQU0sMEJBQTBCLENBQUMsQ0FBQTtBQUNqRSxNQUFZLFVBQVUsV0FBTSwwQkFBMEIsQ0FBQyxDQUFBO0FBRTVDLFlBQUksR0FBRztJQUNkLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsSUFBSSxzQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuRixJQUFJLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FDckQsVUFBVSxDQUFDO1FBQ1AsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUMsRUFDRCxVQUFVLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQ0Q7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FDSixDQUFDO0lBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUMifQ==