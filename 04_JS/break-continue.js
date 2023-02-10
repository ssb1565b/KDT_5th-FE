// // 1번
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(`${i}번입니다.`);
//   }
// }

// // 2번

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) continue;
//   console.log(`${i}번입니다.`);
// }

// // 1,2번 둘다 같은 의미

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(`${i}번입니다.`);
  }
  if (i === 16) break;
}
