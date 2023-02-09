// let str = "124";
// console.log(typeof str);
// console.log(str / 2);

// let num = Number(str);
// console.log(typeof num);
// console.log(num / 2);

// console.log(Number("abcd"));

// const num1 = 123;
// const num2 = 456;
// let str1 = String(num1);
// let str2 = String(num2);
// console.log(str1 + str2);

console.log(Boolean(1));
// true
console.log("송수빈", Boolean("송수빈"));
// true
console.log("", Boolean(""));
// false
console.log(" ", Boolean(" "));
// true
console.log(0, Boolean(0));
// false
console.log(-1, Boolean(-1));
// true
console.log("()", Boolean());
// false
console.log("undefined", Boolean(undefined));
// false
console.log("null", Boolean(null));
// false
console.log("NaN", Boolean(NaN));
// false
