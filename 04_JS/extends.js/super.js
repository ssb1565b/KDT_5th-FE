class Car {
  constructor(brand, color) {
    this.brand = brand;
    // this.brand는 받아온 brand다

    this.color = color;
    // this.color는 받아온 color다
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}

// 클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    // super는 부모에서 받아온거 그대로 쓰겠다고 할때 씀 그래서 밑에처럼 따로 this.brand = brand 할필요없음
    this.fuel = fuel;
  }
  showSpec() {
    super.showSpec();
    // 상속받은 클래스에서 메소드 접근할떄는 super씀
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyundai", "blue");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electric"); // 인스턴스화
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
// 상속을 받아도 부모의 요소를 기억하고있음 그래서 둘다 true
