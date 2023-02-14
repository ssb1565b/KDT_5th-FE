//  ============ 클래스 추가해보기
const boxEl = document.querySelector(".box");
// box 클래스를 가진 첫번째 요소

boxEl.classList.add("orange");
// classList api를 호출하여 add해줌
console.log(boxEl);

// ============ 클래스 삭제해보기
const thirdBoxEl = document.getElementById("contain");
thirdBoxEl.classList.remove("box");

// ============= 클래스 확인해보기
// contains >> boolean값 리턴
console.log(boxEl.classList.contains("box")); //true
console.log(thirdBoxEl.classList.contains("box")); //false
