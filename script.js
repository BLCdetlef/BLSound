// Dynamisches Abspielen mit Fallback auf 999.mp3
function playByCode(code) {
  const audio = new Audio(`sounds/${code}.mp3`);
  let usedFallback = false;

  audio.addEventListener('error', () => {
    if (usedFallback) return;
    usedFallback = true;
    const fallback = new Audio('sounds/999.mp3');
    fallback.play().catch(console.warn);
  });

  audio.play().catch(err => {
    if (!usedFallback) {
      usedFallback = true;
      const fallback = new Audio('sounds/999.mp3');
      fallback.play().catch(console.warn);
    }
  });
}

let num = '';
playByCode(code);


function stopAndClear() {
  audio.pause();         // Audio stoppen
  audio.currentTime = 0; // zurückspulen
  num = '';              // Ziffern löschen
  update();              // Anzeige leeren
}


function press(d) {
  if (num.length < 3) num += d;
  update();
}

function erase() {
  num = num.slice(0, -1);
  update();
}

function update() {
  document.getElementById('display').textContent = num.padEnd(3, '-');
}

function play(src) {
  audio.pause();        // aktuelle Wiedergabe stoppen
  audio.currentTime = 0; // zurückspulen
  audio.src = src;
  audio.play().catch(console.log);
}

function playNumber() {
  const file = `sounds/${num || '000'}.mp3`;
  fetch(file).then(r => {
    if (r.ok) play(file);
    else play('sounds/999.mp3');
  }).catch(() => play('sounds/999.mp3'));
}

function playIntro() {
  play('sounds/BLC_introaudio.mp3');
}

update();
