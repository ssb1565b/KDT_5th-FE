let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
  // 화살표는 this를 자체적으로 생성하지 못해서 외부의 브라우저가 갖고있는 객체를 가리킴
  // 화살표함수가 this가 없기때문에 메모리적으로 더 빠름 this가 필요없는경우 화살표함수 사용이 권장됨
  // 화살표안에서 this는 브라우저 환경내애서는 윈도우,  노드에서는 글로벌을 가져옴
};
// 화살표함수는 함수표현식에 가까움

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

const boy = {
  name: "mike",
  sayHello,
};

const girl = {
  name: "jane",
  sayHallo,
};

boy.sayHello();
girl.sayHallo();
