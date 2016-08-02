export interface ICoretrafficConfig {
    cfKey: string;
    cfEmail: string;
    dockerDomainEnvName?: string;
}
export declare let config: ICoretrafficConfig;
export declare let setConfig: (optionsArg: ICoretrafficConfig) => void;
