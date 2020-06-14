// ============================================
// ================== Const ===================
// ============================================


// // Const - can't change once you assign a value
// const name = "Ashiouzzaman";
// console.log(name);

// //can't change the value of name variable here cz it's const
// name = "Real";
// console.log(name);


// Const in Array
// Can chnage individula value but can't change the hole array

const name = ["Md", "Ashiouzzaman", "Real"]
console.log(name);
name[1] = "Michel";
console.log(name);

// //Can't change here cz it's an array.
// name = ["Md", "Farnadoz", "Real"];

// Const in Object
// Same as array can change indiivual value but not the whole array.
const nayok = {
    name: "Amir Khan",
    number: 12345
}
console.log(nayok);
//Can change the objects individual value;
nayok["name"] = "Rittik";
console.log(nayok);
// //Can't change the whole array
// nayok = {
//     name: "Rittik",
//     number: 6789
// }
// console.log(nayok);




// ==========================================
// ================== Let ===================
// ==========================================

// let's value is change a able but it follows scoping
let hospitalPateint = "Rahim chaca";
console.log(hospitalPateint);
hospitalPateint = "Fatema Khala";
console.log(hospitalPateint);

// //scoping of let
// //at first we are using var to see the scoping difference
// for (var i = 0; i <10; i++){
//     console.log("value of i is: " + i);
// }
// // here we can access i from outside of loop
// console.log("Value of i outside of the for loop is: " + i);


// //now we are using let cz we don't want to give access of i outside that loop
// for (let i = 0; i <10; i++){
//     console.log("value of i is: " + i);
// }
// // here we can access i from outside of loop
// console.log("Value of i outside of the for loop is: " + i);