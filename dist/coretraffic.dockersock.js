"use strict";
const plugins = require("./coretraffic.plugins");
exports.init = (sockUrl) => {
    let done = plugins.q.defer();
    exports.dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    done.resolve();
    return done.promise;
};
exports.handleChange = () => {
    exports.dockersock.listContainersDetailed()
        .then((responseArg) => {
        console.log(responseArg);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZG9ja2Vyc29jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2NvcmV0cmFmZmljLmRvY2tlcnNvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFHdkMsWUFBSSxHQUFHLENBQUMsT0FBYztJQUM3QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLGtCQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9FQUFvRTtJQUM3SCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyxvQkFBWSxHQUFHO0lBQ3RCLGtCQUFVLENBQUMsc0JBQXNCLEVBQUU7U0FDOUIsSUFBSSxDQUFDLENBQUMsV0FBVztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUEifQ==