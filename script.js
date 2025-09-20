let num = '';
let player = null;

// einmalig sicherstellen, dass ein Player existiert (nutzt <audio id="player"> wenn vorhanden)
function getPlayer() {
  if (player) return player;
  player = document.getElementById('player');
  if (!player) {
    player = new Audio();
    player.id = 'player';
    // optional ins DOM hängen:
    // document.body.appendChild(player);
  }
  return player;
}

// robust: prüft erst per HEAD, ob die Datei existiert, sonst 999.mp3
async function playByCode(code) {
  const p = getPlayer();
  const primary = `sounds/${code}.mp3`;
  const fallback = `sounds/999.mp3`;

  // stoppen/auf Null
  try { p.pause(); } catch(_) {}
  p.currentTime = 0;

  try {
    const res = await fetch(primary, { method: 'HEAD', cache: 'no-store' });
    p.src = (res.ok ? primary : fallback);
    await p.play();
  } catch (e) {
    p.src = fallback;
    p.play().catch(console.warn);
  }
}

// UI-Logik
function stopAndClear() {
  const p = getPlayer();
  try { p.pause(); } catch(_) {}
  p.currentTime = 0;
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
  const el = document.getElementById('display');
  if (el) el.textContent = (num || '').padEnd(3, '-');
}

// OK/Bestätigen
function playNumber() {
  const code = num || '000';   // leer → 000
  playByCode(code);
}

// Intro-Button
function playIntro() {
  playByCode('BLC_introaudio');  // erwartet sounds/BLC_introaudio.mp3
}

update();

// Falls du die Funktionen im HTML per onclick nutzt:
window.stopAndClear = stopAndClear;
window.press = press;
window.erase = erase;
window.playNumber = playNumber;
window.playIntro = playIntro;
