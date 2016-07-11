import plugins = require("./traffic.plugins");

let tickerObs = plugins.rxjs.Observable
    .interval(120000);

export let tickerSub;
export let start = function(){
    let done = plugins.q.defer();
    tickerSub = tickerObs.subscribe(
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
    console.log("subscribed ticker");
    return done.promise;
};

export let stop = function(){
    tickerSub.dispose();
};
