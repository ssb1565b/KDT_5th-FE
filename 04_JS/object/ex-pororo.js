const pororo = {
  name: "뽀로로",
  age: 7,
};

console.log(pororo.name);
console.log(pororo["age"]);

pororo.gender = "male";
pororo["height"] = "1m";

delete pororo.age;
console.log(pororo);

console.log(pororo.hairColor);
// undefined 이러면 자바스크립트에서 에러날수있음
console.log("name" in pororo);
// true
console.log("height" in pororo);
// true
