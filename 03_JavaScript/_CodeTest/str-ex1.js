// // 방법 1
// function solution(n) {
//   const str = "수박";
//   return str.repeat(n).slice(0, n);
// }
// solution(3);

// // 방법 2
// function solution(n) {
//   let answer = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       answer += "수";
//     } else {
//       answer += "박";
//     }
//   }
//   return answer;
// }
// console.log(solution(5));

// 방법 3
function solution(n) {
  const str = "수박";
  return n % 2 === 1
    ? str.repeat(Math.floor(n / 2)) + "수"
    : str.repeat(Math.floor(n / 2));
}
console.log(solution(3));
