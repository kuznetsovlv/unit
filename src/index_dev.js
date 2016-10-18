import {Unit, Test}	from './index';

const testUnit = new Unit (x => x, 'Compare isEqual and isEqualNonStrict');
const testUnit2 = new Unit (x => x, 'Library test 2');
const testUnit3 = new Unit ((x) => {throw new Error('Test Error.')}, 'Library test 3');
const testUnit4 = new Unit (x => x, 'Library test 4');

testUnit.addTest(new Test({
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
