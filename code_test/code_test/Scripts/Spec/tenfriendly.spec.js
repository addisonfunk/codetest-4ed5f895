var tenFriendly = new function () {

	QUnit.test("ten friendly test", function (assert) {
		
		console.log(assert);
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
		var result = tenFriendlyString('55');
		console.log(tenFriendlyString('55')); 
		console.log(result);
		assert.equal(result, true, "tenFriendlyString('55') equals true");
	});

};