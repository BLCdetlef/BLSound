# BLSound - Soundboard System

Ein webbasiertes Kiosk-Soundboard-System, das durch einfache Zahleneingabe Audioinhalte abspielt und zugehörige Bilder und Texte anzeigt.

## Features

- **Numpad-Interface**: Touch-optimierte Zahleneingabe
- **Audio-Wiedergabe**: MP3-Dateien mit Play/Stop-Funktionalität
- **Dynamische Inhalte**: Bilder und Texte werden automatisch geladen
- **Responsive Design**: Funktioniert auf Desktop und Tablets
- **GitHub Pages Ready**: Einfaches Deployment über GitHub Pages

## Live Demo

Das System ist live verfügbar unter: [\[GitHub Pages\]](https://blcdetlef.github.io/BLSound/)

## Tutorial: Neue Inhalte hinzufügen

### Datei-Struktur

Für jede Nummer können folgende Dateien im `files/` Ordner erstellt werden:

#### Audio-Dateien (erforderlich)
- **`XXX.mp3`** - Die Audiodatei für Nummer XXX
- Beispiele: `001.mp3`, `002.mp3`, `999.mp3`

#### Bild-Dateien (optional)
- **`XXX.jpg/png/gif/webp/svg`** - Das Bild für Nummer XXX  
- Beispiele: `001.jpg`, `002.png`, `999.gif`
- Falls kein Bild vorhanden: `sound.svg` wird automatisch angezeigt

#### Text-Dateien (optional)
- **`XXX.html`** - Der Text-Inhalt für Nummer XXX
- Beispiele: `001.html`, `002.html`, `999.html`
- Falls kein Text vorhanden: Kein Textfeld wird angezeigt

### HTML-Datei Format

Die HTML-Dateien sollten folgenden Aufbau haben:

```html
<h2 id="infoTitle">Titel für die Nummer</h2>

<p>Hier steht der Beschreibungstext...</p>

<ul>
    <li>Listenpunkt 1</li>
    <li>Listenpunkt 2</li>
</ul>

<p>Weiterer Text mit <strong>HTML-Formatierung</strong>...</p>
```

### Spezielle Dateien

#### Standard-Inhalte
- **`howTo.html`** - Wird als Standard-Text beim Laden der Seite angezeigt
- **`standard.jpg`** - Standard-Bild beim Laden der Seite

#### Fehlende Audiodateien
- **`nosound.svg`** - Wird angezeigt wenn keine MP3-Datei vorhanden ist
- **`nosound.html`** - Text der angezeigt wird wenn keine MP3-Datei vorhanden ist

## Dateien hinzufügen

### GitHub (für Live-Deployment)

#### Via GitHub Web-Interface
1. Gehe zu deinem Repository auf GitHub
2. Navigiere zum `files/` Ordner
3. Klicke **"Add file"** → **"Upload files"**
4. Dateien hochladen und committen
5. Warten bis GitHub Pages deployed (1-2 Minuten)

## Beispiel: Nummer 123 komplett hinzufügen

### Dateien erstellen:
1. **`files/123.mp3`** → Audio-Datei
2. **`files/123.jpg`** → Passende Grafik  
3. **`files/123.html`** → Text-Inhalt:

```html
<h2 id="infoTitle">Mein Titel für 123</h2>

<p>Hier ist die Beschreibung für Nummer 123. Das System unterstützt 
<strong>fette Schrift</strong> und <em>kursive Schrift</em>.</p>

<ul>
    <li>Erster wichtiger Punkt</li>
    <li>Zweiter wichtiger Punkt</li>
    <li>Dritter wichtiger Punkt</li>
</ul>

<p>Weitere Informationen können hier stehen...</p>
```

### Ergebnis:
- Nummer **123** eingeben → **123.mp3** wird abgespielt
- **123.jpg** wird als Bild angezeigt
- **123.html** Inhalt wird als formatierter Text angezeigt

## Wichtige Hinweise

- **Dateinamen:** Immer 3-stellig mit führenden Nullen (`001`, `002`, `123`, `999`)
- **Groß-/Kleinschreibung:** Wird automatisch berücksichtigt (`.mp3` und `.MP3` funktionieren beide)
- **Deployment:** Nach dem Push zu GitHub dauert es 1-2 Minuten bis Änderungen live sind
- **Browser-Cache:** Bei Änderungen evtl. Browser-Cache leeren (Strg+F5 / Cmd+Shift+R)

### GitHub Pages Setup:

1. In Repository-Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** 
4. Folder: **/ (root)**
5. Save

Die Seite ist dann verfügbar unter: `https://username.github.io/BLSound/`

## Struktur

```
BLSound/
├── index.html          # Hauptanwendung
├── README.md          # Diese Datei
└── files/             # Content-Ordner
    ├── 001.mp3        # Audio für Nummer 001
    ├── 001.jpg        # Bild für Nummer 001  
    ├── 001.html       # Text für Nummer 001
    ├── howTo.html     # Standard-Text
    ├── nosound.html   # Text für fehlende Audio
    ├── sound.svg      # Standard-Audio-Symbol
    └── nosound.svg    # Symbol für fehlende Audio
```

Das Soundboard erkennt automatisch welche Dateien vorhanden sind und passt die Anzeige entsprechend an!