// 함수
const club = (isAdult, vip, isDrunken, money) => {
  if (money || (!isDrunken && (isAdult || vip))) {
    return console.log("통과");
  } else {
    return console.log("돌아가");
  }
};

let isAdult = false;
let vip = false;
let isDrunken = true;
let money = true;
//  변수명 더 직관적으로 짓자!

club(isAdult, vip, isDrunken, money);

// 삼항연산자
console.log(money || (!isDrunken && (vip || isAdult)) ? "통과" : "돌아가");

// 객체
const guest = {
  isAdult: true,
  isVip: true,
  isDrunken: true,
  isRich: true,
};

if (guest.isRich || (guest.isDrunken && (guest.isAdult || guest.isVip))) {
  console.log("pass");
} else {
  console.log("return");
}
