import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "notExist"');

export default testUnit.addTest(new Test({arg: NaN, method: 'notExist'}))
                       .addTest(new Test({arg: null, method: 'notExist'}))
                       .addTest(new Test({arg: undefined, method: 'notExist'}))
                       .addTest(new Test({arg: false, method: 'notExist'}))
                       .addTest(new Test({arg: 0, method: 'notExist'}));
