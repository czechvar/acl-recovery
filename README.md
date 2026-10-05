# Koleno zpět

Malá webová aplikace pro dva: jeden rehabilituje koleno po plastice ACL a zapisuje tréninky, druhý sleduje pokrok a fandí.

- **Přehled** – splněné tréninky v týdnu, série týdnů, bolest po tréninku, fáze plánu, milníky.
- **Trénink** – 8týdenní plán s progresí (týdny 1–4 základy, 5–8 zátěž a první běh), sestava pro aktuální týden s postupem u každého cviku, zápis sérií, bolest 0–10, otok, pocit, poznámka.
- **Historie** – všechny tréninky, reakce parťáka (💪 ❤️ 🔥 👏).
- **Fandění** – zprávy od parťáka, rychlé volby, odpovědi.
- **Nastavení** – jména, datum operace, týdenní cíl, týden plánu (automaticky podle splněných týdnů, nebo ručně), nahrání plánu do databáze, role telefonu, odkaz pro parťáka.

Čistý HTML/CSS/JS, žádný build. Funguje na telefonu i na počítači, ve světlém i tmavém režimu.

## Spuštění

Otevři `index.html` v prohlížeči, nebo spusť lokální server:

```
npx serve .
```

Bez nastavení Firebase se data ukládají jen do prohlížeče, kde appku otevřeš (parťák je neuvidí).

## Nasazení na GitHub Pages

Repozitář obsahuje workflow `.github/workflows/pages.yml`, který po každém pushi do `main` nasadí appku.

1. V repozitáři otevři **Settings → Pages**.
2. **Source**: vyber **GitHub Actions**. (Jednorázově.)
3. Pushni do `main`, nebo spusť workflow ručně v **Actions → Nasazení na GitHub Pages → Run workflow**.
4. Za minutu běží appka na `https://<uživatel>.github.io/acl-recovery/`. Adresu ukazuje i workflow v záložce Actions.

## Sdílení dat mezi dvěma telefony (Firebase)

Bez nastavení Firebase se data ukládají jen do prohlížeče, kde appku otevřeš (parťák je neuvidí). Založení projektu zabere asi 5–10 minut a je zdarma.

Podrobný návod krok za krokem včetně řešení potíží: **[docs/FIREBASE.md](docs/FIREBASE.md)**.

Ve zkratce: založ projekt, zapni Realtime Database, vlož pravidla z `database.rules.json`, zaregistruj webovou appku a její `firebaseConfig` vlož buď do `js/firebase-config.js`, nebo do GitHub Secretu `FIREBASE_CONFIG` (workflow ho při nasazení doplní sám).

### Spárování telefonů

1. Na svém telefonu otevři appku, zvol roli a v **Nastavení** klikni **Kopírovat** u odkazu pro parťáka.
2. Pošli odkaz. Parťák ho otevře, zvolí druhou roli a od té chvíle vidíte stejná data.

Odkaz obsahuje `?pair=KÓD`. Kód se na každém telefonu uloží, takže dál stačí otevírat appku bez parametru.

## Struktura

```
index.html              stránka a navigace
css/style.css           vzhled (světlý i tmavý režim)
js/plan.js              plán: cviky, týdny s progresí, fáze, pravidla, rychlé zprávy, milníky
scripts/upload-plan.mjs nahrání plánu do Firebase z počítače
js/store.js             úložiště: Firebase nebo localStorage, stejné rozhraní
js/charts.js            SVG grafy (týdny, bolest, kruh cíle)
js/app.js               obrazovky a logika
js/firebase-config.js   konfigurace Firebase (volitelná)
database.rules.json     pravidla Realtime Database
docs/FIREBASE.md        návod na Firebase krok za krokem
.github/workflows/      nasazení na GitHub Pages
```

Data ve Firebase: `pairs/<kód>/{profile, plan, sessions/<id>, messages/<id>, reactions/<sessionId>/<id>}`.

## Tréninkový plán

Plán je v `js/plan.js`: slovník cviků `exercises` (název, proč, postup, tip) a pole `weeks`, kde každý týden má název, zaměření a položky `{ ex, sets, reps | time, hold, note }`. Týden plánu se určí automaticky podle počtu splněných týdnů, v Nastavení jde přepnout ručně (opakování týdne po bolesti nebo pauze).

Po zapnutí Firebase jde plán nahrát do databáze (Nastavení → Nahrát plán, nebo `node scripts/upload-plan.mjs --pair KÓD`). Appka pak používá verzi z databáze, takže ho jde upravovat přímo v konzoli Firebase. Při změně v kódu zvyš `version` a nahraj znovu.
