// 생성자함수
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

// 생성자 함수로 상속받아보기
function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  //  super와 같은 역할

  this.fuel = fuel;

  this.drive = function () {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`
    );
  };
  // over-riding하기
}

// 이제 상속받아보기

ElecCar.prototype = Object.create(Car.prototype);
//  일렉카라고 하는 생성자함수는 객체를 만들게되는데 그 원형은 prototype에 있음 근데 이 prototype은 Object.create(Car.prototype);여기의 Object.create(Car.prototype);에 있음
// 객체의 최상위 생성자 함수는 Object

ElecCar.prototype.constructor = ElecCar;
// ElecCar.prototype.constructor 는 위에 만든 클래스 선언문을 따라주세요 하는것

const tesla = new ElecCar("tesla", "white", "electricity");
tesla.drive();
