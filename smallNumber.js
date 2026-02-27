let arr = [2, 6, 13, 3, 20, 23, 90];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min)