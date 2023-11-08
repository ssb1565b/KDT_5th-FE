// 생성자 함수 버전
// 위에 함수선언전에 호출해도 호이스팅이 되어서 작동
const hyundai = new Car("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

// 클래스버전 > 호이스팅 안됨
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
