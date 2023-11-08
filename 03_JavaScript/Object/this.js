const user = {
  name: "subin",
  sayHello: function () {
    console.log(`안녕하세요? ${this?.name}님`);
    // this 대신 user?.name도 되긴함 그렇다면 왜 this를 쓰느냐..밑에
  },
};
user?.sayHello();

// this를 쓰면 좋은경우
// 객체 규모가 커졌을때와 함수 재활용을 위해서
const boy = {
  name: "Mike",
  sayHello,
};
const girl = {
  name: "Jane",
  sayHello,
};
function sayHello() {
  // 함수선언문임으로 호이스팅이 되기 때문에 밑에 선언해도 문제없음
  console.log(`Hello, I'm ${this.name}`);
}
boy.sayHello();
girl.sayHello();
sayHello();
// 여기서 this는 dom을 가리킴
