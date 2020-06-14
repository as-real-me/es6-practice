// // Function declaration 1
// function fuctionName(perameter = " if any"){
//     return "Return value " + perameter;
// }
// const aVariable = fuctionName();
// console.log(aVariable);

// // Function declaration 2
// const aVariable = function functionName2(perameter = " if any") {
//     return "Return value " + perameter;
// }


//ES6 made function declaration more easy, it called arrow function;
const functionName3 = (perameter) => "Return value ";
console.log(functionName3());
//another easy example
const addTwoNumber = (x, y) => x + y;
console.log(addTwoNumber(1, 2));

//Multiline arrow function
const bigFunction = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
    //When you write multiline arrow function you need to add return manually!
}
const result = bigFunction(10,5);
console.log(result);