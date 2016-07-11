/// <reference types="q" />
import plugins = require("./traffic.plugins");
export declare let tickerSub: any;
export declare let start: () => plugins.q.Promise<{}>;
export declare let stop: () => void;
