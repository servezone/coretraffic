import "typings-test";
import * as beautylog from "beautylog";
import "should";
import * as shelljs from "shelljs";
import { Qenv } from "qenv";
let testQenv = new Qenv(process.cwd(), process.cwd() + "/.nogit");

import coretraffic = require("../dist/index");

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
                })
            });
        })
    });
})