console.log('**** Starting coretraffic ****');
import * as plugins from './coretraffic.plugins';
import * as paths from './coretraffic.paths';
import { logger } from './coretraffic.logging';

const projectinfo = new plugins.projectinfo.ProjectInfo(paths.packageDir);
import { CoreTraffic } from './coretraffic.classes.coretraffic';
export { CoreTraffic };

let coretrafficInstance: CoreTraffic;

export const runCli = async () => {
  logger.log('info', `coretraffic@v${projectinfo.npm.version}`);
  coretrafficInstance = new CoreTraffic();
  await coretrafficInstance.start();
  logger.log('info', 'coretraffic successfully started!');
};

export const stop = async () => {
  coretrafficInstance.stop();
};
