const fs = require('fs');

const fileName = process.argv[2];

/*****************************
 * VERIFY THE DATA
 * ***************************/

const hasOnlyNumbers = (array) => {
  const notNumbers = array.filter((element) => !Number.isInteger(element));
  if (notNumbers.length >= 1) return false;
  return true; 
};

const westView = (numbers) => {
  let comparisonCount = 0;
  let numbersToCheck = [...numbers];
  let buildingsWithView = [];
  
  for (let i = numbersToCheck.length - 1; i >= 0; i--) {
    comparisonCount++;
    if (numbersToCheck[i] > buildingsWithView[buildingsWithView.length - 1] || buildingsWithView.length === 0) buildingsWithView.push(numbersToCheck[i]);
  }

  console.log(`Le nombre final est: ${buildingsWithView.length}, avec ${comparisonCount} comparaisons`);
  return buildingsWithView.length;
}

// Méthode synchrone
try {
  const data = fs.readFileSync(fileName, 'utf8');
  const numbers = data.split(' ').map((number) => Number.parseInt(number));
  if (!hasOnlyNumbers(numbers)) return console.error("The data is not valid!");

  console.log('====================================');
  console.log('BEGIN');
  console.log(numbers);
  console.log('====================================\n');

  westView(numbers);

  console.log('\n====================================');
  console.log('END');
  console.log('====================================');
  
} catch (error) {
  console.error(error.message);
}
