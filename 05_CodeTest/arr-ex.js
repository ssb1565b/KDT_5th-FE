// 두배열 비교하여 같은값, 다른 값 배열에 담기
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// const sameArr = []; // 교집합
// const diffArr = []; // 여집합

// // 방법 1
// fruits1.map((el) =>
//   fruits2.includes(el) ? sameArr.push(el) : diffArr.push(el)
// );

// // 방법 2
const sameArr = fruits1.filter((el) => fruits2.includes(el));
const diffArr = fruits1.filter((el) => !fruits2.includes(el));
const ifMap = fruits1.map((el) => fruits2.includes(el)); // 값이 true건 false건 그대로 ifMap에 할당해줌

console.log(sameArr);
console.log(diffArr);
console.log(ifMap);

// 방법2(96번 돌기)가 방법1(48번 돌기)보다 더 많은 시간
