import plugins = require("./traffic.plugins");

let tickerObs = plugins.rxjs.Observable
    .interval(120000);

export let tickerSub;
export let noTicker = false;
export let startTicker = function(){
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
    if (noTicker) tickerSub.dispose();
    return done.promise;
};

export let stopTicker = function(){
    tickerSub.dispose();
}

export let cooldown = function(){
    let done = plugins.q.defer();
    return done.promise;
};
