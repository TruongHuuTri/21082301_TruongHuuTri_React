const numbers = [1, 3, 5, 7, 9, 11];

const hasNumberGreaterThanTen = numbers.some(function (number) {
  return number > 10;
});

console.log(hasNumberGreaterThanTen);
