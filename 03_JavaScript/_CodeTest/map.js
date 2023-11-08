const fruits = [
  // "사과",
  // "파인애플",
  { id: 1, item: "바나나" },
  { id: 2, item: "파인애플" },
  // "수박",
  // "포도",
  // "오렌지",
];

console.log(...fruits);

const fruitsObjArr = fruits.map((el, idx) => {
  // console.log("idx", idx);
  // console.log("origin", origin);
  return;
});

// const hi = fruitsObjArr.filter((el, idx) => {
//   if (el.item === "수박") return idx;
// });
// console.log(hi);

const nums = [1, 2, 3, 4, 5, 6];

// let third = 0;
// const divideArr = nums.map((el, idx) => {
//   third = nums[3];
//   return third;
// });
// console.log(third);

const divideArr = nums.map((el, idx) => el * 4);
console.log(divideArr);
