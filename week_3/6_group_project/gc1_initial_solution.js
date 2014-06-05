//"sum" function and calls

var sum = function(array) {
	var sumSoFar = 0;
	for (var i = 0; i < array.length; i++) {
		var sumSoFar = sumSoFar + array[i];
	}
	return sumSoFar;
}

console.log(sum([2, 14.8, 12, -3, 4, 7, 12]));
console.log(sum([15, 2, 5, 1, 6, 9, -2.5, 7]));


// "mean" function and calls

var mean = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		var sum = sum + array [i];
	}
	var mean = (sum / array.length);
	return mean;
}

console.log(mean([2, 14.8, 12, -3, 4, 7, 12]));
console.log(mean([15, 2, 5, 1, 6, 9, -2.5, 7]));


// "median" function and calls

var median = function(array) {
	array.sort(function(a,b){return a - b});
	var x = array.length / 2;
	if (array.length % 2 !== 0) {
		var median = array[x - 0.5];
	} else {
		var median = (array[x - 1] + array[x]) / 2;
	}
	return median;
}

console.log(median([2, -12, 14.8, 3, 4, 7, 12]));
console.log(median([15, 2, 5, 1, 6, 9, -2.5, 7]));