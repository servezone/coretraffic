import plugins = require('./coretraffic.plugins');
import paths = require('./coretraffic.paths');
import * as ConfigModule from './coretraffic.config';

// classes
import { NginxConfig, NginxHost } from 'smartnginx';
import { Task } from 'taskbuffer';

let nginxConfig: NginxConfig;

export let init = () => {
  let done = plugins.smartpromise.defer();
  nginxConfig = new plugins.smartnginx.NginxConfig({
    cfKey: ConfigModule.config.cfKey,
    cfEmail: ConfigModule.config.cfEmail
  });
  plugins.smartlog.info('NginxConfig instance created!');
  done.resolve();
  return done.promise;
};

export let taskUpdateNginxConfig = new Task({
  name: 'update nginxConfig',
  taskFunction: (containerTrafficDataArg: plugins.smartnginx.IHostConfigData[]) => {
    let done = plugins.smartpromise.defer();
    console.log(containerTrafficDataArg);
    nginxConfig.clean();
    containerTrafficDataArg.forEach(function(item) {
      let newNginxHost = new NginxHost(item);
      nginxConfig.addHost(newNginxHost);
    });
    nginxConfig
      .deploy()
      .then(done.resolve)
      .catch(err => {
        console.log(err);
      });
    return done.promise;
  }
});
