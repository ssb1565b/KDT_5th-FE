// 생성자 함수 버전
// 호이스팅 가능

const hyundai = new ConstructorCar("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

// 클래스버전

// 클래스는 호이스팅이 안됨 그래서 클래스 선언후 인스턴스화 해야함

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
// 인스턴스화 (객체만들기 )
console.log(porsche);
porsche.drive();
// 클래스는 선언후 인스턴스화 하기 > 강제가 되니까 좀 더 안전하게 쓸 수 있음

const morning = new ClassCar("morning", "black");
console.log(morning);
morning.drive();
