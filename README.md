# [Unit Test Library](https://github.com/kuznetsovlv/unit "Unit Test Library on gitHub")

Library for simple creating unit tests.

## Content.
- Instalation.
- How to use.
	- Class `Unit`.
		* Constructor.
			* `func`
			* `description`
			* `context`
		* Methods.
			* `addTest`
			* `commitTests`
			* `getResult`
			* `drawresult`
	- Class `Test`.
		* `method`
		* `arg`
		* `args`
		* `expectation`
	- Verification Methods.
		* Simple data types.
			* _isEqual_
			* _isEqualNonStrict_
		* Check types.
			* _exist_
			* _notExist_		
			* _isNull_
			* _isNotNull_
			* _isNill_
			* _isNotNill_
			* _isNaN_
			* _isNotNaN_
			* _isTrue_
			* _isFalse_
			* _isTypeOf_
			* _isInstanceOf_
		* Complex data types.
			* _isSameStructure_
			* _isSameNotOrderedStructure_
			* _isLikeStructure_
	- Example.

## Instalation.
The product is not published yet. The only way to use it is to copy from repository
```bash
git clone https://github.com/kuznetsovlv/unit.git
```
move to the products directory
```bash
cd unit
```
install all required packages
```bash
npm install
```
or
```bash
npm i
```
build product
```bash
npm run build
```
finaly copy product into your project
```bash
mkdir -p pathToYourPogectDirrectory/node_modules/unit
cp -r * pathToYourPogectDirrectory/node_modules/unit
```

## How to use.
The library exports two class `Unit` and `Test`.

### Class `Unit`.
#### Constructor.
Class `Unit` creates an object which perform a set of unit tests for a function. It's constructor gets three arguments:
* `func: function` - Function you want to test
* `description: string` - Text which describes this test set.
* `context: object` - Object of testing function`s context. This argument is unrequirable and I srongly recomed to ___not use it___ because unit tests are good for pure functions that depend on ___their arguments only___ and ___do not depend__ on their environment.
```javascript
const unit = new Unit(x => x, 'Simple test of the simple function');
```

#### Methods.
Class `Unit` has some methods:
* `addTest` gets one argument the object of class `Test` which describes single test. `addTest` adds test description into test sequence.
* `commitTests` commits current test sequence.
* `getResult` returns object with result of the last commit of the test sequence. If test sequence has not commited it calls `addTest` method first.
* `drawresult` gets unrequirable `boolean` argumet `failsOnly` and displays the result of the last commit of the test sequence. The result `drawResult` gets by calling `getResult` first. By default `failsOnly = false`, if it is `true` `drawResult` would show only fallen tests.

_Note:_ all methods exept `getResult` returns current context of `Unit`, so you can use these methods in chains.  
_Note:_ if you are adding new test into a sequence after the sequence has been commited to get or display the test's result you need call `commitTests` method before `getResult` and  `drawResult` methods.
```javascript
unit.addTest(new Test({
	arg: 5,
	expectation: 5,
	method: 'isEqual'
})).drawResult().addTest(new Test({
	arg: 8,
	expectation: 8,
	method: 'isEqual'
})).commitTests().drawResult(true);
```

### Class `Test`.
Class `Test` is a simple class which describes single test algorithm. `Test` was added to simplify validating description of test algorithm. `Test` does not have any own methods exept the constructor. Constructor requires the only object argument which describes test algorithm, here the list of it's fields:
* `method: string` - Name of the verification method algorith will use to check function. ___This field is needed___.
* `arg: *` - Argument for testing function.
* `args: Array` - Array of arguments for testing function. _Note:_ if field `args` exists `arg` will be ignored.
* `expectation: *` - The value we are expecting as a result of testing function.
```javascript
const test = new Test({
	arg: 8,
	expectation: 8,
	method: 'isEqual'
});
```

### Verification Methods.
#### Simple data types.
* _isEqual_. Usable with simple data types. Checks if returned value is equal to expeted value. Method uses a strict comparison.
* _isEqualnonStrict_. Usable with simple data types. Checks if returned value is equal to expeted value. Method uses a nonstrict comparison.

#### Check types.
* _exist_. Checks if returned value is not `undefined`.
* _notExist_. Checks if returned value is `undefined`.
* _isNull_. Checks if returned value is `null`.
* _isNotNull_. Checks if returned value is not `null`.
* _isNill_. Checks if returned value is `null` or `undefined`.
* _isNotNill_. Checks if returned value is not `null` or `undefined`.
* _isNaN_. Checks if returned value is `NaN`.
* _isNotNaN_. Checks if returned value is not `NaN`.
* _isTrue_. Checks if returned value can be interpreted as `true`.
* _isFalse_. Checks if returned value can be interpreted as `false`.
* _isTypeOf_. Checks if returned value`s type is equal to `expectation`.
* _isInstanceOf_. Checks if returned value is instance of `expectation`.

#### Complex data types.
* _isSameStructure_. Checks if returned value has same structure with `expectation`.
* _isSameNotOrderedStructure_. Checks if returned value has same structure with `expectation` without dependency on order.
* _isLikeStructure_. Checks if returned value data equals `expectation` or if they are objects it has properties from `expectation` and they are like

### Example.
```javascript
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
```
