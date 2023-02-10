// // 구구단
// for (let i = 2; i < 10; i += 1) {
//   console.log(`------${i}단------`);
//   for (let j = 1; j < 10; j += 1) {
//     console.log(`${i} X ${j}= ${i * j}`);
//   }
// }

// 0부터 100 숫자중 2 또는 5의 배수 총합
let sum = 0;
for (let i = 0; i <= 100; i += 1) {
  if (i % 5 === 0 || i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
