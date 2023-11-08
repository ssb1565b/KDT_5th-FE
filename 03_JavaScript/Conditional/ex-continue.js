let sum = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 1) continue;
  // 홀수이면 밑에 코드 실행하지 않는다.
  sum += i;
}
console.log(sum);
//위와 아래가 동일
for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
  }
}
