let log = console.log;
var greeting = "hello";
const planet = "world";

log(greeting + " " + planet + "!");

let a = 3;
let b = 4;

a = a + b; // 7

b = a - b; // 3

a = a - b; // in this line a is still 7 and b is already 3 and after subtracting it from a it becomes 4

log("a is = " + a + " and b is = " + b);

log(typeof a);
log(typeof planet);

function typeConversion(num1, num2, str) {
  if (typeof num1 === "string") {
    num1 = Number(num1);
  }

  if (typeof num2 === "string") {
    num2 = Number(num2);
  }

  if (typeof str === "number") {
    str = str.toString();
  }

  return Math.round(num1 + num2) + " this is not a " + typeof str;
}

log(typeConversion("4", 3.7, 6));

function remainder(dividentNum, divisorNum) {
  const remainderNum = dividentNum % divisorNum;

  return "The result is " + remainderNum;
}

log(remainder(23, 7));

function generateRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

log(generateRandomNum(3, 21));

function areaOfCircle(radius) {
  let area = Math.PI * (radius * radius);

  area = area.toFixed(2);
  area = Number(area);
  return area;
}

log(areaOfCircle(5));

function celciusToFahrenheit(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;

  return fahrenheit;
}

log(celciusToFahrenheit(1));
