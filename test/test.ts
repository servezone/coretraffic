import coretraffic = require('../ts/index');

import { tap, expect } from '@pushrocks/tapbundle';
import { Qenv } from 'qenv';
let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit');

tap.test(' .start()should start an coretraffic instance', async tools => {
  this.timeout(240000);
  await coretraffic.start({
    cfKey: process.env.CF_KEY,
    cfEmail: process.env.CF_EMAIL
  });
  async () => {
    console.log('now starting a test container');
    shelljs.exec(`docker run -e HOST=test1.bleu.de --name testContainer -d nginx`);
    console.log('now starting a test handle change');
    coretraffic.taskHandleChange.trigger().then(() => {
      shelljs.exec(`docker stop testContainer`, { silent: true });
      shelljs.exec(`docker rm testContainer`, { silent: true });
      coretraffic.end();
    });
  };
});
