//Data Structures, Modern Operators and Strings
// coding challenge 4

const input = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

const rows = input.trim().split(`\n`);

for (const [i, row] of rows.entries()) {
  const [first, ...rest] = row.trim().toLowerCase().split(`_`);
  const camelCase = [
    first,
    ...rest.map((word) => word[0].toUpperCase() + word.slice(1)),
  ].join(``);
  console.log(camelCase.padEnd(20) + `✅`.repeat(i + 1));
}
