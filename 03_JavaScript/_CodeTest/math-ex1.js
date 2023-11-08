// 최소 최대값 구하고 소수점 버리기
let nums = [1.23, 13, 14.52, 33.53, 30];
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.min(...nums)));

// 절대값(절대값음 음수가 없음.. )의 평균구하기 >> 방법 2 참고!
// 방법 1 : 음수 포함 평균구하기
let numEvg = (n) => {
  let sum = 0;
  for (let nums of n) {
    sum += nums;
  }
  return sum / n.length;
};
console.log("음수포함 평균", numEvg(nums));

// 방법 2 음수를 모두 정수로 바꾼다음 계산
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]);
}
console.log("절대값 평균", sum / nums.length);

// 0~100까지의 랜덤한 정수
console.log(Math.floor(Math.random() * 100));

// 1~100까지의 랜덤한 정수
console.log(Math.ceil(Math.random() * 100));
