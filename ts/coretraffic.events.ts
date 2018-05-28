import * as plugins from './coretraffic.plugins';
import * as corerafficDockersock from './coretraffic.dockersock';
import * as taskchains from './coretraffic.taskchains';

export let init = () => {
  let done = plugins.q.defer();
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
  plugins.beautylog.ok('Subscribed to change events!');
  done.resolve();
  return done.promise;
};
