import Unit	from './index';

const testUnit = new Unit (x => x, 'Library test 1');
const testUnit2 = new Unit (x => x, 'Library test 2');
const testUnit3 = new Unit ((x) => {throw new Error('Test Error.')}, 'Library test 3');
const testUnit4 = new Unit (x => x, 'Library test 4');

testUnit.addTest({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
}).addTest({
	arg: 5,
	expectation: 6,
	method: 'isEqual'
}).drawResult();

testUnit2.addTest({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
}).addTest({
	arg: 6,
	expectation: 6,
	method: 'isEqual'
}).drawResult();

testUnit3.addTest({
	args: [4, 8],
	expectation: 10,
	method: 'isEqual'
}).addTest({
	arg: [4, 8],
	expectation: 10,
	method: 'isEqual'
}).drawResult();

testUnit4.drawResult();