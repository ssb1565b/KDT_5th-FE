const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

console.log(arr);
let sum = 0;
const addNum = arr.reduce((acc, item) => (acc += item), 0);
console.log(addNum);
