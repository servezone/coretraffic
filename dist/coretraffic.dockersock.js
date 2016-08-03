"use strict";
const plugins = require("./coretraffic.plugins");
const taskbuffer_1 = require("taskbuffer");
exports.init = (sockUrl) => {
    let done = plugins.q.defer();
    exports.dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    plugins.beautylog.ok("Dockersock created!");
    done.resolve();
    return done.promise;
};
exports.taskGetContainerTrafficData = new taskbuffer_1.Task({
    name: "handle change",
    taskFunction: () => {
        let done = plugins.q.defer();
        exports.dockersock.listContainersDetailed()
            .then((responseArg) => {
            let detailedContainerData = responseArg.map(function (containerObject) {
                return {
                    hostName: plugins.smartstring.docker.makeEnvObject(containerObject.Config.Env).HOST,
                    destination: containerObject.NetworkSettings.Networks.bridge.IPAddress,
                    type: plugins.smartnginx.hostTypes.reverseProxy
                };
            }).filter(item => {
                return typeof item.hostName !== "undefined";
            });
            done.resolve(detailedContainerData);
        }).catch(err => { console.log(err); });
        return done.promise;
    },
    buffered: true,
    bufferMax: 1
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZG9ja2Vyc29jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2NvcmV0cmFmZmljLmRvY2tlcnNvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsNkJBQXFCLFlBQVksQ0FBQyxDQUFBO0FBR3ZCLFlBQUksR0FBRyxDQUFDLE9BQWU7SUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixrQkFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvRUFBb0U7SUFDN0gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyxtQ0FBMkIsR0FBRyxJQUFJLGlCQUFJLENBQUM7SUFDOUMsSUFBSSxFQUFFLGVBQWU7SUFDckIsWUFBWSxFQUFFO1FBQ1YsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixrQkFBVSxDQUFDLHNCQUFzQixFQUFFO2FBQzlCLElBQUksQ0FBQyxDQUFDLFdBQWlCO1lBQ3BCLElBQUkscUJBQXFCLEdBQXdDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxlQUFlO2dCQUN0RyxNQUFNLENBQUM7b0JBQ0gsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQ25GLFdBQVcsRUFBRSxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUztvQkFDdEUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVk7aUJBQ2xELENBQUE7WUFDTCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDVixNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUSxFQUFFLElBQUk7SUFDZCxTQUFTLEVBQUUsQ0FBQztDQUNmLENBQUMsQ0FBQyJ9