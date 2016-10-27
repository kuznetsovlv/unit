import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNull"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNull'}))
                       .addTest(new Test({arg: null, method: 'isNull'}))
                       .addTest(new Test({arg: undefined, method: 'isNull'}))
                       .addTest(new Test({arg: false, method: 'isNull'}))
                       .addTest(new Test({arg: 0, method: 'isNull'}));
