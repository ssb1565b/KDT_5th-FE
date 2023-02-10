function triangle(width, height) {
  return (width * height) / 2;
}

function circle(radius = 3) {
  return radius ** 2 * 3.14;
}

function pythagoreanTheorem(width, height) {
  let triangle = width ** 2 + height ** 2;
  return Math.sqrt(triangle);
}
console.log(triangle(2, 2));
console.log(circle(2));
console.log(pythagoreanTheorem(2, 2));

// -------arrow function

let triangle = (width, height) => {
  return (width * height) / 2;
};

let circle = (radius = 3) => {
  return radius ** 2 * 3.14;
};

let pythagoreanTheorem = (width, height) => {
  let triangle = width ** 2 + height ** 2;
  return Math.sqrt(triangle);
};
console.log(triangle(2, 2));
console.log(circle(2));
console.log(pythagoreanTheorem(2, 2));
