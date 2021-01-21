delete process.env.CLI_CALL;
import coretraffic = require('../ts/index');

import { tap, expect } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';

if (process.env.CI) {
  process.exit(0);
}

const testQenv = new Qenv('./', './.nogit');
let testCoreTraffic: coretraffic.CoreTraffic;

tap.test('should create an coretraffic instance', async (tools) => {
  testCoreTraffic = new coretraffic.CoreTraffic();
  expect(testCoreTraffic).to.be.instanceOf(coretraffic.CoreTraffic);
});

tap.test('should start the instance', async (tools) => {
  await testCoreTraffic.start();
});

tap.test('should keep the instance alive', async (tools) => {
  await tools.delayFor(10000);
});

tap.test('should stop the instance', async (tools) => {
  await testCoreTraffic.stop();
});

tap.start();
