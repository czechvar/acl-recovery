# Koleno zpět

Malá webová aplikace pro dva: jeden rehabilituje koleno po plastice ACL a zapisuje tréninky, druhý sleduje pokrok a fandí.

- **Přehled** – splněné tréninky v týdnu, série týdnů, bolest po tréninku, fáze plánu, milníky.
- **Trénink** – šest cviků fáze 1 s postupem, zápis sérií, bolest 0–10, otok, pocit, poznámka.
- **Historie** – všechny tréninky, reakce parťáka (💪 ❤️ 🔥 👏).
- **Fandění** – zprávy od parťáka, rychlé volby, odpovědi.
- **Nastavení** – jména, datum operace, týdenní cíl, role telefonu, odkaz pro parťáka.

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
js/plan.js              cviky, fáze, pravidla, milníky, rychlé zprávy
js/store.js             úložiště: Firebase nebo localStorage, stejné rozhraní
js/charts.js            SVG grafy (týdny, bolest, kruh cíle)
js/app.js               obrazovky a logika
js/firebase-config.js   konfigurace Firebase (volitelná)
database.rules.json     pravidla Realtime Database
docs/FIREBASE.md        návod na Firebase krok za krokem
.github/workflows/      nasazení na GitHub Pages
```

Data ve Firebase: `pairs/<kód>/{profile, sessions/<id>, messages/<id>, reactions/<sessionId>/<id>}`.

## Úprava plánu

Cviky, cíle a fáze jsou v `js/plan.js`. Přidání cviku = nový objekt v poli `exercises`. Změna týdenního cíle jde i přímo v appce v Nastavení.
