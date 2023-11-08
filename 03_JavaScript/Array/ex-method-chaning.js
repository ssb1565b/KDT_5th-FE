const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];

const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
//이렇게도 가능 const result2 =  kdtCurriculum[kdtCurriculum.length - 1].split("").reverse().join("");
// shift()는 뺴는 문자열을 return, split("")은 배열로 변환 reverse()는 배열의 요소를 반전시켜줌, join("") 다시 문자열로 반환함
console.log(result1);
console.log(result2);

const str = "자바스크립트는 너무 멋져요! 그리고 유용해요.";

console.log(str.split()); // 구분자를 명시하지 않으면 아무런 동작도 하지 않음.
console.log(str.split("")); // 한 문자("")씩 나눔.
console.log(str.split(" ")); // 띄어쓰기(" ")를 기준으로 나눔.
console.log(str.split("!")); // 느낌표("!")를 기준으로 나눔.
