const options = [
    'Sulhasen äiti ei voi lopettaa itkemistä',
    'Morsian ei voi lopettaa itkemistä',
    'Morsiamen isä ei voi lopettaa itkemistä',
    'Morsiamen äiti ei voi lopettaa itkemistä',
    'Tanssitaan valssi',
    'Leikataan kakkua',
    'Morsian kompastuu helmoihinsa',
    'Sulhanen kompastuu morsiamen helmaan',
    'Sataa vettä',
    'Aurinko paistaa',
    'Puhe naurattaa',
    'Puhe itkettää',
    'Hääpari suutelee',
    'Juoma läikkyy',
    'Kuokkavieraita',
    'Sulhanen riisuu takin',
    'Morsiamesta / sulhasesta kerrotaan lapsuusmuisto',
    'Hääparista kerrotaan muisto',
    'Sormuksia ihastellaan',
    'Morsian ryöstetään',
    'Morsian / anoppi kyynelehtii',
    'Kaaso / bestman juoksee',
    'Morsian vaihtaa kengät',
    'Joku pitää puheen',
    'Bestman /sulhanen / morsian on hukassa',
    'Kaaso nappaa kimpun',
    'Bestman nappaa sukkanauhan',
    'Puhelin soi',
    'Tanssilattia täyttyy',
    'Vessajono',
    'Sulhanen vaimottelee',
    'Säätä kommentoidaan',
    'Piilopullo',
    'Bestman / Kaaso / sulhanen pitää puheen',
    'Anoppi joraa',
    'Karkkibuffet tyhjenee',
    'Jotain menee rikki',
    'Tekniikka pettää',
    'Häävalssi',
    'Joku huijaa bingossa',
    'Nolo muisto polttareista',
    '#selfie',
    'Joku huutaa BINGO!',
    'Reikä sukkahousuissa',
    'Tutustut uuteen ihmiseen',
    'Isä antaa neuvon',
    'Hääpari liikuttuu',
    'Morsian esittelee sormustaan',
    'Anoppi tanssittaa sulhasta',
    'Puhe!',
    'Hääpari leikkaa kakun',
    'Hääpari yllätetään',
    'Kohotetaan malja',
    'Joku tanssii kravatti otsalla',
    'Joku kompastuu',
    'Appiukko kertoo vitsin',
    'Joku etsii vessaa',
    'Joku kehuu ruokaa',
    'Yhteiskuva tai ryhmäselfie',
    'Kaaso auttaa morsianta',
    'Joku nousee tuolille seisomaan',
    'Lapset villiintyvät',
    'Puhelin soi',
    'Joku kertoo vitsin',
    'Sulhanen kyynelehtii',
    'Morsian on hukassa',
    'Huulipunaa lisätään',
    'Kimppu heitetään',
    'Sulhanen santsaa',
    'Joku kommentoi säätä',
    'Joku humaltuu',
    '"Minä muistan kun..."',
    'Bestman esittää tanssi-performanssin',
    'Joku syö hääkarkin',
    'Avioliittoneuvo',
    'Juhlavieras luopuu korkkareistaan',
    'Itkettävä puhe',
    'Sulhanen pyörtyy'
]; 
    
const numberOfBingoCards = 50;
const numberOfRows = 5;
const headerContent = 'Essi ❤️ Niko 17.06.2017';
const description = 'Bongaa viiden suora pystyyn, vaakaan tai vinoon ja huuda bingo';
const winnerDescription = 'Kolme ensimmäistä bingoavat itselleen yllätyspalkinnon!';

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
