let num = '';
let player = null;

// holt oder erstellt den Player
function getPlayer() {
  if (player) return player;
  player = document.getElementById('player');
  if (!player) {
    player = new Audio();
    player.id = 'player';
  }
  return player;
}

function playByCode(code) {
  const p = getPlayer();

  // nichts tun, wenn kein Code eingegeben
  if (!code || code === '---' || code === '000') {
    console.log("No valid input, nothing played.");
    return;
  }

  const primary = `sounds/${code}.mp3`;
  const fallback = `sounds/999.mp3`;

  try { p.pause(); } catch(_) {}
  p.currentTime = 0;

  p.src = primary;
  p.onerror = () => {
    console.warn(`${primary} not found, playing fallback`);
    p.onerror = null; // sonst Endlosschleife
    p.src = fallback;
    p.play().catch(console.warn);
  };

  p.play().catch(err => {
    console.warn('Playback failed, trying fallback', err);
    p.src = fallback;
    p.play().catch(console.warn);
  });
}

// Bedienlogik
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

function playNumber() {
  if (!num) return;            // Leereingabe = nichts abspielen
  playByCode(num);
}

function playIntro() {
  playByCode('BLC_introaudio'); // erwartet sounds/BLC_introaudio.mp3
}

update();

// Export für onclick im HTML
window.stopAndClear = stopAndClear;
window.press = press;
window.erase = erase;
window.playNumber = playNumber;
window.playIntro = playIntro;
