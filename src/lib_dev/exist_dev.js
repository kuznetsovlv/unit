import {Unit, Test}						from '../index';

const testUnit = new Unit (x => x, 'Check "exist"');

export default testUnit.addTest(new Test({arg: NaN, method: 'exist'}))
                       .addTest(new Test({arg: null, method: 'exist'}))
                       .addTest(new Test({arg: undefined, method: 'exist'}))
                       .addTest(new Test({arg: false, method: 'exist'}))
                       .addTest(new Test({arg: 0, method: 'exist'}));
