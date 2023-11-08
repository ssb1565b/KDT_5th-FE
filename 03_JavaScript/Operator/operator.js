// 0부터 10까지 랜덤으로 정수가 나옴
let num = Math.floor(Math.random() * 10);
console.log(num, "/", num % 2);

// 제곱
console.log(2 ** 5);

// 제곱근
console.log(Math.sqrt(4));

// 연산자 줄여쓰기
let num2 = 5;
num2 = num2 * 5;
let num3 = 5;
num3 *= 5;

console.log(num2, "/", num3);

// 증가감소연산자
let num4 = 10;
console.log(num4++);
// 바로 반영이 안되고 다음줄에서 반응함
// console.log((num4 += 1));
// // 이건 바로 이번줄에 반영됨

console.log("11 ===", num4);
// 위에서 num4++ 했으니까 1이 더해짐
console.log("12 ===", ++num4);
// 11에서 바로 1이 더해짐

// 비교연산자
let a = 10;
let b = 5;
console.log("false ===", a === b);
console.log("true ===", a !== b);
