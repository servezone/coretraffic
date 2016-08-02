"use strict";
const plugins = require("./coretraffic.plugins");
let checkDockersock = function () {
    try {
        plugins.smartfile.fs.fileExistsSync("/var/run/docker.sock");
        plugins.beautylog.log("great, docker.sock is available!");
        return true;
    }
    catch (err) {
        plugins.beautylog.warn("docker.sock is unavailable.");
        return false;
    }
};
exports.init = () => {
    let done = plugins.q.defer();
    if (checkDockersock()) {
        plugins.beautylog.ok("Environment checks passed!");
        done.resolve();
    }
    else {
        plugins.beautylog.warn("Environment checks failed!");
        done.reject("Environment checks failed!");
    }
    ;
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMuZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9jb3JldHJhZmZpYy5lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sdUJBQXVCLENBQUMsQ0FBQTtBQUVqRCxJQUFJLGVBQWUsR0FBRztJQUNsQixJQUFJLENBQUM7UUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FDQTtJQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLFlBQUksR0FBRztJQUNkLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFBQSxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFBIn0=