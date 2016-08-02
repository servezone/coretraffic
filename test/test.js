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
            this.timeout(30000);
            coretraffic.start({
                cfKey: process.env.CF_KEY,
                cfEmail: process.env.CF_EMAIL
            }).then(() => {
                shelljs.exec(`docker run -e DOMAIN:test1.bleu.de --name testContainer`, { silent: true });
                shelljs.exec(`docker stop testContainer`, { silent: true });
                shelljs.exec(`docker rm testContainer`, { silent: true });
                coretraffic.taskHandleChange.trigger().then(() => {
                    coretraffic.end();
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUNoQixNQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyx1QkFBcUIsTUFBTSxDQUFDLENBQUE7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUVsRSxNQUFPLFdBQVcsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBQ3BCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDakIsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLFVBQVUsSUFBSTtZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTthQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMseURBQXlELEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDMUYsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzFELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQSJ9