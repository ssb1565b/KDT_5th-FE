function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showUser = () => {
    // 생성자함수는 이미 this를 가지고 있기 떄문에 화살표함수에서 this를 썻을떄 생성자함수의 this를 자겨옴
    console.log(
      `이름은 ${this.name}, 성별은 ${
        this.gender === "f" ? "여자" : "남자"
      }입니다`
    );
  };
}

const user1 = new Kdt("송수빈", "f");
const user2 = new Kdt("송민선", "f");
const user3 = new Kdt("윤제", "m");
const user4 = new Kdt("백진솔", "f");
const user5 = new Kdt("김성현", "m");

user1.showUser();
user2.showUser();
user3.showUser();
user4.showUser();
user5.showUser();
