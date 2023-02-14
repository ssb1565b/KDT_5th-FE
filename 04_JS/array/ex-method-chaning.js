const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];

const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
//이렇게도 가능 const result2 =  kdtCurriculum[kdtCurriculum.length - 1].split("").reverse().join("");
// shift()는 뺴는 문자열을 return, split("")은 배열로 변환 reverse()는 배열의 요소를 반전시켜줌, join("") 다시 문자열로 반환함
console.log(result1);
console.log(result2);
