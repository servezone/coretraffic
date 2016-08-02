/// <reference types="q" />
import * as plugins from "./coretraffic.plugins";
import * as CoretrafficConfig from "./coretraffic.config";
export * from "./coretraffic.taskchains";
/**
 * starts coretraffic with a given config;
 */
export declare let start: (optionsArg: CoretrafficConfig.ICoretrafficConfig) => plugins.q.Promise<{}>;
export declare let end: () => void;
