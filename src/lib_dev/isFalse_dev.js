import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isFalse"');

export default testUnit.addTest(new Test({arg: null, method: 'isFalse'}))
          .addTest(new Test({arg: undefined, method: 'isFalse'}))
          .addTest(new Test({arg: NaN, method: 'isFalse'}))
          .addTest(new Test({arg: 0, method: 'isFalse'}))
          .addTest(new Test({arg: '', method: 'isFalse'}))
          .addTest(new Test({arg: true, method: 'isFalse'}))
          .addTest(new Test({arg: false, method: 'isFalse'}))
          .addTest(new Test({arg: '0', method: 'isFalse'}))
          .addTest(new Test({arg: 'false', method: 'isFalse'}))
          .addTest(new Test({arg: 'true', method: 'isFalse'}));
