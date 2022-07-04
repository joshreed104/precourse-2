// Creates a clone of an object.
// const users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// const shallowClone = clone(users);
// shallowClone[0] === users[0] → true
function clone(value) {
  const cloneObj = {};
  for (let key in value) {
    cloneObj[key] = value[key];
  };
  return cloneObj;

}


// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  if (Array.isArray(collection)) return collection.length;
  else return Object.keys(collection).length;
	
}


// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
  if (array.length != 0) return array[0];
	
}


// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n=1) {
  return array.slice(n);
	
}


//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n=1) {
  return array.slice(0, n);
	
}


// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(array, key) {
  return array.map(el => el[key]);
	
}


// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
console.log(extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }));
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce

// NOT WORKING
function extend(destination) {

  for (let i = 1; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      destination[key] = arguments[i][key];
    }
  };

  return destination;

}


// Using a for loop, call the functions in the queue in order with the input
// number, where the results of each function become the next function’s input.
// Additionally, the queue should be empty after the function is called.
/* const puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
const start = 2;
applyAndEmpty(2, puzzlers); → 3
*/
function applyAndEmpty(input, queue) {
  const result = queue.reduce( (a,b) => b(a), input);
  for (let i = queue.length; queue.length > 0; i--) {
    queue.pop()
  };
	return result;
}


// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
function memoize(func) {
  const memoObj = {};
  return function (val) {
    if (memoObj[val]) return memoObj[val];
    else {
      memoObj[val] = func(val);
      return memoObj[val];
    };
  };
	
};


// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.
function delay(func, wait) {
  let args = [...arguments];
  setTimeout(function () {
    func(...args.slice(2))
  }, wait);
};