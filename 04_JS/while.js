// while문 기본
let i = 0;
while (i < 10) {
  console.log(`아침인사를 ${i + 1}번째 드립니다.`);
  i++;
}
let j = 0;
while (true) {
  console.log(`저녁인사를 ${j + 1}번째 드립니다.`);
  j++;
  if (j == 10) {
    break;
  }
}

// do-while 비교
let index1 = 0;
do {
  console.log(`인덱스는 ${index1}입니다`);
  index1++;
} while (index1 > 10);

let index2 = 0;
while (index2 > 10) {
  console.log(`인덱스는 ${index2}입니다`);
  index2++;
}
