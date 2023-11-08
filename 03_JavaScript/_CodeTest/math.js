// 절대값 -999(음수)를 정수로 바꾸기
const num1 = -999;
console.log(Math.abs(num1));

// 최대,최소값 구하기
console.log(Math.min(1, 4, 3, 6, 4, 1, 234, 19));
// ---> 1
console.log(Math.max(1, 4, 3, 6, 4, 1, 234, -19));
// ---> 234

// 인자가 배열일경우 전개연산자
const numArr = [1, 4, 3, 6, 4, 1, 234, 19, -19];
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));

// 소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); //소수점 반올림
console.log(Math.floor(num3)); // 소수점 버림
console.log(Math.ceil(num3)); // 소수점을 올림

// 랜덤
console.log(Math.random());
