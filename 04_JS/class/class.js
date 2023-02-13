// 생성자 함수 버전
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

const hyundai = new Car("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

// 클래스버전
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}

const porsche = new ClassCar("porsche", "black");
console.log(porsche);
porsche.drive();

// 클래스는 왜 쓸까?
