console.log('**** Starting coretraffic ****');
import * as plugins from './coretraffic.plugins';
import * as paths from './coretraffic.paths';

import { serviceQenv } from './coretraffic.config';

import { CoreTraffic } from './coretraffic.classes.coretraffic';

const run = async () => {
  const coretrafficInstance = new CoreTraffic();
  coretrafficInstance.start();
  

  console.log('coretraffic successfully started!');
};

if(process.env.CLI_CALL) {
  run();
}
