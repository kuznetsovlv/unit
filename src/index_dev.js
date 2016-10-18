import {Unit, Test}	from './index';

const testUnit_1 = new Unit (x => x, 'Compare "isEqual" and "isEqualNonStrict"');
const testUnit_2 = new Unit (x => x, 'Check methods "exist" and "notExist"');
const testUnit_3 = new Unit (x => x, 'Check methods "isNull" and "isNotNull"');
const testUnit_4 = new Unit (x => x, 'Check methods "isNill" and "isNotNill"');
const testUnit_5 = new Unit (x => x, 'Check methods "isNaN" and "isNotNaN"');
const testUnit_6 = new Unit (x => x, 'Check methods "isTrue" and "isFalse"');

testUnit_1.addTest(new Test({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
})).addTest(new Test({
	arg: 5,
	expectation: '5',
	method: 'isEqual'
})).addTest(new Test({
	arg: 5,
	expectation: 5,
	method: 'isEqualNonStrict'
})).addTest(new Test({
	arg: 5,
	expectation: '5',
	method: 'isEqualNonStrict'
})).drawResult();

testUnit_2.addTest(new Test({arg: 5, method: 'exist'}))
          .addTest(new Test({arg: undefined, method: 'exist'}))
          .addTest(new Test({arg: null, method: 'exist'}))
          .addTest(new Test({arg: NaN, method: 'exist'}))
          .addTest(new Test({arg: 5, method: 'notExist'}))
          .addTest(new Test({arg: undefined, method: 'notExist'}))
          .addTest(new Test({arg: null, method: 'notExist'}))
          .addTest(new Test({arg: NaN, method: 'notExist'}))
          .drawResult();

testUnit_3.addTest(new Test({arg: 5, method: 'isNull'}))
          .addTest(new Test({arg: undefined, method: 'isNull'}))
          .addTest(new Test({arg: null, method: 'isNull'}))
          .addTest(new Test({arg: NaN, method: 'isNull'}))
          .addTest(new Test({arg: 5, method: 'isNotNull'}))
          .addTest(new Test({arg: undefined, method: 'isNotNull'}))
          .addTest(new Test({arg: null, method: 'isNotNull'}))
          .addTest(new Test({arg: NaN, method: 'isNotNull'}))
          .drawResult();

testUnit_4.addTest(new Test({arg: 5, method: 'isNill'}))
          .addTest(new Test({arg: undefined, method: 'isNill'}))
          .addTest(new Test({arg: null, method: 'isNill'}))
          .addTest(new Test({arg: NaN, method: 'isNill'}))
          .addTest(new Test({arg: 5, method: 'isNotNill'}))
          .addTest(new Test({arg: undefined, method: 'isNotNill'}))
          .addTest(new Test({arg: null, method: 'isNotNill'}))
          .addTest(new Test({arg: NaN, method: 'isNotNill'}))
          .drawResult();

testUnit_5.addTest(new Test({arg: 5, method: 'isNaN'}))
          .addTest(new Test({arg: undefined, method: 'isNaN'}))
          .addTest(new Test({arg: null, method: 'isNaN'}))
          .addTest(new Test({arg: NaN, method: 'isNaN'}))
          .addTest(new Test({arg: 5, method: 'isNotNaN'}))
          .addTest(new Test({arg: undefined, method: 'isNotNaN'}))
          .addTest(new Test({arg: null, method: 'isNotNaN'}))
          .addTest(new Test({arg: NaN, method: 'isNotNaN'}))
          .drawResult();

testUnit_6.addTest(new Test({arg: 5, method: 'isTrue'}))
          .addTest(new Test({arg: undefined, method: 'isTrue'}))
          .addTest(new Test({arg: null, method: 'isTrue'}))
          .addTest(new Test({arg: NaN, method: 'isTrue'}))
          .addTest(new Test({arg: 0, method: 'isTrue'}))
          .addTest(new Test({arg: '', method: 'isTrue'}))
          .addTest(new Test({arg: 'true', method: 'isTrue'}))
          .addTest(new Test({arg: 'false', method: 'isTrue'}))
          .addTest(new Test({arg: true, method: 'isTrue'}))
          .addTest(new Test({arg: false, method: 'isTrue'}))
          .addTest(new Test({arg: 5, method: 'isFalse'}))
          .addTest(new Test({arg: undefined, method: 'isFalse'}))
          .addTest(new Test({arg: null, method: 'isFalse'}))
          .addTest(new Test({arg: NaN, method: 'isFalse'}))
          .addTest(new Test({arg: 0, method: 'isFalse'}))
          .addTest(new Test({arg: '', method: 'isFalse'}))
          .addTest(new Test({arg: 'true', method: 'isFalse'}))
          .addTest(new Test({arg: 'false', method: 'isFalse'}))
          .addTest(new Test({arg: true, method: 'isFalse'}))
          .addTest(new Test({arg: false, method: 'isFalse'}))
          .drawResult();