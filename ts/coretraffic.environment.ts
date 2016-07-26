import * as plugins from "./coretraffic.plugins";

let checkDockersock = function (): boolean {
    try {
        plugins.smartfile.checks.fileExistsSync("/var/run/docker.sock");
        plugins.beautylog.log("great, docker.sock is available!");
        return true;
    }
    catch (err) {
        plugins.beautylog.warn("docker.sock is unavailable.");
        return false;
    }
};

export let init = () => {
    let done = plugins.q.defer();
    if (
        checkDockersock()
    ) {
        plugins.beautylog.ok("Environment checks passed!");
        done.resolve();
    } else {
        plugins.beautylog.warn("Environment checks failed!");
        done.reject("Environment checks failed!");
    };
    return done.promise;
}