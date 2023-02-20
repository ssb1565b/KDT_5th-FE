const fs = require("fs");
// node 시스템에 있는 filesystem 을 불러오겠다는 의미

const input = fs.readFileSync("./dev/stdin").toString().split("");
// /는 상대경로 즉 c://위치부터 찾기떄문에 ./ 절대경로로 바꿈
// 백준이 서버에 파일을 올려놓음. /dev/stdin 위치의 파일을 읽어오겠다. 그리고그걸 문자열로 바꾼 후 배열로 바꾸기

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

console.log(A + B);
