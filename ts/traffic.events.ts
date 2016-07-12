import plugins = require("./traffic.plugins");



let tickerObs = plugins.rxjs.Observable.fromEvent();
let tickerSub = tickerObs.subscribe(
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
    

export let triggerChangeEvent = () => {

};