import {Unit, Test}	from './index';

const testUnit_1 = new Unit (x => x, 'Check "isSameStructure"');
const testUnit_2 = new Unit (x => x, 'Check "isSameNotOrderedStructure"');
const testUnit_3 = new Unit (x => x, 'Check "isLikeStructure"');

const test_obj_1 = {
     item1: 2,
     item2: '3',
     item3: [],
     test: 'test',
     any: false,
     obj: {
          test: 123,
          arr: [12, 3, 'test', {}, [1, 2, 7, {d: 2}], ''],
          obj: {
               'null': null,
               nan: NaN,
               u: undefined,
               'true': true
          }
     }
};

const test_obj_2 = {
     item_1: 2,
     item2: '3',
     item3: [],
     test: 'test',
     any: false,
     obj: {
          test: 123,
          arr: [12, 3, 'test', {}, [1, 2, 7, {d: 2}], ''],
          obj: {
               'null': null,
               nan: NaN,
               u: undefined,
               'true': true
          }
     }
};

const test_obj_3 = {
     item2: '3',
     item1: 2,
     item3: [],
     test: 'test',
     any: false,
     obj: {
          test: 123,
          arr: [12, 3, 'test', {}, [1, 2, 7, {d: 2}], ''],
          obj: {
               'null': null,
               nan: NaN,
               u: undefined,
               'true': true
          }
     }
};


testUnit_1.addTest(new Test({arg: 5, method: 'isSameStructure', expectation: 5}))
          .addTest(new Test({arg: 5, method: 'isSameStructure', expectation: '5'}))
          .addTest(new Test({arg: '5', method: 'isSameStructure', expectation: 5}))
          .addTest(new Test({arg: '5', method: 'isSameStructure', expectation: '5'}))
          .addTest(new Test({arg: 6, method: 'isSameStructure', expectation: 5}))
          .addTest(new Test({arg: 'string', method: 'isSameStructure', expectation: '5'}))
          .addTest(new Test({arg: undefined, method: 'isSameStructure', expectation: undefined}))
          .addTest(new Test({arg: null, method: 'isSameStructure', expectation: null}))
          .addTest(new Test({arg: NaN, method: 'isSameStructure', expectation: NaN}))
          .addTest(new Test({arg: null, method: 'isSameStructure', expectation: {}}))
          .addTest(new Test({arg: null, method: 'isSameStructure', expectation: undefined}))
          .addTest(new Test({arg: {}, method: 'isSameStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isSameStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isSameStructure', expectation: []}))
          .addTest(new Test({arg: new Date(), method: 'isSameStructure', expectation: {}}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3, 4]}))
          .addTest(new Test({arg: [0, 1, 2], method: 'isSameStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 2, 1, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {'0': 0, '1': 1, '2': 2, '3': 3}, method: 'isSameStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameStructure', expectation: {...test_obj_1}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameStructure', expectation: {...test_obj_2}}))
          .addTest(new Test({arg: {...test_obj_2}, method: 'isSameStructure', expectation: test_obj_2}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameStructure', expectation: {...test_obj_3}}))
          .drawResult();

testUnit_2.addTest(new Test({arg: 5, method: 'isSameNotOrderedStructure', expectation: 5}))
          .addTest(new Test({arg: 5, method: 'isSameNotOrderedStructure', expectation: '5'}))
          .addTest(new Test({arg: '5', method: 'isSameNotOrderedStructure', expectation: 5}))
          .addTest(new Test({arg: '5', method: 'isSameNotOrderedStructure', expectation: '5'}))
          .addTest(new Test({arg: 6, method: 'isSameNotOrderedStructure', expectation: 5}))
          .addTest(new Test({arg: 'string', method: 'isSameNotOrderedStructure', expectation: '5'}))
          .addTest(new Test({arg: undefined, method: 'isSameNotOrderedStructure', expectation: undefined}))
          .addTest(new Test({arg: null, method: 'isSameNotOrderedStructure', expectation: null}))
          .addTest(new Test({arg: NaN, method: 'isSameNotOrderedStructure', expectation: NaN}))
          .addTest(new Test({arg: null, method: 'isSameNotOrderedStructure', expectation: {}}))
          .addTest(new Test({arg: null, method: 'isSameNotOrderedStructure', expectation: undefined}))
          .addTest(new Test({arg: {}, method: 'isSameNotOrderedStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isSameNotOrderedStructure', expectation: {}}))
          .addTest(new Test({arg: [], method: 'isSameNotOrderedStructure', expectation: []}))
          .addTest(new Test({arg: new Date(), method: 'isSameNotOrderedStructure', expectation: {}}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3, 4]}))
          .addTest(new Test({arg: [0, 1, 2], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 2, 1, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3]}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {'0': 0, '1': 1, '2': 2, '3': 3}, method: 'isSameNotOrderedStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameNotOrderedStructure', expectation: {...test_obj_1}}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameNotOrderedStructure', expectation: {...test_obj_2}}))
          .addTest(new Test({arg: {...test_obj_2}, method: 'isSameNotOrderedStructure', expectation: test_obj_2}))
          .addTest(new Test({arg: {...test_obj_1}, method: 'isSameNotOrderedStructure', expectation: {...test_obj_3}}))
          .drawResult();

testUnit_3.addTest(new Test({arg: 5, method: 'isLikeStructure', expectation: 5}))
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
          .addTest(new Test({arg: {...test_obj_1}, method: 'isLikeStructure', expectation: {...test_obj_3}}))
          .addTest(new Test({arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: [0, 1, 2]}))
          .addTest(new Test({arg: {'0': 0, '1': 1, '2': 2, '3': 3}, method: 'isLikeStructure', expectation: {'0': 0, '1': 1, '3': 3}}))
          .addTest(new Test({arg: {'0': 0, '1': 1, '3': 3}, method: 'isLikeStructure', expectation: {'0': 0, '1': 1, '2': 2, '3': 3}}))
          .drawResult();
