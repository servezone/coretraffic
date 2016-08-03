import * as plugins from "./coretraffic.plugins.ts";

// classes
import {Taskchain} from "taskbuffer";

// tasks
import {taskGetContainerTrafficData} from "./coretraffic.dockersock";
import {taskUpdateNginxConfig} from "./coretraffic.nginx"

export let taskHandleChange = new Taskchain({
    taskArray:[
        taskGetContainerTrafficData,
        taskUpdateNginxConfig
    ],
    buffered: true,
    bufferMax: 1
});