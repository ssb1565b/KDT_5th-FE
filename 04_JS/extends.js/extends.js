class Car {
  constructor(brand, color) {
    this.brand = brand;
    // this.brand는 받아온 brand다

    this.color = color;
    // this.color는 받아온 color다
  }

  drive() {
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
  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const tesla = new ElecCar("tesla", "red", "electric"); // 인스턴스화
tesla.drive();
tesla.showFuel();
