//coding challenge 3
// Test Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Test Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Test Data Bonus 2
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to calculate average score
const calcAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;

// Function to determine the winner
const determineWinner = (dolphinsAvg, koalasAvg) => {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log("Koalas win the trophy!");
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test Data 1
let dolphinsAvg1 = calcAverage(dolphinsScores1);
let koalasAvg1 = calcAverage(koalasScores1);
console.log("Test Data 1:");
determineWinner(dolphinsAvg1, koalasAvg1);

// Test Data Bonus 1
let dolphinsAvg2 = calcAverage(dolphinsScores2);
let koalasAvg2 = calcAverage(koalasScores2);
console.log("Test Data Bonus 1:");
determineWinner(dolphinsAvg2, koalasAvg2);

// Test Data Bonus 2
let dolphinsAvg3 = calcAverage(dolphinsScores3);
let koalasAvg3 = calcAverage(koalasScores3);
console.log("Test Data Bonus 2:");
determineWinner(dolphinsAvg3, koalasAvg3);
