const subin = {
  name: "송수빈",
  age: 26,
};
const dub = {
  name: "송수빈",
  age: 26,
};

console.log("JSON", JSON.stringify(subin) === JSON.stringify(dub));
// stringify함수는 모두 string으로 변경 후 비교하기 때문에 객체의 값이 같아져서 비교했을떄 true가 뜨게됨

console.log(subin === dub);
// false

const subinCopy = subin;
// 메모리 주소를 가져오기 때문에 둘다 같은 메모리 주소를 가지게 됨.
subinCopy.name = "subin";
// 위에 subinCopy이 const로 정의되었으나 const는 주소값이 바뀌는건지만 체크를 하는것이기 때문에 에러발생하지 않음
// 그러나 만약 subinCopy = dub; 이런식으로 하게 되면 에러가 뜸 즉 객체 타입은 주소값을 가져가는것

console.log(subin);
console.log(subinCopy);
// 두 객체 다 이름이 송수빈에서 subin으로 변경된것을 확인할 수 있음
console.log(subin === subinCopy);
// subin
