// function helloFunc() {
//   console.log("hello");
//   // return 값이 없는 함수를 void함수라고 함
// }

// function returnFunc() {
//   console.log("Retrun");
//   return "return";
// }

// let str = returnFunc();
// // str에 리턴값인 "return"이 들어감
// console.log(str);
// // 함수 실행시 반드시 () 쓰기
// //  만약 리턴값이 없는 helloFunc()을 호출하면 undefined나옴

// // 익명함수
// // 함수명없이 그냥 function () {} 이렇게 쓰면에러남
// let noNameFunc = function () {
//   console.log("no name");
//   return "No Name";
// };

// let str2 = noNameFunc();
// console.log(str2);

function sayHello(name = "User") {
  console.log(`Hello~${name}`);
}

sayHello();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 20));

// function square(num) {
//   return num ** 2;
// }
// console.log(square(37));
