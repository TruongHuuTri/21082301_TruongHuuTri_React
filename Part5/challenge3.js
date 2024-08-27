//Data Structures, Modern Operators and Strings
// coding challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log("Các sự kiện trong trận đấu: ", events);
console.log("-".repeat(50));

gameEvents.delete(64);
console.log("Nhật kí sự kiện sau khi chỉnh sửa: ");
gameEvents.forEach((event, minute) => {
  console.log(`${minute}: ${event}`);
});
console.log("-".repeat(50));

const n = gameEvents.size;
const avg = 90 / n;
console.log(`- Trung bình mỗi sự kiện xảy ra mỗi ${avg} phút`);
console.log("-".repeat(50));

gameEvents.forEach((event, minute) => {
  const p = minute <= 45 ? "Hiệp 1" : "Hiệp 2";
  console.log(`[${p}] ${minute}: ${event}`);
});
