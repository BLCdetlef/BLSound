# BLSound - Soundboard System

Ein webbasiertes Kiosk-Soundboard-System, das durch einfache Zahleneingabe Audioinhalte abspielt und zugehörige Bilder und Texte anzeigt.

## Features

- **Numpad-Interface**: Touch-optimierte Zahleneingabe
- **Audio-Wiedergabe**: MP3-Dateien mit Play/Stop-Funktionalität
- **Dynamische Inhalte**: Bilder und Texte werden automatisch geladen
- **Mehrsprachigkeit**: Deutsch, Englisch und Chinesisch unterstützt
- **Responsive Design**: Funktioniert auf Desktop und Tablets
- **GitHub Pages Ready**: Einfaches Deployment über GitHub Pages

## Live Demo

Das System ist live verfügbar unter: [GitHub Pages](https://blcdetlef.github.io/BLSound/)

## Mehrsprachigkeit

Das System unterstützt drei Sprachen:
- **🇩🇪 Deutsch** (Standard)
- **🇬🇧 English** 
- **🇨🇳 中文** (Chinesisch)

### Sprach-Dateikonventionen

#### Deutsche Version (Standard)
- `001.mp3` - Audio-Datei
- `001.html` - Text-Datei
- `howTo.html` - Standard-Text
- `nosound.html` - Fehlende Audio-Dateien

#### Englische Version
- `001_en.mp3` - Audio-Datei
- `001_en.html` - Text-Datei
- `howTo_en.html` - Standard-Text
- `nosound_en.html` - Fehlende Audio-Dateien

#### Chinesische Version
- `001_zh.mp3` - Audio-Datei
- `001_zh.html` - Text-Datei
- `howTo_zh.html` - Standard-Text
- `nosound_zh.html` - Fehlende Audio-Dateien

#### Bild-Dateien (sprachunabhängig)
- `001.jpg/png/gif/webp/svg` - Bild für Nummer 001
- `standard.jpg` - Standard-Bild beim Laden der Seite
- `sound.svg` - Standard-Audio-Symbol
- `nosound.svg` - Symbol für fehlende Audio-Dateien

### Fallback-System

Das System verwendet ein intelligentes Fallback-System:
1. **Primär**: Datei in gewählter Sprache (z.B. `001_en.mp3`)
2. **Fallback**: Deutsche Version (z.B. `001.mp3`)
3. **Notfall**: Standard-Dateien (z.B. `sound.svg`, `nosound.svg`)

## Tutorial: Neue Inhalte hinzufügen

### Datei-Struktur

Für jede Nummer können folgende Dateien im `files/` Ordner erstellt werden:

#### Audio-Dateien (erforderlich)
- **`XXX.mp3`** - Deutsche Audio-Datei für Nummer XXX
- **`XXX_en.mp3`** - Englische Audio-Datei für Nummer XXX
- **`XXX_zh.mp3`** - Chinesische Audio-Datei für Nummer XXX
- Beispiele: `001.mp3`, `001_en.mp3`, `001_zh.mp3`

#### Bild-Dateien (optional, sprachunabhängig)
- **`XXX.jpg/png/gif/webp/svg`** - Das Bild für Nummer XXX
- Beispiele: `001.jpg`, `002.png`, `999.gif`
- Falls kein Bild vorhanden: `sound.svg` wird automatisch angezeigt

#### Text-Dateien (optional)
- **`XXX.html`** - Deutsche Text-Datei für Nummer XXX
- **`XXX_en.html`** - Englische Text-Datei für Nummer XXX
- **`XXX_zh.html`** - Chinesische Text-Datei für Nummer XXX
- Beispiele: `001.html`, `001_en.html`, `001_zh.html`
- Falls kein Text vorhanden: Kein Textfeld wird angezeigt

### HTML-Datei Format

Die HTML-Dateien sollten folgenden Aufbau haben:

#### Deutsche Version (`001.html`)
```html
<h2 id="infoTitle">Deutscher Titel für die Nummer</h2>

<p>Hier steht der deutsche Beschreibungstext...</p>

<ul>
    <li>Deutscher Listenpunkt 1</li>
    <li>Deutscher Listenpunkt 2</li>
</ul>

<p>Weiterer deutscher Text mit <strong>HTML-Formatierung</strong>...</p>
```

#### Englische Version (`001_en.html`)
```html
<h2 id="infoTitle">English Title for the Number</h2>

<p>Here is the English description text...</p>

<ul>
    <li>English list item 1</li>
    <li>English list item 2</li>
</ul>

<p>Additional English text with <strong>HTML formatting</strong>...</p>
```

#### Chinesische Version (`001_zh.html`)
```html
<h2 id="infoTitle">编号的中文标题</h2>

<p>这里是中文描述文本...</p>

<ul>
    <li>中文列表项 1</li>
    <li>中文列表项 2</li>
</ul>

<p>其他中文文本，带有<strong>HTML格式</strong>...</p>
```

### Spezielle mehrsprachige Dateien

#### Standard-Inhalte (Text)
- **`howTo.html`** - Deutscher Standard-Text beim Laden der Seite
- **`howTo_en.html`** - Englischer Standard-Text beim Laden der Seite
- **`howTo_zh.html`** - Chinesischer Standard-Text beim Laden der Seite

#### Standard-Inhalte (Bilder - sprachunabhängig)
- **`standard.jpg`** - Standard-Bild beim Laden der Seite

#### Fehlende Audiodateien (Text)
- **`nosound.html`** - Deutsche Version
- **`nosound_en.html`** - Englische Version
- **`nosound_zh.html`** - Chinesische Version

#### Fehlende Audiodateien (Bilder - sprachunabhängig)
- **`nosound.svg`** - Symbol für fehlende Audio-Dateien

## Beispiel: Nummer 123 mehrsprachig hinzufügen

### Benötigte Dateien:

#### Audio-Dateien (mehrsprachig):
1. **`files/123.mp3`** → Deutsche Audio-Datei
2. **`files/123_en.mp3`** → Englische Audio-Datei
3. **`files/123_zh.mp3`** → Chinesische Audio-Datei

#### Bild-Datei (sprachunabhängig):
4. **`files/123.jpg`** → Ein Bild für alle Sprachen

#### Text-Dateien (mehrsprachig):

**`files/123.html`** (Deutsch):
```html
<h2 id="infoTitle">Deutscher Titel für 123</h2>

<p>Hier ist die deutsche Beschreibung für Nummer 123. Das System unterstützt 
<strong>fette Schrift</strong> und <em>kursive Schrift</em>.</p>

<ul>
    <li>Erster wichtiger deutscher Punkt</li>
    <li>Zweiter wichtiger deutscher Punkt</li>
    <li>Dritter wichtiger deutscher Punkt</li>
</ul>
```

**`files/123_en.html`** (Englisch):
```html
<h2 id="infoTitle">English Title for 123</h2>

<p>Here is the English description for number 123. The system supports 
<strong>bold text</strong> and <em>italic text</em>.</p>

<ul>
    <li>First important English point</li>
    <li>Second important English point</li>
    <li>Third important English point</li>
</ul>
```

**`files/123_zh.html`** (Chinesisch):
```html
<h2 id="infoTitle">编号123的中文标题</h2>

<p>这是编号123的中文描述。系统支持
<strong>粗体文本</strong>和<em>斜体文本</em>。</p>

<ul>
    <li>第一个重要的中文要点</li>
    <li>第二个重要的中文要点</li>
    <li>第三个重要的中文要点</li>
</ul>
```

### Ergebnis:
- **Deutsch**: Nummer **123** → **123.mp3** + **123.jpg** + **123.html**
- **English**: Nummer **123** → **123_en.mp3** + **123.jpg** + **123_en.html**
- **中文**: Nummer **123** → **123_zh.mp3** + **123.jpg** + **123_zh.html**

## Wichtige Hinweise

- **Dateinamen:** Immer 3-stellig mit führenden Nullen (`001`, `002`, `123`, `999`)
- **Sprachsuffix:** `_en` für Englisch, `_zh` für Chinesisch, kein Suffix für Deutsch
- **Bilder sind sprachunabhängig:** Ein Bild wird für alle Sprachen verwendet
- **Groß-/Kleinschreibung:** Wird automatisch berücksichtigt (`.mp3` und `.MP3` funktionieren beide)
- **Fallback-System:** Wenn keine sprachspezifische Datei existiert, wird die deutsche Version verwendet
- **Deployment:** Nach dem Push zu GitHub dauert es 1-2 Minuten bis Änderungen live sind
- **Browser-Cache:** Bei Änderungen evtl. Browser-Cache leeren (Strg+F5 / Cmd+Shift+R)

## Struktur

```
BLSound/
├── index.html          # Hauptanwendung
├── README.md          # Diese Datei
└── files/             # Content-Ordner
    ├── 001.mp3        # Audio für Nummer 001 (Deutsch)
    ├── 001_en.mp3     # Audio für Nummer 001 (Englisch)
    ├── 001_zh.mp3     # Audio für Nummer 001 (Chinesisch)
    ├── 001.jpg        # Bild für Nummer 001 (alle Sprachen)
    ├── 001.html       # Text für Nummer 001 (Deutsch)
    ├── 001_en.html    # Text für Nummer 001 (Englisch)
    ├── 001_zh.html    # Text für Nummer 001 (Chinesisch)
    ├── howTo.html     # Standard-Text (Deutsch)
    ├── howTo_en.html  # Standard-Text (Englisch)
    ├── howTo_zh.html  # Standard-Text (Chinesisch)
    ├── standard.jpg   # Standard-Bild (alle Sprachen)
    ├── nosound.html   # Text für fehlende Audio (Deutsch)
    ├── nosound_en.html# Text für fehlende Audio (Englisch)
    ├── nosound_zh.html# Text für fehlende Audio (Chinesisch)
    ├── sound.svg      # Standard-Audio-Symbol
    └── nosound.svg    # Symbol für fehlende Audio (alle Sprachen)
```

Das Soundboard erkennt automatisch welche Audio- und Text-Dateien in welcher Sprache vorhanden sind. Bilder werden sprachunabhängig verwendet und sind für alle Sprachen gleich!