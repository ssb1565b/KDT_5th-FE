const fruits3 = ["Apple", "Banana", "Cherry"];

const findResult = fruits3.find((item) => {
  return item === "Apple";
});
console.log(findResult);

const findIndexResult = fruits3.findIndex((item) => item === "Banana");
console.log(findIndexResult);

// 정규식

const findResultEl = fruits3.find((item) => {
  return /^A/.test(item); // item에 대문자A로 시작하는 단어가 있는지 test해주세요! -----> Apple 반환
});
console.log(findResultEl);
