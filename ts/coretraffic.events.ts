import * as plugins  from "./coretraffic.plugins";
import * as TrafficDockersock from "./traffic.dockersock"; 

export let init = () => {
    let done = plugins.q.defer();
    let dockerChangeObservable = TrafficDockersock.dockersock.getChangeObservable();
    let changeSubscription = dockerChangeObservable.subscribe(
        function (x) {
            TrafficDockersock.handleChange();
        },
        function (err) {
            console.log('Error: ' + err);
        },
        function () {
            console.log('Completed');
        }
    );
    done.resolve();
    return done.promise;
};
