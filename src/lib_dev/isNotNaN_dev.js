import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNotNaN"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNotNaN'}))
                       .addTest(new Test({arg: null, method: 'isNotNaN'}))
                       .addTest(new Test({arg: undefined, method: 'isNotNaN'}))
                       .addTest(new Test({arg: false, method: 'isNotNaN'}))
                       .addTest(new Test({arg: 0, method: 'isNotNaN'}));
