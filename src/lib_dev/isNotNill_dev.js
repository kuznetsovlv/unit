import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isNotNill"');

export default testUnit.addTest(new Test({arg: NaN, method: 'isNotNill'}))
                       .addTest(new Test({arg: null, method: 'isNotNill'}))
                       .addTest(new Test({arg: undefined, method: 'isNotNill'}))
                       .addTest(new Test({arg: false, method: 'isNotNill'}))
                       .addTest(new Test({arg: 0, method: 'isNotNill'}));
