import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNotNull"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNotNull'}))
                       .addTest(new Test({arg: null, method: 'isNotNull'}))
                       .addTest(new Test({arg: undefined, method: 'isNotNull'}))
                       .addTest(new Test({arg: false, method: 'isNotNull'}))
                       .addTest(new Test({arg: 0, method: 'isNotNull'}));
