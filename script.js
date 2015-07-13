




var weeklyMileage = parseInt(prompt('How many miles do you want to run this week?'));
var longRunPercent = parseInt(prompt('What percent of your weekly mileage do you like your long runs? (Recommended 20-25)'));
var sessionsNum = parseInt(prompt('How many times a week can you run (0-13)?'));

function morningRun () {
  if (sessionsNum > 7) {
    var morningRunSessions = sessionsNum - 7;

  }
  return morningRunSessions;
}

var longRun = Math.round(weeklyMileage * (longRunPercent / 100));
var morningRunSessions = morningRun();
var morningRunMiles = morningRunSessions * 4;
var normalRun = Math.ceil((weeklyMileage-longRun-morningRunMiles) / (sessionsNum-morningRunSessions-1));


document.write("These are the recommended distances your runs should be<br>");
document.write("Long Run: " + longRun + "<br>");
document.write("Regular Runs: " + normalRun + "<br>");
document.write("You should have " + morningRunSessions + " morning runs that are 4 miles each")
console.log(morningRunSessions);
