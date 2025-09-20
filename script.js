let num = '';
let player = null;

// Hilfsfunktion: immer gleiche Quelle mit Zeitstempel anhängen,
// damit GitHub Pages / CDN keine alte 404 serviert
function cacheBust(url) {
  return `${url}?v=${Date.now()}`;
}

// Player-Objekt holen oder neu erstellen
function getPlayer() {
  if (player) return player;
  player = document.getElementById('player');
  if (!player) {
    player = new Audio();
    player.id = 'player';
  }
  return player;
}

// Dynamisches Abspielen mit Fallback auf 999.mp3
async function playByCode(code) {
  const p = getPlayer();

  // nichts abspielen, wenn keine Zahl eingegeben
  if (!code || code === '---') {
    return;
  }

  const primary = cacheBust(`./sounds/${code}.mp3`);
  const fallback = cacheBust(`./sounds/999.mp3`);

  try { p.pause(); } catch (_) {}
  p.currentTime = 0;

  try {
    // versuchen, Datei zu holen
    const res = await fetch(primary, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Blob erzeugen und abspielen
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    p.src = url;
    await p.play();

    // Speicher nach ein paar Sekunden freigeben
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  } catch (e) {
    console.warn(`Fehler bei ${primary}, spiele Fallback`, e);
    p.src = fallback;
    p.play().catch(console.warn);
  }
}

// --- Bedienlogik für das Nummern-Pad ---

function stopAndClear() {
  const p = getPlayer();
  try { p.pause(); } catch (_) {}
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
  if (!num) return; // keine Eingabe → kein Abspielen
  playByCode(num);
}

function playIntro() {
  playByCode('BLC_introaudio'); // erwartet sounds/BLC_introaudio.mp3
}

update();

// Exporte für onclick im HTML
window.stopAndClear = stopAndClear;
window.press = press;
window.erase = erase;
window.playNumber = playNumber;
window.playIntro = playIntro;
