const str = "apple";

for (let letter of str) {
  console.log(letter);
}
// index는 없음
// 배열일때만 쓸 수 있음

for (let letter in str) {
  console.log(letter);
}
// in으로 하면 Index값을 받음
//  in은 배열에서 쓸일은 많이 없고 객체에서 많이 씀
// 만약 객체인데 value를 얻고싶다면 str[letter]로 할 수 있음

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "tmt",
};

for (let item in obj) {
  console.log(item);
  console.log(obj[item]);
}
