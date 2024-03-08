// store the location in a array . Make sure the array is not  in the alphabetical order.

let places :string[] = ['saudi arabia', 'iraq' , 'iran', 'turkey', 'syria']

// print your array in its original order 
console.log('Original ' +places);

// print your array in alphabetical order without modifying the actual list.
console.log('Copy ' +[...places].sort());

// show that your array is still in its original order by printing its.
console.log('Original ' +places);

// print your array in reverse alphabetical without changing the order of the original list.
console.log('Copy ' +[...places].sort().reverse());

// show that your array is still in its original order ny printing it again.
console.log('Original ' +places);

//Reverse the order of your list . print the array  to  show that its order has changed.
console.log('Original ' +places.reverse());

//Reverse the order of your list again. print the list to show its  back to its original order.
console.log('Original ' +places.reverse());

// sort your array so its stored in alphabetical order. print the array to show that its order has been changed.

console.log('Original ' +places.sort());

// sort to change your array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('Original ' +places.sort().reverse());