/*The following program is designed to instruct runners when to start depending on their age and whether they registered early or not*/

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 25;
if (runnerAge > 18 && registeredEarly === true) {
  return raceNumber += 1000;
};

if (runnerAge > 18 && registeredEarly === true) {
  console.log('You will race at 9:30 AM. Your race number is ' + raceNumber);
}else if (runnerAge > 18 && !registeredEarly){
  console.log('You will start at 11:00 AM. Your race number is ' + raceNumber);
}else if (runnerAge < 18){
  console.log('You will start at 12:30 PM. Your race number is ' + raceNumber);
}else {
  console.log('Please see registration desk.');
}
