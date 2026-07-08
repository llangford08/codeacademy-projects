let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber)

let isEarly = false;
let runnerAge = 28;

if(runnerAge > 18) {
  raceNumber += 1000;
}

if(runnerAge > 18 && isEarly){
  console.log(`Your race number is ${raceNumber} and your race begins at 9:30 am.`);
} else if (runnerAge > 18 && !isEarly) {
  console.log(`Your race number is ${raceNumber} and your race begins at 11 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race begins at 12 pm.`);
} else {
  console.log('See registration desk.');
}

