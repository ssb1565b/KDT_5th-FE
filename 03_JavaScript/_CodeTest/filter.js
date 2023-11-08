// const numbers1 = "123456".split("");  ---> [ '4', '5', '6' ] 로 return
const numbers2 = [1, 2, 3, 4, 5, 6]; // ---> [ 4, 5, 6 ] 로 return
const filterArr = numbers2.filter((el) => el > 3);
// el > 3 / 3보다 큰 숫자들을 배열에 담아서 반환
console.log(filterArr);

const words = ["spray", "limit", "elite", "exuberant", "destruction"];
const resultArr = words.filter((el) => el.length > 6);
console.log(resultArr);
