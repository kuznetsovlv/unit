import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isTypeOf"');

export default testUnit.addTest(new Test({arg: null, expectation: 'null', method: 'isTypeOf'}))
                       .addTest(new Test({arg: null, expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: undefined, expectation: 'undefined', method: 'isTypeOf'}))
                       .addTest(new Test({arg: undefined, expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: {a: 2}, expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: [1, 2], expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: {a: 2}, expectation: 'array', method: 'isTypeOf'}))
                       .addTest(new Test({arg: [1, 2], expectation: 'array', method: 'isTypeOf'}))
                       .addTest(new Test({arg: {a: 2}, expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: new Date(), expectation: 'object', method: 'isTypeOf'}))
                       .addTest(new Test({arg: new Date(), expectation: 'date', method: 'isTypeOf'}))
                       .addTest(new Test({arg: new Date(), expectation: 'Date', method: 'isTypeOf'}));
