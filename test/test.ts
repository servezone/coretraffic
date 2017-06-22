import * as beautylog from "beautylog";
import "should";
import * as shelljs from "shelljs";
import { Qenv } from "qenv";
let testQenv = new Qenv(process.cwd(), process.cwd() + "/.nogit");

import coretraffic = require("../dist/index");

        it(" .start()should start an coretraffic instance", function (done) {
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
                })
            });
        })