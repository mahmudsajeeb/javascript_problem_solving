let reversed = "";
let str = "hello";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];

}
console.log(reversed);

let reverseValue = "Javascript";
let res = reverseValue.split("").reverse().join("");
console.log(res);

