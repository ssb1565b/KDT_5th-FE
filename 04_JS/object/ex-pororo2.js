const pororo = {
  name: "뽀로로",
  age: 7,
  height: 120,
  showName() {
    console.log(this.name);
  },
};

// 객체 추가방식으로 익명함수선언하기
// 질문 : 아래는 함수선언식인가요 함수표현식인가요..? 왠지 표현식같음..
pororo.showHeight = function () {
  console.log(this.height);
};

// 함수호출
pororo.showHeight();
pororo.showName();
