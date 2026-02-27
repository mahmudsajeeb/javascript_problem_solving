let n = [2, 6, 3, 10];
let sum = 0;
for (let i = 0; i < n.length; i++) {


    if (n[i] % 2 === 0) {
        sum += n[i]
    } else {
        console.log("Odd")

    }
}
console.log(sum)