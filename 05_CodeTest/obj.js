const obj1 = { a: 1, b: 2 };
const obj2 = { b: 1, c: 2 };

const resultObj = Object.assign(obj1, obj2);
// obj2가 obj1에 합쳐짐
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("resultObj", resultObj);
console.log("??", obj1 === resultObj); // 메모리값이 할당된것

resultObj.a = 10; // obj1과 resultObj이 같은 메모리값이 할당되었으니 만약 a키값에 10을 할당 후
console.log(obj1); // obj1를 찍어보면 obj1에도 값이 바뀜
