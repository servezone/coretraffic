"use strict";
const plugins = require("./coretraffic.plugins");
const ConfigModule = require("./coretraffic.config");
// classes
const smartnginx_1 = require("smartnginx");
const taskbuffer_1 = require("taskbuffer");
let nginxConfig;
exports.init = () => {
    let done = plugins.q.defer();
    nginxConfig = new plugins.smartnginx.NginxConfig({
        cfKey: ConfigModule.config.cfKey,
        cfEmail: ConfigModule.config.cfEmail
    });
    plugins.beautylog.ok("NginxConfig instance created!");
    done.resolve();
    return done.promise;
};
exports.taskUpdateNginxConfig = new taskbuffer_1.Task({
    name: "update nginxConfig",
    taskFunction: (containerTrafficDataArg) => {
        let done = plugins.q.defer();
        console.log(containerTrafficDataArg);
        nginxConfig.clean();
        containerTrafficDataArg.forEach(function (item) {
            let newNginxHost = new smartnginx_1.NginxHost(item);
            nginxConfig.addHost(newNginxHost);
        });
        nginxConfig.deploy().then(done.resolve).catch(err => { console.log(err); });
        return done.promise;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMubmdpbnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9jb3JldHJhZmZpYy5uZ2lueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxPQUFPLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUVsRCxNQUFZLFlBQVksV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBRXJELFVBQVU7QUFDViw2QkFBdUMsWUFBWSxDQUFDLENBQUE7QUFDcEQsNkJBQXFCLFlBQVksQ0FBQyxDQUFBO0FBRWxDLElBQUksV0FBd0IsQ0FBQztBQUVsQixZQUFJLEdBQUc7SUFDZCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzdDLEtBQUssRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDaEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTztLQUN2QyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO0lBQ3JELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVTLDZCQUFxQixHQUFHLElBQUksaUJBQUksQ0FBQztJQUN4QyxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLFlBQVksRUFBRSxDQUFDLHVCQUE2RDtRQUN4RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsdUJBQXVCLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtZQUMxQyxJQUFJLFlBQVksR0FBRyxJQUFJLHNCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSixDQUFDLENBQUEifQ==