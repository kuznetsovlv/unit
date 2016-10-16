import Unit	from './index';

const testUnit = new Unit (x => x, 'Library test 1');
const testUnit2 = new Unit (x => x, 'Library test 2');

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