// // ============== 내가한거..

// // JS 구현
// const calendar = document.querySelector("table");
// const date = document.querySelector("#date");
// const content = document.querySelector("#content");
// const deleteBtn = document.querySelector(".info");
// // 클릭 된 요소를 저장하기 위한 전역 변수
// let targetEl;

// function checkDate(e) {
//   targetEl = e.target;
//   if (e.target.tagName === "P" || e.target.tagName === "TD") {
//     const dateEl = targetEl.innerText;
//     date.setAttribute(
//       "value",
//       `2023/02/${dateEl.length === 1 ? "0" + dateEl : dateEl}`
//     );
//   }
// }

// calendar.addEventListener("click", checkDate);

// function writeSchedule() {
//   const innerContent = document.createElement("div");
//   innerContent.addEventListener("click", function (e) {
//     innerContent.remove();
//   });
//   innerContent.append(content.value);
//   innerContent.classList.add("info");
//   targetEl.tagName === "TD"
//     ? targetEl.append(innerContent)
//     : targetEl.parentNode.append(innerContent);
// }

//  강사님이 한거... -----------

// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content");

let targetEl;

function calendarTask(e) {
  // event 객체를 반드시 받아와야함
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    console.log(e.target.children[0]);
    const day = e.target.children[0].textContent;
    //e.target === td/children[0]=== p의 첫번쨰 요소 /숫자값
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    // 삭제하기 2
    e.target.remove();
  }
}
function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    date.setAttribute("placeholder", "내용을 입력하세요");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }

  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;

  // 얼마나 추가될줄 알지 모르니까 미리 삭제기능함수도 넣어서 추가하기
  // // 삭제하기 1
  // addDiv.addEventListener("click", function () {
  //   addDiv.remove();
  // });

  targetEl.append(addDiv);
  // targetEl는 TD 노드
  input.value = "";
}
calendar.addEventListener("click", calendarTask);
// calendar내부에서 클릭이 일어나면 이게 실행된다.
