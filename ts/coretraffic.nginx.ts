import plugins = require("./coretraffic.plugins");
import paths = require("./coretraffic.paths");

// classes
import {NginxConfig,NginxZone} from "smartnginx";
import {Task} from "taskbuffer";

// interfaces
import {IContainerTrafficObject} from "./coretraffic.dockersock"

let nginxConfig:NginxConfig;

export let updateConfig = () =>  {
      
};

export let init =  () => {
    let done = plugins.q.defer();
    nginxConfig  = new plugins.smartnginx.NginxConfig({
        cfKey:"",
        cfEmail:""
    });
};

export let taskSetupNginx = new Task({
    name:"setupNginx",
    taskFunction: (containerTrafficData:IContainerTrafficObject) => {
        let done = plugins.q.defer();
        // nginxConfig.addZone();
        done.resolve();
        return done.promise;
    }
})