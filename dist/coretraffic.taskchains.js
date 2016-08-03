"use strict";
// classes
const taskbuffer_1 = require("taskbuffer");
// tasks
const coretraffic_dockersock_1 = require("./coretraffic.dockersock");
const coretraffic_nginx_1 = require("./coretraffic.nginx");
exports.taskHandleChange = new taskbuffer_1.Taskchain({
    taskArray: [
        coretraffic_dockersock_1.taskGetContainerTrafficData,
        coretraffic_nginx_1.taskUpdateNginxConfig
    ],
    buffered: true,
    bufferMax: 1
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXRyYWZmaWMudGFza2NoYWlucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2NvcmV0cmFmZmljLnRhc2tjaGFpbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLFVBQVU7QUFDViw2QkFBd0IsWUFBWSxDQUFDLENBQUE7QUFFckMsUUFBUTtBQUNSLHlDQUEwQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JFLG9DQUFvQyxxQkFFcEMsQ0FBQyxDQUZ3RDtBQUU5Qyx3QkFBZ0IsR0FBRyxJQUFJLHNCQUFTLENBQUM7SUFDeEMsU0FBUyxFQUFDO1FBQ04sb0RBQTJCO1FBQzNCLHlDQUFxQjtLQUN4QjtJQUNELFFBQVEsRUFBRSxJQUFJO0lBQ2QsU0FBUyxFQUFFLENBQUM7Q0FDZixDQUFDLENBQUMifQ==