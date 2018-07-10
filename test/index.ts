import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('node-static', () => {

  m.it('should serve static content', async function () {
    let ctx = new RpsContext;
    let md = new RPSModule(ctx);

    let output = await md.serverStatic(ctx,{},".");

    console.log('serving now...');

  }).timeout(0);

})
