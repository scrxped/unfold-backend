if (process.env.NODE_ENV !== 'production')
    require('source-map-support/register');

import chai from 'chai';
import things from 'chai-things';
import sinon from 'sinon-chai';
chai.use(things);
chai.use(sinon);
global.expect = chai.expect;
