import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isInstanceOf"');

export default testUnit.addTest(new Test({arg: {}, expectation: Object, method: 'isInstanceOf'}))
                       .addTest(new Test({arg: {}, expectation: Array, method: 'isInstanceOf'}))
                       .addTest(new Test({arg: [], expectation: Array, method: 'isInstanceOf'}))
                       .addTest(new Test({arg: [], expectation: Object, method: 'isInstanceOf'}))
                       .addTest(new Test({arg: new Date(), expectation: Object, method: 'isInstanceOf'}))
                       .addTest(new Test({arg: new Date(), expectation: Date, method: 'isInstanceOf'}));
