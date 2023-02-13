const KDT = ["김성현", "백진솔", "윤제", "송민선", "송수빈"];

// KDT[0] = "ET";
// console.log(KDT.push("wowow"));
// push는 length값을 남김
//  함수들이 각각 뭘 리턴하는지 공부필요
console.log(KDT);

// console.log(KDT.pop());
// pop은 어떤걸 뺐는지 return 함

KDT.unshift("이효석");
console.log(KDT);
console.log(KDT.unshift("이효석"));
// 배열 앞에 추가
// length 값 리턴

KDT.shift();
console.log(KDT);
console.log(KDT.shift());
// 어떤 값을 뺐는지 리턴

for (let i = 0; i < KDT.length; i++) {
  console.log(KDT[i]);
}
KDT.push("수빈추가");
console.log("1", KDT);

KDT.pop();
console.log("2", KDT);

KDT.unshift("수빈추가");
console.log("3", KDT);

for (let i = 0; i < KDT.length; i++) {
  console.log(KDT[i]);
}

// const arrLength = KDT.length;

// for (let i = 0; i < arrLength; i++) {
//   KDT.pop();
// }
// console.log(KDT);
//  length 길이만큼 pop을 반복하고 싶을떄는 arrLength를 따로 선언해줘야지 배열길이만큼 반복됨 안그러면 중간에 끊김
