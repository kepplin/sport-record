// Teams
let teamOne = Array.from(document.querySelectorAll(".teamOne"));

let teamTwo = document.querySelectorAll(".teamTwo");

// Scores
let teamOneScore = document.querySelectorAll(".teamOneScore");
let teamTwoScore = document.querySelectorAll(".teamTwoScore");
// Matches Played
let bigArray = [];
teamOne.forEach((element) => {
  abc = element.textContent;
  let abcsplit = abc.split(",");
  abcsplit.tostr;
  console.log(abcsplit);
  bigArray.push(abcsplit);
});
stringArray = bigArray.toString();
let array = stringArray.split(",");
console.log(array);
if (array.includes("Kunal")) {
  console.log("hi");
}
