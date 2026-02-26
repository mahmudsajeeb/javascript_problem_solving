// let str = "Madam";

// let cleanStr = str.toLowerCase()
// let res = cleanStr.split("").reverse().join("");
// console.log(res)
// if (cleanStr === res) {
//     console.log("Palindrom")
// } else {
//     console.log("Not Palindrom")
// }

let str = "Madam";
let reversed = "";
let cleanStr = str.toLowerCase();
for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversed += cleanStr[i];

}
if (reversed === cleanStr) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}