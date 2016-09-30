//Drop down for advanced calculations with workouts. 
  //Check box for threshold runs, up to 8% of mileage
  //Ask for warm up and cool down distances
  //Check box for repetition runs
    



$('#button').click(function() {
  //Check to make sure all forms are filled out.
  
  //Get user input
  var weeklyMileage = document.getElementById("mileage").value;
  var longRunPercent = document.getElementById("longRun").value;
  var sessionsNum = document.getElementById("sessions").value;
  var longRunDay = document.getElementById('longRunDay').value;
  
  document.write(weeklyMileage); 
});

//Calculations for long run, easy runs, and second runs
function morningRun() {
  if (sessionsNum > 7) {
    var morningRunSessions = sessionsNum - 7;
  }
  return morningRunSessions;
}

var longRun = Math.round(weeklyMileage * (longRunPercent / 100));
var morningRunSessions = morningRun();
var morningRunMiles = morningRunSessions * 4;
var normalRun = Math.ceil((weeklyMileage - longRun - morningRunMiles) / (sessionsNum - morningRunSessions - 1));

//Print out the runs for the week  
//Put long run at selected day of the week.
//Print out doubles if number of sessions is > 7


