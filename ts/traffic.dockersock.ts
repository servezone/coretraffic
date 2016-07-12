import plugins = require("./traffic.plugins");

export let dockersock:plugins.dockersock.Dockersock;
export let init = (sockUrl:string) => {
    let done = plugins.q.defer();
    dockersock = new plugins.dockersock.Dockersock(sockUrl);
    done.resolve();
    return done.promise;
};