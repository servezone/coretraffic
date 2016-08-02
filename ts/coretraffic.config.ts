import * as plugins from "./coretraffic.plugins";

export interface ICoretrafficConfig {
    cfKey:string;
    cfEmail:string;
    dockerDomainEnvName?:string;
};

export let config:ICoretrafficConfig;

export let setConfig = (optionsArg:ICoretrafficConfig) => {
    config = optionsArg;
}