const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
console.log(fruits);
console.log(...fruits);

// function conLog(a, b, ...c) {
//   console.log(a, b, c);
// }

function conLog(...rest) {
  rest.map((item) => console.log("map", item));
}

conLog(fruits[0], fruits[1], fruits[3]);
conLog(...fruits);

// =======

const str = "apple";
const strToArr = [...str]; // 배열을 선언한것처럼 됨
const strToObj = { ...str }; // 객체를 선언한것처럼 됨
console.log("strToArr", strToArr, strToObj);

const strToArr2 = str.split("");
console.log(strToArr2);
