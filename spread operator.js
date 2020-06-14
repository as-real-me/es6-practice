const age1 = [10, 12, 14, 15, 11];
const age2 = [19, 23, 10, 29, 31];
const age3 = [22, 17, 44, 33, 27];
// //previous way to add two array
// const allAges = age1.concat(age2).concat(age3);
// console.log(allAges);
// //adding a new number
// const allAges2 = age1.concat(age2).concat([5]).concat(age3);
// console.log(allAges2);


//ES6 introduced much cleaner and easier way to add multiple array
const allAges3 = [...age1, ...age2, 5, ...age3];
console.log(allAges3);


//Max value for array using spread operator
const maxAge = Math.max(...age1, ...age3);
console.log("Max age is ", maxAge);