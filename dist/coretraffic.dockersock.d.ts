/// <reference types="q" />
import plugins = require("./coretraffic.plugins");
import { Task } from "taskbuffer";
export declare let dockersock: plugins.dockersock.Dockersock;
export declare let init: (sockUrl: string) => plugins.q.Promise<{}>;
export declare let taskGetContainerTrafficData: Task;
