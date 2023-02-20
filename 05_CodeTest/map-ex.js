// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }

// console.log(arr);
// const addArr = arr.map((el) => {
//   return (sum += el);
// });
// console.log(sum);

// 1. 1~100 배열 생성
const arr = []; // 배열이니까 어차피 주소값이 메모리에 들어가서 const로 변수선언해도됨
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

// 2. 배열의 합산
let sum = 0; // 할당값이 원시타입임으로 밑에서 sum이라는 값을 변경해줄것이니 let
const noReturn = arr.map((el) => {
  // map은 리턴값을 배열에 넣기 떄문에 만약 return을 넣지 않으면 [undefined, undefined...] 이 형태로 들어감 따라서 반드시 리턴 넣어주기
  sum += el;
});

const yesReturn = arr.map((el) => (sum += el)); //이렇게 한줄로 쓸땐 이건 리턴이 있음
console.log(sum);
console.log(noReturn);
console.log(yesReturn);
