import * as plugins from './coretraffic.plugins';

// classes
import { Taskchain } from 'taskbuffer';

// tasks
import { taskGetContainerTrafficData } from './coretraffic.api.docker';
import { taskUpdateNginxConfig } from './coretraffic.api.nginx';

export let taskHandleChange = new Taskchain({
  taskArray: [taskGetContainerTrafficData, taskUpdateNginxConfig],
  buffered: true,
  bufferMax: 1
});
