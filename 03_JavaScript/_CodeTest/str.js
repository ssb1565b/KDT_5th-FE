// 문자열
const str = "Hello, World!"; // -> H + e + l + l + o 단어들이 연속된 일종의 배열로 컴퓨터가 받아드림

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  // 문자열은 배열임으로 length와 for문을 사용할 수 있다.
}

console.log("length", str.length);

// 특정 문자열 위치 찾기, indexOf
console.log(str.indexOf("World"));
// ---> 7 / 7번째 index값

// 문자열 자르기, slice
console.log(str.slice(0, 5));
// ---> Hello / 0에서 4까지 사라진 나머지 문자열
console.log(str.slice(0, str.indexOf("World")));
// ---> Hello,  / 0~6까지(공백포함) 사라진 나머지 문자열

// 문자열바꾸기
console.log(str.replace("World", "뽀로로"));
// ----> Hello, 뽀로로!
console.log(str);
// ----> 그러나 원본 str값은 바뀌지 않음

// 문자열 반복
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);
// ----> 우영을 10번 반복후에 마지막에 우를 붙이기

// 앞 뒤 공백 문자 제거하기, trim
const str3 = "    Hello, World!      ";
console.log(str3.trim());
//  -----> Hello, World! / 가운데 공백은 사라지지 않음
