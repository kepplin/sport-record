// Teams
let team = Array.from(document.querySelectorAll(".team"));

// Scores
let teamOneScore = document.querySelectorAll(".teamOneScore");
let teamTwoScore = document.querySelectorAll(".teamTwoScore");

// Matches Played
// Getting all the names into one array
let playerNames = [];
team.forEach((element) => {
  teams = element.textContent;
  let teamsSplit = teams.split(",");
  playerNames.push(teamsSplit);
});
playerNamesString = playerNames.toString();

finalArray = playerNamesString.split(",");

// Getting number for each name
function getOccurence(array, value) {
  let count = 0;
  array.forEach((x) => x === value && count++);
  return count;
}

function matchesPlayed(name) {
  let number = getOccurence(finalArray, name);
  let matchesPlayedName = document.querySelector(`.matchesPlayed${name}`);
  return (matchesPlayedName.textContent = number);
}

finalArray.forEach((name) => {
  matchesPlayed(name);
});
