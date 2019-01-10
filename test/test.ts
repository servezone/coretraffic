import coretraffic = require('../ts/index');

import { tap, expect } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';
let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit');

tap.test(' .start()should start an coretraffic instance', async (tools) => {
  
});
