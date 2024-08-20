// coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];

const tips = [];
const totals = [];

const calcTip = (bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
for(let i = 0; i<bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

for(let i =0; i< bills.length; i++)
{
    console.log('Tien bill ', i+1, ' la: ', bills[i], '  || Tien tip bill ', i+1, ' la: ', tips[i], '  || Tong bill la: ', totals[i]);
}
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
    }

    console.log('Average Total: $' + calcAverage(totals).toFixed(2));