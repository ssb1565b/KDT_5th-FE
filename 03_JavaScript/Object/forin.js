const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  running: function () {
    console.log("뽀로로는 날수없떠");
  },
  say() {
    // 이렇게 줄여도 됨
    console.log("뽀로로는 귀엽다");
  },
};

for (let key in pororo) {
  console.log(`key 는 ${key}, key 안의 값은 ${pororo[key]}`);
}
// key에는 key값
// pororo[key]에는 value값이 담김

// 객체에 메소드 정의하기
// pororo.running = function () {
//   console.log("뽀로로는 날수없떠");
// };

pororo.running();
pororo.say();
