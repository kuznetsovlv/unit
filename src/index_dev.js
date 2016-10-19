import {Unit, Test}	from './index';

const testUnit_1 = new Unit (x => x, 'Check "isTypeOf"');
const testUnit_2 = new Unit (x => x, 'Check methods "isInstanceOf"');


testUnit_1.addTest(new Test({arg: 5, method: 'isTypeOf', expectation: 'Object'}))
          .addTest(new Test({arg: 5, method: 'isTypeOf', expectation: 'number'}))
          .addTest(new Test({arg: 5, method: 'isTypeOf', expectation: 'string'}))
          .addTest(new Test({arg: '5', method: 'isTypeOf', expectation: 'number'}))
          .addTest(new Test({arg: '5', method: 'isTypeOf', expectation: 'string'}))
          .addTest(new Test({arg: undefined, method: 'isTypeOf', expectation: 'undefined'}))
          .addTest(new Test({arg: undefined, method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: null, method: 'isTypeOf', expectation: 'null'}))
          .addTest(new Test({arg: null, method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: NaN, method: 'isTypeOf', expectation: 'NaN'}))
          .addTest(new Test({arg: NaN, method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: NaN, method: 'isTypeOf', expectation: 'number'}))
          .addTest(new Test({arg: {}, method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: {a: 2}, method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: [1, 2, 3], method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: [1, 2, 3], method: 'isTypeOf', expectation: 'array'}))
          .addTest(new Test({arg: new Date(), method: 'isTypeOf', expectation: 'object'}))
          .addTest(new Test({arg: new Date().toString(), method: 'isTypeOf', expectation: 'string'}))
          .addTest(new Test({arg: new Date().toString(), method: 'isTypeOf', expectation: 'object'}))
          .drawResult();

testUnit_2.addTest(new Test({arg: 5, method: 'isInstanceOf', expectation: Object}))
          .addTest(new Test({arg: 5, method: 'isInstanceOf', expectation: Number}))
          .addTest(new Test({arg: 5, method: 'isInstanceOf', expectation: String}))
          .addTest(new Test({arg: '5', method: 'isInstanceOf', expectation: String}))
          .addTest(new Test({arg: NaN, method: 'isInstanceOf', expectation: Number}))
          .addTest(new Test({arg: {}, method: 'isInstanceOf', expectation: Object}))
          .addTest(new Test({arg: {a: 2}, method: 'isInstanceOf', expectation: Object}))
          .addTest(new Test({arg: [1, 2, 3], method: 'isInstanceOf', expectation: Object}))
          .addTest(new Test({arg: [1, 2, 3], method: 'isInstanceOf', expectation: Array}))
          .addTest(new Test({arg: new Date(), method: 'isInstanceOf', expectation: Object}))
          .addTest(new Test({arg: new Date(), method: 'isInstanceOf', expectation: Date}))
          .addTest(new Test({arg: {}, method: 'isInstanceOf', expectation: Array}))
          .addTest(new Test({arg: {}, method: 'isInstanceOf', expectation: Date}))
          .drawResult();