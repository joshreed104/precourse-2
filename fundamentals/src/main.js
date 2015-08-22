// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
	// CODE HERE

}


// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
	// CODE HERE

}


// Creates a clone of an object.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0] === users[0] → true
function clone(value) {
	// CODE HERE

}


// Return the size of collection. If the argument passed is an array, then return the length of the array. If the argument passed is an object, then return the number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
	// CODE HERE
	
}


// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
	// CODE HERE
	
}


// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	// CODE HERE
	
}


// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
	// CODE HERE
	
}


//Creates a slice of array with n elements taken from the beginning. n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
	// CODE HERE
	
}


// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
	// CODE HERE
	
}


// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
	// CODE HERE
	
}


// Removes all elements from array that callback returns truthy for and returns an array of the removed elements.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
	// CODE HERE
	
}


// Creates an array without duplicate values. The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	// CODE HERE
	
}


// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(array, key) {
	// CODE HERE
	
}


// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
	// CODE HERE
	
}


// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
	// CODE HERE
	
}


// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce
function extend() {
	// CODE HERE
	
}


// Returns boolean of whether argument is classified as a String object
// isString('hi'); → true
// isString(5); → false
function isString(value) {
	// CODE HERE
	
}


// Using a for loop, call the functions in the queue in order with the input number, where the results of each function become the next function’s input. Additionally, the queue should be empty after the function is called.
/* var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
var start = 2;
applyAndEmpty(2, puzzlers); → 3
*/
function applyAndEmpty(input, queue) {
	// CODE HERE
	
}


// Returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
function memoize(func) {
	// CODE HERE
	
}


// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
function delay(func, wait) {
	// CODE HERE
	
}
