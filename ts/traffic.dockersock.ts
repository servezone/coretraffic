import plugins = require("./traffic.plugins");

export let dockersock:plugins.dockersock.Dockersock;
export let init = (sockUrl:string) => {
    let done = plugins.q.defer();
    dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    done.resolve();
    return done.promise;
};

export let handleChange = () => {
    dockersock.listContainersDetailed()
        .then((responseArg) => {
            console.log(responseArg);
        });
}