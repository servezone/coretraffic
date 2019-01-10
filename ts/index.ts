console.log('**** Starting coretraffic ****');
import * as plugins from './coretraffic.plugins';
import * as paths from './coretraffic.paths';

import { serviceQenv } from './coretraffic.config';

import { CoreTraffic } from './coretraffic.classes.coretraffic';

const run = async () => {
  const coretrafficInstance = new CoreTraffic();
  coretrafficInstance.handleDockerEvents();
  coretrafficInstance.setupRoutingTask.trigger();
};
