import * as plugins from './coretraffic.plugins';

export const logger = new plugins.smartlog.Smartlog({
  logContext: {
    company: 'some company',
    companyunit: 'some company unit',
    containerName: 'coretraffic',
    environment: 'production',
    runtime: 'node',
    zone: 'somezone'
  }
});


