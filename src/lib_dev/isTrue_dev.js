import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "isTrue"');

export default testUnit.addTest(new Test({arg: null, method: 'isTrue'}))
          .addTest(new Test({arg: undefined, method: 'isTrue'}))
          .addTest(new Test({arg: NaN, method: 'isTrue'}))
          .addTest(new Test({arg: 0, method: 'isTrue'}))
          .addTest(new Test({arg: '', method: 'isTrue'}))
          .addTest(new Test({arg: true, method: 'isTrue'}))
          .addTest(new Test({arg: false, method: 'isTrue'}))
          .addTest(new Test({arg: '0', method: 'isTrue'}))
          .addTest(new Test({arg: 'false', method: 'isTrue'}))
          .addTest(new Test({arg: 'true', method: 'isTrue'}));
