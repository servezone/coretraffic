import * as plugins  from "./traffic.plugins";
import {dockersock} from "./traffic.dockersock"; 

export let init = () => {
    let done = plugins.q.defer();
    let dockerChangeObservable = dockersock.getChangeObservable();
    let changeSubscription = dockerChangeObservable.subscribe(
        function (x) {
            console.log('TickerCycle#: ' + x);
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
