import * as plugins from './coretraffic.plugins';

let checkDockersock = function(): boolean {
  try {
    plugins.smartfile.fs.fileExistsSync('/var/run/docker.sock');
    plugins.smartlog.defaultLogger.info('great, docker.sock is available!');
    return true;
  } catch (err) {
    plugins.smartlog.defaultLogger.warn('docker.sock is unavailable.');
    return false;
  }
};

export let init = () => {
  let done = plugins.smartpromise.defer();
  if (checkDockersock()) {
    plugins.smartlog.defaultLogger.info('Environment checks passed!');
    done.resolve();
  } else {
    plugins.smartlog.defaultLogger.warn('Environment checks failed!');
    done.reject('Environment checks failed!');
  }
  return done.promise;
};
