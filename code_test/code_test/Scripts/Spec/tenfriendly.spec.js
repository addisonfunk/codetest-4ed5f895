var tenFriendly = new function () {

	QUnit.test("ten friendly test", function (assert) {
		console.log(assert);
		console.log("jQUnit test results:", assert.test.assertions);
		function tenFriendlyString(int) {
			var sum = 0;
			var result; 
			for (i = 0; i < int.length; i++) {
				sum += Number(int[i]);
			}
			if (sum == 10) {
				result = true;
			} else {
				result = false; 
			}
			return result; 
		}
		var testOne = tenFriendlyString('55'),
		    testTwo = tenFriendlyString('3331'),
			testThree = tenFriendlyString('1111111111'),
			testFour = tenFriendlyString('321'),
			testFive = tenFriendlyString(' ');

		assert.equal(testOne, true, "tenFriendlyString('55') equals true");
		assert.equal(testTwo, true, "tenFriendlyString('3331') equals true");
		assert.equal(testThree, true, "tenFriendlyString('1111111111') equals true");
		assert.equal(testFour, false, "tenFriendlyString('321') equals false");
		assert.equal(testFive, false, "tenFriendlyString(' ') equals false");
		console.log(testOne, testTwo, testThree, testFour, testFive); 
	});

};