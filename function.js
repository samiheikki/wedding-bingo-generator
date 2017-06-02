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
    'Joku käy grillillä välipalalla',
    'Joku käy jokilaivalla välipalalla',
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
    'Selfie',
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
    'Bestman esittää tanssiperformanssin',
    'Joku syö hääkarkin',
    'Avioliittoneuvo',
    'Juhlavieras luopuu korkkareistaan',
    'Itkettävä puhe',
    'Sulhanen pyörtyy'
]; 
    
const numberOfBingoCards = 50;

const bingos = [];
for (let i = 0; i < numberOfBingoCards; i++) {
  const currentBingo = [];
  for (let j = 0; j < 5; j++) {
    const currentRow = [];
    while (currentRow.length < 5) {
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
