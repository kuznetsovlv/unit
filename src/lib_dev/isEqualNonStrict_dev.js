import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isEqualNonStrict"');

export default testUnit.addTest(new Test({arg: 4, expectation: 4, method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: 4, expectation: '4', method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: '4', expectation: 4, method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: '4', expectation: '4', method: 'isEqualNonStrict'}))
          .addTest(new Test({arg: 4, expectation: 8, method: 'isEqualNonStrict'}));
