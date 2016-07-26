/// <reference types="q" />
import plugins = require("./coretraffic.plugins");
export declare let dockersock: plugins.dockersock.Dockersock;
export declare let init: (sockUrl: string) => plugins.q.Promise<{}>;
export declare let handleChange: () => void;
