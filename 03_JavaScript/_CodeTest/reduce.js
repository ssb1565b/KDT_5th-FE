const number5 = [1, 2, 3, 4, 5];
const sumResult = number5.reduce((acc, item, idx, orig) => (acc += item), 10);
console.log(sumResult);

//reduce는 값을 반환함
// map, filter는 배열이 놔옴

const number6 = [2, -4, 124, -346, 34, 0, 234, 3];

let acc = [0, 0];
const resultResult = number6.reduce(
  (acc, item) => {
    return item < 0 ? (acc[0] += 1) : (acc[1] += 1);
  },
  [0, 0]
);

console.log(resultResult);

const numbers7 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers7.reduce(
  (acc, item) => {
    item < 0 ? (acc[0] += 1) : (acc[1] += 1);
    console.log(acc[0], acc[1]);
    console.log("acc", acc);
    return acc;
  },
  [0, 0]
);
console.log(resultReduce);
