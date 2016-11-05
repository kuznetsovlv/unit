import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "functional methods"');

export default testUnit.addTest(new Test({arg: 4, expectation: 4, method: function alwaysTrue () {return true;}}))
          .addTest(new Test({arg: 4, expectation: '4', method: function () {return true;}}))
          .addTest(new Test({arg: '4', expectation: 4, method: function alwaysFalse () {return false;}}))
          .addTest(new Test({arg: '4', expectation: '4', method: function () {return false;}}))
          .addTest(new Test({args: [1, 2, 3, 4], method: () => {throw new Error('Test expectation.')}}));
