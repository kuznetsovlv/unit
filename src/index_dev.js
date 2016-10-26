import {Unit, Test}	from './index';

const testUnit_1 = new Unit (x => x, 'Check "Exist"');
const testUnit_2 = new Unit (x => x, 'Check "isEqual"');
const testUnit_3 = new Unit (x => x, 'Check "isEqualNonStrict"');
const testUnit_4 = new Unit (x => x, 'Check "isFalse"');
const testUnit_5 = new Unit (x => x, 'Check "isInstanceOf"');

testUnit_1.addTest(new Test({arg: null, method: 'exist'}))
          .addTest(new Test({arg: undefined, method: 'exist'}))
          .addTest(new Test({arg: NaN, method: 'exist'}))
          .addTest(new Test({arg: 0, method: 'exist'}))
          .drawResult();

testUnit_2.addTest(new Test({arg: 4, expectation: 4, method: 'isEqual'}))
          .addTest(new Test({arg: 4, expectation: '4', method: 'isEqual'}))
          .addTest(new Test({arg: '4', expectation: 4, method: 'isEqual'}))
          .addTest(new Test({arg: '4', expectation: '4', method: 'isEqual'}))
          .addTest(new Test({arg: 4, expectation: 8, method: 'isEqualNonStrict'}))
          .drawResult();

testUnit_3.addTest(new Test({arg: 4, expectation: 4, method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: 4, expectation: '4', method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: '4', expectation: 4, method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: '4', expectation: '4', method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: 4, expectation: 8, method: 'isEqualNonStrict'}))
          .drawResult();

testUnit_4.addTest(new Test({arg: null, method: 'isFalse'}))
          .addTest(new Test({arg: undefined, method: 'isFalse'}))
          .addTest(new Test({arg: NaN, method: 'isFalse'}))
          .addTest(new Test({arg: 0, method: 'isFalse'}))
          .addTest(new Test({arg: '', method: 'isFalse'}))
          .addTest(new Test({arg: false, method: 'isFalse'}))
          .addTest(new Test({arg: '0', method: 'isFalse'}))
          .addTest(new Test({arg: 'false', method: 'isFalse'}))
          .drawResult();

testUnit_5.addTest(new Test({arg: {}, expectation: Object, method: 'isInstanceOf'}))
          .addTest(new Test({arg: {}, expectation: Array, method: 'isInstanceOf'}))
          .addTest(new Test({arg: [], expectation: Array, method: 'isInstanceOf'}))
          .addTest(new Test({arg: [], expectation: Object, method: 'isInstanceOf'}))
          .drawResult();
