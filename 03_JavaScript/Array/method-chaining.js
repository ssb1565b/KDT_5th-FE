//  절차적으로 수행해보기

// helloTest 의 - 를 지우고싶음 즉 Hello로 바꾸고싶을때
let helloTest = "H-e-l-l-o";
// "H-e-l-l-o" 사실 이것도 배열개념과 비슷함
let helloTestArr = helloTest.split("-");
// split ""안에 있는건 사라지고 나눠짐
console.log(helloTestArr);

// let reverseHelloTestArr = helloTestArr.reverse();
// console.log(reverseHelloTestArr);
// ---> 배열값으로 남김

let helloStr = helloTestArr.join("");
console.log("helloStr", helloStr);
//  ---> 문자열 남김

// let resultStr = reverseHelloTestArr.join("");
// console.log(resultStr);

// ======== 메소드 체이닝 ========

//  메소드체이닝 : 1~15줄까지 절차적으로 수행한것이 아니라 쭈르륵 연결해서 작업처리하는것을 일컷는 말
let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

// 메소드체이닝 사용시 주의할점
const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr);
//  ----> cba 라는 문자열

// let testNum = obj.number.reverse().join("");
// console.log(testNum);
// // ---->숫자는 못함

let testUndefined = obj?.str?.reverse().join("");
console.log(testUndefined);
// ----> 없는 객체 key를 하면 에러뜸
//  node.js의 경우, 이런상황에서 에러가 남. 브라우저에서는 에러나진않고 이부분을 제외하고 실행됨
// 따라서 ? 옵셔널 체이닝을 주어서 에러를 방지 그러나 너무 남용하면 나중에 에러났을때 어디서 에러나는지 찾기 어려움
