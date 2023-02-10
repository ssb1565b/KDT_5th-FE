// // if 문
// if (false) {
//   console.log("true");
// } else if (true) {
//   console.log("elseif");
// } else {
//   console.log("false");
// }

// 조건비교
let subinAge = 26;
if (subinAge > 40) {
  console.log("늙었습니다.");
} else if (subinAge <= 40 && subinAge >= 20) {
  console.log("그는 MZ세대 입니다");
} else {
  console.log("애기입니다");
}
// if 중첩
let isOld = false;
let isRich = true;

if (isOld) {
  if (isRich) {
    console.log("낫배드");
  } else {
    console.log("망했어요");
  }
  // return; > isOld가 false여도 여기서 retrun 쓰면 다음 코드 안읽음
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}

// Not 연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if (!isAdult) {
  console.log("돌아가");
} else {
  console.log("통과");
}

// 다중비교
// 여성이고, 이름이 Jane이거나 성인이면 통과
let gender = "M";
let name = "Tom";
let isAdultTom = true;
if (gender === "F" && (name === "Jane" || isAdultTom)) {
  console.log("pass");
} else {
  console.log("return");
}
