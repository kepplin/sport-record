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

// THIS CODE IS NOT COMPLETE, I TOOK THE EASY WAY OUT
// Take team 2 score and subtract from team one, if result is a positive number
// then team 2 won, if it is a negative number then team 1 won

// Get every score in one array
// scores = [];
// score.forEach((element) => {
//   scoreText = element.textContent;
//   let scoresSplit = scoreText.split(",");
//   scores.push(scoresSplit);
// });
// scoresString = scores.toString();

// finalArrayScores = scoresString.split(",");
// console.log(finalArrayScores);

// function determineWinner(array, nth) {}

// console.log(determineWinner(finalArrayScores));

// Easy way - Team two always wins
// Get all team two players in one array
let teamTwo = Array.from(document.querySelectorAll(".teamTwo"));

let teamTwoPlayers = [];
teamTwo.forEach((element) => {
  let teamTwos = element.textContent;
  let teamTwoSplit = teamTwos.split(/[ ,]+/);
  teamTwoPlayers.push(teamTwoSplit);
});

teamTwoString = teamTwoPlayers.toString();
finalArrayTeamTwo = teamTwoString.split(/[ ,]+/);

function calculateWins(name) {
  let wins = getOccurence(finalArrayTeamTwo, name);
  let winsName = document.querySelector(`.${name}Wins`);
  return (winsName.textContent = wins);
}

finalArrayTeamTwo.forEach((name) => {
  calculateWins(name);
  calculateLosses(name);
  calculateWinRate(name);
});

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
  return (winRateName.textContent = winRate + "%");
}
