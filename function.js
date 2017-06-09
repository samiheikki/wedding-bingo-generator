const numberOfBingoCards = 50;
const numberOfRows = 5;

const bingos = [];
for (let i = 0; i < numberOfBingoCards; i++) {
  const currentBingo = [];
  for (let j = 0; j < numberOfRows; j++) {
    const currentRow = [];
    while (currentRow.length < numberOfRows) {
      let randomOption = options[Math.floor(Math.random()*options.length)];
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

const body = document.querySelector('body');

bingos.forEach(bingo => {
  const bingoElement = document.createElement('div');
  const bingoTable = document.createElement('table');
  const gradientTop = document.createElement('div');
  const gradientBottom = document.createElement('div');
  const ribbon = document.createElement('h1');
  const ribbonContent = document.createElement('strong');
  const topDescription = document.createElement('div');
  const bottomDescription = document.createElement('div');

  bingoElement.classList.add('wrapper');
  gradientTop.classList.add('gradient');
  gradientTop.classList.add('gradient-top');
  gradientBottom.classList.add('gradient');
  gradientBottom.classList.add('gradient-bottom');
  ribbon.classList.add('ribbon');
  ribbonContent.classList.add('ribbon-content');
  topDescription.classList.add('top-description');
  bottomDescription.classList.add('right-arrow');

  ribbonContent.innerHTML = headerContent;
  topDescription.innerHTML = description;
  bottomDescription.innerHTML = winnerDescription;

  bingo.forEach((row, i) => {
    const rowElement = document.createElement('tr');
    const thirdRow = i === 2;
    row.forEach((column, j) => {
      const columnElement = document.createElement('td');
      const thirdColumn = j === 2;
      if (thirdRow && thirdColumn) {
        columnElement.innerHTML = '<img src="heart2.png">';
      } else {
        columnElement.innerHTML = column;
      }
      rowElement.appendChild(columnElement);
    });
    bingoTable.appendChild(rowElement);
  });

  ribbon.appendChild(ribbonContent);
  bingoElement.appendChild(gradientTop);
  bingoElement.appendChild(ribbon);
  bingoElement.appendChild(topDescription);
  bingoElement.appendChild(bingoTable);
  bingoElement.appendChild(bottomDescription);
  bingoElement.appendChild(gradientBottom);
  body.appendChild(bingoElement);
});
