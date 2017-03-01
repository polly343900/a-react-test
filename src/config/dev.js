'use strict';

import baseConfig from './base';

let config = {
  host: 'http://localhost:7878',
  appEnv: 'dev',  // feel free to remove the appEnv property here
  isMock: true
};

export default Object.freeze(Object.assign({}, baseConfig, config));
