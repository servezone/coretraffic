/// <reference types="q" />
import plugins = require("./coretraffic.plugins");
import { Task } from "taskbuffer";
export declare let init: () => plugins.q.Promise<{}>;
export declare let taskUpdateNginxConfig: Task;
