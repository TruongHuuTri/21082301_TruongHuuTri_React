//coding challenge 4

// Test Data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Function to calculate tip and print the result
const calculateTip = bill => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

// Test the function with the provided test data
calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);
