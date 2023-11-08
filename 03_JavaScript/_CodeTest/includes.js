// 3이 배열에 있는지
// 방법 1
const numbers4 = [1, 2, 3, 4, 5, 6];

console.log(numbers4.includes(7));

// 방법 2
let flag = false;
numbers4.map((el) => {
  if (el === 3) flag = true;
});

console.log(flag);
