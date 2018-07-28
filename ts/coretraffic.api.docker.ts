import plugins = require('./coretraffic.plugins');
import { Task } from 'taskbuffer';

let dockerInstance: plugins.docker.Docker;
export let init = (sockUrl?: string) => {
  let done = plugins.smartpromise.defer();
  dockerInstance = new plugins.docker.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
  done.resolve();
  return done.promise;
};

export let taskGetContainerTrafficData = new Task({
  name: 'handle change',
  taskFunction: () => {
    let done = plugins.smartpromise.defer();
    dockerInstance
      .listContainersDetailed()
      .then((responseArg: any[]) => {
        let detailedContainerData: plugins.smartnginx.IHostConfigData[] = responseArg
          .map(function(containerObject) {
            return {
              hostName: plugins.smartstring.docker.makeEnvObject(containerObject.Config.Env).HOST,
              destination: containerObject.NetworkSettings.Networks.bridge.IPAddress,
              type: plugins.smartnginx.hostTypes.reverseProxy
            };
          })
          .filter(item => {
            return typeof item.hostName !== 'undefined';
          });
        done.resolve(detailedContainerData);
      })
      .catch(err => {
        console.log(err);
      });
    return done.promise;
  },
  buffered: true,
  bufferMax: 1
});
