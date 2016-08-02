import plugins = require("./coretraffic.plugins");
import { Task } from "taskbuffer";

export let dockersock: plugins.dockersock.Dockersock;
export let init = (sockUrl: string) => {
    let done = plugins.q.defer();
    dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    plugins.beautylog.info("Dockersock created!")
    done.resolve();
    return done.promise;
};


export interface IContainerTrafficObject {
    id:string,
    domain:string,
    ip:string
}

export let taskGetContainerTrafficData = new Task({
    name: "handleChange",
    taskFunction: () => {
        let done = plugins.q.defer();
        dockersock.listContainersDetailed()
            .then((responseArg: any) => {
                let detailedContainerData:IContainerTrafficObject[] = responseArg.map(function (containerObject) {
                    return {
                        id: containerObject.Id,
                        domain: plugins.smartstring.docker.makeEnvObject(containerObject.Config.Env).VIRTUAL_HOST,
                        ip: containerObject.NetworkSettings.Networks.bridge.IPAddress
                    }
                });
                console.log(detailedContainerData);
                done.resolve(detailedContainerData);
            });
        return done.promise;
    },
    buffered: true,
    bufferMax: 1
});
