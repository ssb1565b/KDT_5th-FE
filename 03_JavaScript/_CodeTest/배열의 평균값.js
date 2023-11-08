function solution(numbers) {
  let avg = 0;
  for (let day of numbers) {
    avg += day;
  }
  console.log(avg / numbers.length);
  return avg / numbers.length;
}
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
solution(test);
