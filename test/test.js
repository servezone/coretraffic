"use strict";
require("typings-test");
require("should");
const shelljs = require("shelljs");
const qenv_1 = require("qenv");
let testQenv = new qenv_1.Qenv(process.cwd(), process.cwd() + "/.nogit");
const coretraffic = require("../dist/index");
describe("coretraffic", function () {
    describe(".start()", function () {
        it("should start an coretraffic instance", function (done) {
            this.timeout(240000);
            coretraffic.start({
                cfKey: process.env.CF_KEY,
                cfEmail: process.env.CF_EMAIL
            }).then(() => {
                console.log("now starting a test container");
                shelljs.exec(`docker run -e HOST=test1.bleu.de --name testContainer -d nginx`);
                console.log("now starting a test handle change");
                coretraffic.taskHandleChange.trigger().then(() => {
                    shelljs.exec(`docker stop testContainer`, { silent: true });
                    shelljs.exec(`docker rm testContainer`, { silent: true });
                    coretraffic.end();
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUNoQixNQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyx1QkFBcUIsTUFBTSxDQUFDLENBQUE7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUVsRSxNQUFPLFdBQVcsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBQ3BCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDakIsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLFVBQVUsSUFBSTtZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTthQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO2dCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ2pELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUMxRCxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksRUFBRSxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUEifQ==