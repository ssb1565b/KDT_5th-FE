// for (let i = 0; i < 10; i++) {
for (let i = 0; i < 10; i += 1) {
  // console.log(i);
  // i += 1;
  // console.log(`인사를 ${i + 1}번 드립니다`);
}

// 2중 반복문
for (let i = 0; i < 3; i += 1) {
  console.log(`상위 for문 입니다. ${i + 1}번째 작동 중`);
  for (let j = 0; j < 5; j += 1) {
    console.log(`    하위for문입니다. i는 ${i}, j는 ${j}입니다.`);
  }
}
