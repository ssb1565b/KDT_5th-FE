let song = {
  name: "subin",
  age: 26,
  diet: true,
  likes: [
    "🍚",
    "🍣",
    "🍩",
    "🍕",
    "🥐",
    "🌿",
    "📷",
    "💪",
    "🏖",
    "🎳",
    "🍒",
    "🍋",
    "🍰",
    "🐶",
    "🎶",
    "💫",
  ],
  frontend_skill: undefined,
  backend_skill: null,
  want_go_home: true,
};

// 객체 접근
console.log(song.age);
console.log(song["age"]);
//  "" 를 안해주면 age를 변수로 인식함

// 객체 추가
song.gender = "male";
song["hair"] = "black";
console.log(song);

// 객체 삭제
delete song.likes;
delete song["diet"];
console.log(song);
