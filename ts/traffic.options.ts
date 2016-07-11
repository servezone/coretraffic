import plugins = require("./traffic.plugins");
import TrafficEnvironment = require("./traffic.environment");

export let certOrigin = false; // when true, certificates are synced using git
export let certLe = false; // when true, new certificates are obtained from Lets Encrypt
export let cfUpdate = false; // when true, cloudflare is updated for containers on the same node
export let sshKey = false;
export let dockerSock = false;
export let buildOptions = function(){
    let done = plugins.q.defer();
    plugins.beautylog.log("now building options...");
    certOrigin = TrafficEnvironment.checkCertOriginSync();
    certLe = TrafficEnvironment.checkCertLeSync();
    cfUpdate = TrafficEnvironment.checkCfUpdateSync();
    sshKey = TrafficEnvironment.checkSshKeySync();
    if (TrafficEnvironment.checkDockersock()){
        dockerSock = true;
    } else {
        plugins.beautylog.error("no access to docker.sock defeats the purpose of this container, we exit!");
        process.exit(1);
    }
    done.resolve();
    return done.promise;
};