// coding challenge 2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));
// Result : 15

const bills = [125, 555, 44];

//tinh tien tip
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//tinh tong bill
const tongbill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Tien bill 1 la: ', bills[0] , '  || Tien tip bill 1 la: ', tips[0], '  || Tong bill la: ', tongbill[0]);
console.log('Tien bill 2 la: ', bills[1] , '  || Tien tip bill 2 la: ', tips[1], '  || Tong bill la: ', tongbill[1]);
console.log('Tien bill 3 la: ', bills[2] , '  || Tien tip bill 3 la: ', tips[2], '  || Tong bill la: ', tongbill[2]);
