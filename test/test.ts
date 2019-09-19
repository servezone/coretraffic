import coretraffic = require('../ts/index');

import { tap, expect } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';

const testQenv = new Qenv('./', './.nogit');

tap.test(' .start()should start an coretraffic instance', async tools => {
  
});

tap.start();
