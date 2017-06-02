const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49'];
const numberOfBingoCards = 50;


const bingos = [];
for (let i = 0; i < numberOfBingoCards; i++) {
  const currentBingo = [];
  for (let j = 0; j < 5; j++) {
    const currentRow = [];
    while (currentRow.length < 5) {
      let randomOption = Math.floor(Math.random() * options.length);
      if (!currentRow.includes(randomOption)) {
        let addOption = true;
        currentBingo.forEach(row => {
          if (row.includes(randomOption)) {
            addOption = false;
            return false;
          }
        });
        if (addOption) {
          currentRow.push(randomOption);
        }
      }
    }
    currentBingo.push(currentRow);
  }
  bingos.push(currentBingo);
}
