import * as plugins from './coretraffic.plugins';
import * as corerafficDockersock from './coretraffic.api.docker';
import * as taskchains from './coretraffic.classes.traffichandler';

export let init = () => {
  let done = plugins.smartpromise.defer();
  let dockerChangeObservable = corerafficDockersock.dockersock.getChangeObservable();
  let changeSubscription = dockerChangeObservable.subscribe(
    function(x) {
      taskchains.taskHandleChange.trigger();
    },
    function(err) {
      console.log('Error: ' + err);
    },
    function() {
      console.log('Completed');
    }
  );
  plugins.smartlog.defaultLogger.info('Subscribed to change events!');
  done.resolve();
  return done.promise;
};
