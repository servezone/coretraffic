"use strict";
const plugins = require("./coretraffic.plugins");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMubmdpbnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9jb3JldHJhZmZpYy5uZ2lueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxPQUFPLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUlsRCxJQUFJLFdBQXVCLENBQUM7QUFFakIsb0JBQVksR0FBRztBQUUxQixDQUFDLENBQUM7QUFFUyxZQUFJLEdBQUk7SUFDZixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLFdBQVcsR0FBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlDLEtBQUssRUFBQyxFQUFFO1FBQ1IsT0FBTyxFQUFDLEVBQUU7S0FDYixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEifQ==