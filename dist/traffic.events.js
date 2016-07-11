"use strict";
var plugins = require("./traffic.plugins");
var tickerObs = plugins.rxjs.Observable
    .interval(120000);
exports.start = function () {
    var done = plugins.q.defer();
    exports.tickerSub = tickerObs.subscribe(function (x) {
        console.log('TickerCycle#: ' + x);
    }, function (err) {
        console.log('Error: ' + err);
    }, function () {
        console.log('Completed');
    });
    console.log("subscribed ticker");
    return done.promise;
};
exports.stop = function () {
    exports.tickerSub.dispose();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy5ldmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90cmFmZmljLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUU5QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVU7S0FDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBR1gsYUFBSyxHQUFHO0lBQ2YsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixpQkFBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQzNCLFVBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxFQUNELFVBQVUsR0FBRztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsRUFDRDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUNKLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHO0lBQ2QsaUJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUMifQ==