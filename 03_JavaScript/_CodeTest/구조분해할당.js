const subinObj = {
  name: "송수빈",
  age: "26",
  brain: null,
};

// const name = subinObj.name;
// const age = subinObj.name;
// const brain = subinObj.name;
const { name: subinName, age, brain, girlFriend = "없음" } = subinObj; // 구조분해할당
// 둘은 같은 의미

// =========
//  name: subinName /  이름 바꾸고싶을떄
//  girlFriend = "없음"  / 키,값 할당

console.log(subinName, age, brain, girlFriend);
