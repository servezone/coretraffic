import plugins = require("./coretraffic.plugins");
import paths = require("./coretraffic.paths");
import {NginxConfig} from "smartnginx";

let nginxConfig:NginxConfig;

export let updateConfig = () =>  {
      
};

export let init =  () => {
    let done = plugins.q.defer();
    nginxConfig  = new plugins.smartnginx.NginxConfig({
        cfKey:"",
        cfEmail:""
    });
}