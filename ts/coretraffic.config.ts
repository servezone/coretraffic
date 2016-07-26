import * as plugins from "./coretraffic.plugins";

export interface ICoretrafficConfig {

};

export let config:ICoretrafficConfig;

export let setConfig = (optionsArg:ICoretrafficConfig) => {
    config = optionsArg;
}