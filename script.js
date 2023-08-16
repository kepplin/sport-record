// Teams
let team = Array.from(document.querySelectorAll(".team"));

// Scores
let teamOneScore = Array.from(document.querySelectorAll(".teamOneScore"));
let teamTwoScore = Array.from(document.querySelectorAll(".teamTwoScore"));
let score = Array.from(document.querySelectorAll(".score"));

// Matches Played
// Getting all the names into one array
let playerNames = [];
team.forEach((element) => {
  teams = element.textContent;
  let teamsSplit = teams.split(/[ ,]+/);
  playerNames.push(teamsSplit);
});
playerNamesString = playerNames.toString();

finalArray = playerNamesString.split(/[ ,]+/);

// Getting number for each name
function getOccurence(array, value) {
  let count = 0;
  array.forEach((x) => x === value && count++);
  return count;
}
// Writing out matches played for each name
function matchesPlayed(name) {
  let number = getOccurence(finalArray, name);
  let matchesPlayedName = document.querySelector(`.matchesPlayed${name}`);
  return (matchesPlayedName.textContent = number);
}

finalArray.forEach((name) => {
  matchesPlayed(name);
});

// Wins & Losses

let winners = Array.from(document.querySelectorAll(".winners"));

let winningTeams = [];
winners.forEach((element) => {
  let winnersText = element.textContent;
  let winnersSplit = winnersText.split(/[ ,]+/);
  winningTeams.push(winnersSplit);
});

winnersString = winningTeams.toString();
finalArrayWinners = winnersString.split(/[ ,]+/);

let losers = Array.from(document.querySelectorAll(".losers"));

let losingTeams = [];
losers.forEach((element) => {
  let losersText = element.textContent;
  let losersSplit = losersText.split(/[ ,]+/);
  losingTeams.push(losersSplit);
});

losersString = losingTeams.toString();
finalArrayLosers = losersString.split(/[ ,]+/);

function calculateWins(name) {
  let wins = getOccurence(finalArrayWinners, name);
  let winsName = document.querySelector(`.${name}Wins`);
  return (winsName.textContent = wins);
}

// Losses
function calculateLosses(name) {
  let losses = matchesPlayed(name) - calculateWins(name);
  let lossesName = document.querySelector(`.${name}Losses`);
  return (lossesName.textContent = losses);
}

// Winrate
function calculateWinRate(name) {
  let winRate = (calculateWins(name) / matchesPlayed(name)) * 100;
  let winRateName = document.querySelector(`.${name}Winrate`);
  return (winRateName.textContent = Math.round(winRate) + "%");
}

finalArrayWinners.forEach((name) => {
  calculateWins(name);
  calculateLosses(name);
  calculateWinRate(name);
});

// Sort
let statsTable = document.querySelector(".stats");

function tableSort(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0]; // 1st body in the table
  const rows = Array.from(tBody.querySelectorAll("tr")); // Selecting every row in tBody

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    // Get table cell at index

    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing table rows
  // While there is a table row element in tBody, remove each one until we reach the end
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  // Removes any sorting class that may have been previously applied
  statsTable
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));

  // Adds the ascending sort class
  statsTable
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);

  // Adds the descending sort class
  statsTable
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement; // Going up 3 times on the DOM tree gives us the table element itself, lets you apply sorting code to multiple tables
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    tableSort(tableElement, headerIndex, !currentIsAscending);
  });
});

// Winstreak

// function checkWinstreak(array, name) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     let winStreak = [];

//     winStreak.push(array[i]);
//     if (!array[i].includes(name)) {
//       break;
//     }
//     console.log(winStreak);
//   }
// }

// checkWinstreak(winningTeams, "Roshan");

// console.log(playerNames);
// console.log(winningTeams);
// console.log(losingTeams);
