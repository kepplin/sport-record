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

// optimise this in the future
let matchesPlayedPranav = document.querySelector(".matchesPlayedPranav");
let matchesPlayedAryan = document.querySelector(".matchesPlayedAryan");
let matchesPlayedKedar = document.querySelector(".matchesPlayedKedar");
let matchesPlayedSoham = document.querySelector(".matchesPlayedSoham");
let matchesPlayedRoshan = document.querySelector(".matchesPlayedRoshan");
let matchesPlayedKunal = document.querySelector(".matchesPlayedKunal");
let matchesPlayedSahil = document.querySelector(".matchesPlayedSahil");

let matchesPranav = getOccurence(finalArray, "Pranav");
let matchesAryan = getOccurence(finalArray, "Aryan");
let matchesKedar = getOccurence(finalArray, "Kedar");
let matchesSoham = getOccurence(finalArray, "Soham");
let matchesRoshan = getOccurence(finalArray, "Roshan");
let matchesKunal = getOccurence(finalArray, "Kunal");
let matchesSahil = getOccurence(finalArray, "Sahil");

matchesPlayedPranav.textContent = matchesPranav;
matchesPlayedAryan.textContent = matchesAryan;
matchesPlayedKedar.textContent = matchesKedar;
matchesPlayedSoham.textContent = matchesSoham;
matchesPlayedRoshan.textContent = matchesRoshan;
matchesPlayedKunal.textContent = matchesKunal;
matchesPlayedSahil.textContent = matchesSahil;
