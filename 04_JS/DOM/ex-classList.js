const orangeBox = document.querySelector(".orange");
const skyBlueBox = document.getElementById("skyblue");
const listSec = document.querySelector("ul>li:nth-child(2)");
listSec.classList.add("orange");
console.log("1", orangeBox, "2", skyBlueBox, "3", listSec);

if (orangeBox.classList.contains("orange")) {
  // 이것도 다 메소드 체이닝
  orangeBox.classList.remove("orange");
}

console.log("5", orangeBox);
