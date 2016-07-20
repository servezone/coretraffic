"use strict";
const plugins = require("./traffic.plugins");
exports.init = (sockUrl) => {
    let done = plugins.q.defer();
    exports.dockersock = new plugins.dockersock.Dockersock(sockUrl); // when no sock Url is given dockersocj module will use default path
    done.resolve();
    return done.promise;
};
exports.handleChange = () => {
    exports.dockersock.listContainersDetailed()
        .then((responseArg) => {
        console.log(responseArg);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy5kb2NrZXJzb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvdHJhZmZpYy5kb2NrZXJzb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFPLE9BQU8sV0FBVyxtQkFBbUIsQ0FBQyxDQUFDO0FBR25DLFlBQUksR0FBRyxDQUFDLE9BQWM7SUFDN0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixrQkFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvRUFBb0U7SUFDN0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsb0JBQVksR0FBRztJQUN0QixrQkFBVSxDQUFDLHNCQUFzQixFQUFFO1NBQzlCLElBQUksQ0FBQyxDQUFDLFdBQVc7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFBIn0=