// write a function that takes in three parameters and returns the sum of those three parameters

function sum (x,y,z) {
	return (x+y+z);
}
console.log(sum (3, 9, 10));

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function lastLetter(word) {
	var lastPosition = word.length - 1;
	return word[lastPosition];
}
console.log(lastLetter("C'mon Barbie let's go party"))


// write a function that takes in one parameter and returns the cube of that parameter

function cubed(x) {
	return (x*x*x);
}
console.log(cubed(3))


// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverseIt(word) {
	var tiEsrever = "";
	for (i = word.length-1; i >= 0; i--) {
	tiEsrever = tiEsrever + word[i]
	}
	return tiEsrever
}
console.log(reverseIt("Colette"))


// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the secend array as values.



function objectify(array1, array2)
 	{
	var object12 = {};
	for ( var i = 0; i < array1.length; i++ )
	object12[[array1[i]]]=array2[i]
	return object12
}
console.log(objectify(["name", "current location", "home", "favorite color"], ["Colette", "Amsterdam", "New York", "pink"]))

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys with the
// two arrays as values


var theBestObject = {
	name: "Colette",
	age: 26,
	profession: "student"
};


function objectiFunction(objectName) {
	var keys = [];
	var values = [];
	var objectKeysValues ={};
	for (var key in objectName) {
	keys.push(key);
	values.push(objectName[key]);
	}
	objectKeysValues[1]=keys;
	objectKeysValues[2]=values;
	console.log(objectKeysValues);
}

objectiFunction(theBestObject)


// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function powerUp(x,n) {
	var result = x;
	if (n===0) {
		return 1
	}
	else {
	for (i = n-2; i >=0; i--) {
	result = result * x
	}
	return result
}}
console.log(powerUp(9, 7))


// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.