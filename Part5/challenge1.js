//Data Structures, Modern Operators and Strings
// coding challenge 1

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

const player1 = game.players[0];
const player2 = game.players[1];

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

function printGoals(...players) {
  console.log(`${players.length} goals were scored.`);
  players.forEach((player) => console.log(player));
}

team1 < team2 && console.log("Team 1 is more likely to win.");
team1 > team2 && console.log("Team 2 is more likely to win.");

printGoals(...game.scored);

console.log("Thủ môn:", gk);
console.log("Các cầu thủ trên sân:", fieldPlayers);
