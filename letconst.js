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