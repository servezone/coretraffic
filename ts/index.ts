console.log('**** Starting coretraffic ****');
import * as plugins from './coretraffic.plugins';
import * as paths from './coretraffic.paths';

import * as CoretrafficConfig from './coretraffic.config';
import * as CoretrafficDockersock from './coretraffic.dockersock';
export * from './coretraffic.taskchains';
import * as CoretrafficEnvironment from './coretraffic.environment';
import * as CoretrafficEvents from './coretraffic.events';
import * as CoretrafficNginx from './coretraffic.nginx';

/**************************************************************
 ************ Initial Start ********
 **************************************************************/
let startDeferred = plugins.q.defer();
let coreTrafficRunning = plugins.q.defer();
startDeferred.promise.then(async () => {
  await CoretrafficEnvironment.init();
  await CoretrafficDockersock.init();
  await CoretrafficNginx.init();
  await CoretrafficEvents.init();
});

/**
 * starts coretraffic with a given config;
 */
export let start = (optionsArg: CoretrafficConfig.ICoretrafficConfig) => {
  let done = plugins.q.defer();
  CoretrafficConfig.setConfig(optionsArg);
  startDeferred.resolve();
  coreTrafficRunning.promise.then(() => {
    plugins.beautylog.info('start tasks complete!');
    done.resolve();
  });
  return done.promise;
};

export let end = () => {
  CoretrafficDockersock.dockersock.endRequests();
};
