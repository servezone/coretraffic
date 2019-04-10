console.log('**** Starting coretraffic ****');
import * as plugins from './coretraffic.plugins';
import * as paths from './coretraffic.paths';

const projectinfo = new plugins.projectinfo.ProjectInfo(paths.packageDir);

import { serviceQenv } from './coretraffic.config';
import { CoreTraffic } from './coretraffic.classes.coretraffic';

const run = async () => {
  console.log(`starting coretraffic version ${projectinfo.npm.version}`)
  const coretrafficInstance = new CoreTraffic();
  coretrafficInstance.start();
  console.log('coretraffic successfully started!');
};

if(process.env.CLI_CALL) {
  run();
}
