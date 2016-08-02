"use strict";
const plugins = require("./coretraffic.plugins");
const taskbuffer_1 = require("taskbuffer");
exports.init = (sockUrl) => {
    let done = plugins.q.defer();
    exports.dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    plugins.beautylog.info("Dockersock created!");
    done.resolve();
    return done.promise;
};
exports.taskGetContainerTrafficData = new taskbuffer_1.Task({
    name: "handleChange",
    taskFunction: () => {
        let done = plugins.q.defer();
        exports.dockersock.listContainersDetailed()
            .then((responseArg) => {
            let detailedContainerData = responseArg.map(function (containerObject) {
                return {
                    id: containerObject.Id,
                    domain: plugins.smartstring.docker.makeEnvObject(containerObject.Config.Env).VIRTUAL_HOST,
                    ip: containerObject.NetworkSettings.Networks.bridge.IPAddress
                };
            });
            console.log(detailedContainerData);
            done.resolve(detailedContainerData);
        });
        return done.promise;
    },
    buffered: true,
    bufferMax: 1
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZG9ja2Vyc29jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2NvcmV0cmFmZmljLmRvY2tlcnNvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsNkJBQXFCLFlBQVksQ0FBQyxDQUFBO0FBR3ZCLFlBQUksR0FBRyxDQUFDLE9BQWU7SUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixrQkFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvRUFBb0U7SUFDN0gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUM3QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUM7QUFTUyxtQ0FBMkIsR0FBRyxJQUFJLGlCQUFJLENBQUM7SUFDOUMsSUFBSSxFQUFFLGNBQWM7SUFDcEIsWUFBWSxFQUFFO1FBQ1YsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixrQkFBVSxDQUFDLHNCQUFzQixFQUFFO2FBQzlCLElBQUksQ0FBQyxDQUFDLFdBQWdCO1lBQ25CLElBQUkscUJBQXFCLEdBQTZCLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxlQUFlO2dCQUMzRixNQUFNLENBQUM7b0JBQ0gsRUFBRSxFQUFFLGVBQWUsQ0FBQyxFQUFFO29CQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWTtvQkFDekYsRUFBRSxFQUFFLGVBQWUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2lCQUNoRSxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVEsRUFBRSxJQUFJO0lBQ2QsU0FBUyxFQUFFLENBQUM7Q0FDZixDQUFDLENBQUMifQ==