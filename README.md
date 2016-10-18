# [Unit Test Library](https://github.com/kuznetsovlv/unit "Unit Test Library on gitHub")

Library for simple creating unit tests.

## Content
- Instalation
- How to use
	- Class `Unit`
		* Constructor
			* `func`
			* `description`
			* `context`
		* Methods
			* `addTest`
			* `commitTests`
			* `getResult`
			* `drawresult`
	- Class `Test`
		* `method`
		* `arg`
		* `args`
		* `expectation`
	- Verification Methods
		* isEqual

## Instalation
The product is not published yet. The only way to use it is to copy from repository
```bash
git clone [https://github.com/kuznetsovlv/unit.git](https://github.com/kuznetsovlv/unit.git)
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

### Class `Unit`
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

### Class `Test`
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
* isEqual. Available for simple data types. Checks if returned value is equal to expeted value. Method uses a strict equality check.
