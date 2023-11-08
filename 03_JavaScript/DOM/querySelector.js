let containBox = document.getElementById("contain");
// id는 고유값이어야하지만 만약 같은id를 지닌 요소가 두개라면 제일 첫번쨰 요소를 선택함

// let boxEl = document.querySelector(".box");
// // 제일 첫번쨰 요소를 선택

let boxElAll = document.querySelectorAll(".box");
// 해당 클래스의 모든 요소 선택
// 배열을 반환함

let boxEl2 = document.querySelector("#box2");

let listEl = document.querySelector("ul>li:nth-child(2)");
console.log(containBox, boxElAll, boxEl2, listEl);
