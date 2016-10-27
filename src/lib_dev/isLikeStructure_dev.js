import {test_obj_1, test_obj_2, test_obj_3}	from './test_data';
import {Unit, Test}							from '../index';

const testUnit = new Unit (x => x, 'Check "isLikeStructure"');

export default testUnit.addTest(new Test({arg: 5, method: 'isLikeStructure', expectation: 5}))
          .addTest(new Test({arg: 5, method: 'isLikeStructure', expectation: '5'}))
          .addTest(new Test({arg: '5', method: 'isLikeStructure', expectation: 5}))
          .addTest(new Test({arg: '5', method: 'isLikeStructure', expectation: '5'}))
          .addTest(new Test({arg: 6, method: 'isLikeStructure', expectation: 5}))
          .addTest(new Test({arg: 'string', method: 'isLikeStructure', expectation: '5'}))
          .addTest(new Test({arg: undefined, method: 'isLikeStructure', expectation: undefined}))
          .addTest(new Test({arg: null, method: 'isLikeStructure', expectation: null}))
          .addTest(new Test({arg: NaN, method: 'isLikeStructure', expectation: NaN}))
          .addTest(new Test({arg: null, method: 'isLikeStructure', expectation: {}}))
          .addTest(new Test({arg: null, method: 'isLikeStructure', expectation: undefined}))
          .addTest(new Test({arg: {}, method: 'isLikeStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isLikeStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isLikeStructure', expectation: []}))
          .addTest(new Test({arg: new Date(), method: 'isLikeStructure', expectation: {}}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3, 4]}))
          .addTest(new Test({arg: [0, 1, 2], method: 'isLikeStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 2, 1, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {'0': 0, '1': 1, '2': 2, '3': 3}, method: 'isLikeStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isLikeStructure', expectation: {...test_obj_1}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isLikeStructure', expectation: {...test_obj_2}}))
          .addTest(new Test({arg: {...test_obj_2}, method: 'isLikeStructure', expectation: test_obj_2}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isLikeStructure', expectation: {...test_obj_3}}));
