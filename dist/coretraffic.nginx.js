"use strict";
const plugins = require("./coretraffic.plugins");
const taskbuffer_1 = require("taskbuffer");
let nginxConfig;
exports.updateConfig = () => {
};
exports.init = () => {
    let done = plugins.q.defer();
    nginxConfig = new plugins.smartnginx.NginxConfig({
        cfKey: "",
        cfEmail: ""
    });
};
exports.taskSetupNginx = new taskbuffer_1.Task({
    name: "setupNginx",
    taskFunction: (containerTrafficData) => {
        let done = plugins.q.defer();
        // nginxConfig.addZone();
        done.resolve();
        return done.promise;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMubmdpbnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9jb3JldHJhZmZpYy5uZ2lueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxPQUFPLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUtsRCw2QkFBbUIsWUFBWSxDQUFDLENBQUE7QUFLaEMsSUFBSSxXQUF1QixDQUFDO0FBRWpCLG9CQUFZLEdBQUc7QUFFMUIsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFJO0lBQ2YsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixXQUFXLEdBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxLQUFLLEVBQUMsRUFBRTtRQUNSLE9BQU8sRUFBQyxFQUFFO0tBQ2IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVMsc0JBQWMsR0FBRyxJQUFJLGlCQUFJLENBQUM7SUFDakMsSUFBSSxFQUFDLFlBQVk7SUFDakIsWUFBWSxFQUFFLENBQUMsb0JBQTRDO1FBQ3ZELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSixDQUFDLENBQUEifQ==