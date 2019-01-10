import * as plugins from './coretraffic.plugins';
import {} from './coretraffic.config';
import { SmartNginx } from '@pushrocks/smartnginx';

export interface ICoretrafficConfig {
  dockerDomainEnvName?: string;
}

export class Coretraffic {
  smartnginx: SmartNginx;

  async init() {
    this.smartnginx = new SmartNginx();
  }
}
