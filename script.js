let num = '';
let audio = null; // globale Referenz für Stop/Play

// Dynamisches Abspielen mit Fallback auf 999.mp3
function playByCode(code) {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  const primary = `sounds/${code}.mp3`;
  const fallback = `sounds/999.mp3`;

  audio = new Audio(primary);

  audio.onerror = () => {
    audio.onerror = null; // Endlosschleife verhindern
    audio = new Audio(fallback);
    audio.play().catch(console.warn);
  };

  audio.play().catch(err => {
    console.warn('Playback failed, using fallback:', err);
    audio = new Audio(fallback);
    audio.play().catch(console.warn);
  });
}

function stopAndClear() {
  if (audio) {
    audio.pause();         
    audio.currentTime = 0; 
  }
  num = '';              
  update();              
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

// Bestätigen → 3-stellige Zahl abspielen
function playNumber() {
  const code = num || '000'; // falls leer → 000
  playByCode(code);
}

function playIntro() {
  playByCode('BLC_introaudio'); // Intro-Datei
}

update();
