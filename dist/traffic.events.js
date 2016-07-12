"use strict";
var plugins = require("./traffic.plugins");
var tickerObs = plugins.rxjs.Observable.fromEvent();
var tickerSub = tickerObs.subscribe(function (x) {
    console.log('TickerCycle#: ' + x);
}, function (err) {
    console.log('Error: ' + err);
}, function () {
    console.log('Completed');
});
exports.triggerChangeEvent = function () {
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy5ldmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90cmFmZmljLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUk5QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNwRCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUMvQixVQUFVLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsRUFDRCxVQUFVLEdBQUc7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDLEVBQ0Q7SUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FDSixDQUFDO0FBR1MsMEJBQWtCLEdBQUc7QUFFaEMsQ0FBQyxDQUFDIn0=