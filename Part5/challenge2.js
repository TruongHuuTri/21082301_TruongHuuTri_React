//Data Structures, Modern Operators and Strings
// coding challenge 2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));

const odds = Object.values(game.odds);
const OddsAverage = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log("Tỷ lệ cược trung bình: ", OddsAverage);

const { team1, x: draw, team2 } = game.odds;
console.log(`Tỷ lệ cược chiến thắng ${game.team1}: ${team1}`);
console.log(`Tỷ lệ cược hòa: ${draw}`);
console.log(`Tỷ lệ cược chiến thắng ${game.team2}: ${team2}`);

const scorers = game.scored.reduce((acc, player) => {
  acc[player] = (acc[player] || 0) + 1;
  return acc;
}, {});

console.log(scorers);
