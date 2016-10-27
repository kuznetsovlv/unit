import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isEqual"');

export default testUnit.addTest(new Test({arg: 4, expectation: 4, method: 'isEqual'}))
          .addTest(new Test({arg: 4, expectation: '4', method: 'isEqual'}))
          .addTest(new Test({arg: '4', expectation: 4, method: 'isEqual'}))
          .addTest(new Test({arg: '4', expectation: '4', method: 'isEqual'}))
          .addTest(new Test({arg: 4, expectation: 8, method: 'isEqual'}));
