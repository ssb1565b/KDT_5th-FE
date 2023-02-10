let today = new Date().getDay();

// today === 0
//   ? alert("일요일")
//   : today === 1
//   ? alert("월요일")
//   : today === 2
//   ? alert("화요일")
//   : today === 3
//   ? alert("수요일")
//   : today === 4
//   ? alert("목요일")
//   : today === 5
//   ? alert("금요일")
//   : alert("토요일");

const arr = ["일", "월", "화", "수", "목", "금", "토"];
alert(arr[today]);

console.log(Date.parse(new Date()));
// 1990년을 기준으로 초단위로 리턴함

if (day === 0) alert("일");
// 한줄일떄는 중괄호 없애도됨
if (day === 0) {
  alert("일");
}
