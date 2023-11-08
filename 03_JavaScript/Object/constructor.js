function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = function () {
    console.log(`난 ${this.name}이다`);
  };
}

let user1 = new Kdt("송수빈", "f");
let user2 = new Kdt("송민선", "f");
let user3 = new Kdt("윤제", "m");
let user4 = new Kdt("김성현", "m");
let user5 = new Kdt("이효석", "m");

user1.showName();
user2.showName();
user3.showName();
user4.showName();
user5.showName();
