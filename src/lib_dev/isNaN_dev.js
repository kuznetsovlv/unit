import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNaN"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNaN'}))
                       .addTest(new Test({arg: null, method: 'isNaN'}))
                       .addTest(new Test({arg: undefined, method: 'isNaN'}))
                       .addTest(new Test({arg: false, method: 'isNaN'}))
                       .addTest(new Test({arg: 0, method: 'isNaN'}));
