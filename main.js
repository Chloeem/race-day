let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 18;

runnerAge > 18 && earlyReg ? raceNumber + 1000 : console.log('Please wait, we will asign your number shortly.');

if (runnerAge > 18 && earlyReg) {
  console.log(`Thank you, you are no.${raceNumber} and you will be racing at 9:30am.`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`Thank you, you are no.${raceNumber} and you will be racing at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Thank you, you are no.${raceNumber}, as a youth registrant you will race at 12:30pm`);
} else {
  console.log('Sorry, there is an issue with your application, please go to the registration desk!');
}
