/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  let upphaf = 'Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.';
  alert(upphaf);

  play();

  let endir = 'Spila annan leik'
  let endurtaka = confirm(endir);
  while(endurtaka){
    play();
    endurtaka = confirm(endir);
  }

}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let t1 = new Date();
  let rett_svor = 0;
  let lausn;

  for(let i=0; i < GAMES_TO_PLAY; i++) {
    lausn = ask();

    if(lausn) {
      rett_svor++;
      console.log(rett_svor);
    }else if(lausn === null) {
      let quit = 'Hætt í leik';
      alert(quit);
      break;
    }

    if(i === (GAMES_TO_PLAY - 1)){
      let t2 = new Date();
      let timamunur = (t2-t1)/1000; //sek
      let medaltal = rett_svor/timamunur;

      timamunur = timamunur.toFixed(2);
      medaltal = medaltal.toFixed(2);

      let nidurstada = `Þú svaraðir ${rett_svor} af ${GAMES_TO_PLAY} dæmum á ${timamunur} sekúndum.\nMeðalrétt svör á sekúndu eru ${medaltal}`;
      alert(nidurstada);
      break;
    }
  }
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const r = Math.random();
  if(r < 0.25){
    const max = 100;
    const min = 1;
    const a = randomNumber(min, max);
    const b = randomNumber(min, max);
    const lausn = a+b;
    let spurning = `Hvað er ${a}+${b}?`;
    let svar = prompt(spurning);
    if(svar !== null){
      svar = parseInt(svar,10);
      return svar === lausn;
    }
    return null;

  }else if(r < 0.50) {
    const max = 100;
    const min = 1;
    const a = randomNumber(min, max);
    const b = randomNumber(min, max);
    const lausn = a-b;
    let spurning = `Hvað er ${a}-${b}?`;
    let svar = prompt(spurning);
    if(svar !== null){
      svar = parseInt(svar,10);
      return svar === lausn;
    }
    return null;

  }else if(r < 0.75) {
    const max = 10;
    const min = 1;
    const a = randomNumber(min, max);
    const b = randomNumber(min, max);
    const lausn = a*b;
    let spurning = `Hvað er ${a}*${b}?`;
    let svar = prompt(spurning);
    if(svar !== null){
      svar = parseInt(svar,10);
      return svar === lausn;
    }
    return null;

  }else {
    const max = 10;
    const min = 2;
    const a = randomNumber(min, max);
    const b = a * randomNumber(min, max);
    const lausn = b / a;
    let spurning = `Hvað er ${b}/${a}?`;
    let svar = prompt(spurning);
    if(svar !== null){
      svar = parseInt(svar,10);
      return svar === lausn;
    }
    return null;
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
