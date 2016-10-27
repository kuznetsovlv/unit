import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNill"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNill'}))
                       .addTest(new Test({arg: null, method: 'isNill'}))
                       .addTest(new Test({arg: undefined, method: 'isNill'}))
                       .addTest(new Test({arg: false, method: 'isNill'}))
                       .addTest(new Test({arg: 0, method: 'isNill'}));
