import {Unit, Test}	from './index';

const testUnit = new Unit (x => x, 'Library test 1');
const testUnit2 = new Unit (x => x, 'Library test 2');
const testUnit3 = new Unit ((x) => {throw new Error('Test Error.')}, 'Library test 3');
const testUnit4 = new Unit (x => x, 'Library test 4');

testUnit.addTest(new Test({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
})).addTest(new Test({
	arg: 5,
	expectation: 6,
	method: 'isEqual'
})).drawResult();

testUnit2.addTest(new Test({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
})).addTest(new Test({
	arg: 6,
	expectation: 6,
	method: 'isEqual'
})).drawResult();

testUnit3.addTest(new Test({
	args: [4, 8],
	expectation: 10,
	method: 'isEqual'
})).addTest(new Test({
	arg: [4, 8],
	expectation: 10,
	method: 'isEqual'
})).drawResult().addTest(new Test({
	arg: 14,
	expectation: 12,
	method: 'isEqual'
}));

testUnit4.drawResult();

testUnit.drawResult(true);
testUnit2.drawResult(true);
testUnit3.drawResult(true).commitTests().drawResult();
testUnit4.drawResult(true);
