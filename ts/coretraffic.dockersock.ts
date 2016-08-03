import plugins = require("./coretraffic.plugins");
import { Task } from "taskbuffer";

export let dockersock: plugins.dockersock.Dockersock;
export let init = (sockUrl: string) => {
    let done = plugins.q.defer();
    dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    plugins.beautylog.ok("Dockersock created!")
    done.resolve();
    return done.promise;
};

export let taskGetContainerTrafficData = new Task({
    name: "handle change",
    taskFunction: () => {
        let done = plugins.q.defer();
        dockersock.listContainersDetailed()
            .then((responseArg:any[]) => {
                let detailedContainerData:plugins.smartnginx.IHostConfigData[] = responseArg.map(function (containerObject) {
                    return {
                        hostName: plugins.smartstring.docker.makeEnvObject(containerObject.Config.Env).HOST,
                        destination: containerObject.NetworkSettings.Networks.bridge.IPAddress,
                        type: plugins.smartnginx.hostTypes.reverseProxy
                    }
                }).filter(item => {
                    return typeof item.hostName !== "undefined";
                });
                done.resolve(detailedContainerData);
            }).catch(err => {console.log(err)});
        return done.promise;
    },
    buffered: true,
    bufferMax: 1
});
