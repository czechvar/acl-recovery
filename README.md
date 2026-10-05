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

1. V repozitáři otevři **Settings → Pages**.
2. **Source**: *Deploy from a branch*, branch `main`, folder `/ (root)`. Ulož.
3. Za minutu běží appka na `https://<uživatel>.github.io/acl-recovery/`.

## Sdílení dat mezi dvěma telefony (Firebase, ~5 minut, zdarma)

1. Jdi na <https://console.firebase.google.com>, **Add project**, pojmenuj ho (např. `koleno-zpet`), Analytics můžeš vypnout.
2. V levém menu **Build → Realtime Database → Create database**. Zvol region (např. `europe-west1`) a **Start in locked mode**.
3. Záložka **Rules**: vlož obsah souboru `database.rules.json` z tohoto repozitáře a klikni **Publish**.
   Pravidla pouští čtení i zápis jen pod `pairs/<kód dvojice>`; kdo kód nezná, k datům se nedostane. Pro soukromý deník to stačí.
4. Vlevo nahoře **Project settings (ozubené kolo) → General → Your apps → ikona `</>` (Web)**. Pojmenuj appku, Hosting nezaškrtávej, **Register app**.
5. Firebase ukáže objekt `firebaseConfig = { ... }`. Zkopíruj ho do `js/firebase-config.js` jako `window.FIREBASE_CONFIG = { ... };` (vzor je v souboru). Zkontroluj, že obsahuje `databaseURL`; když ne, přidej adresu databáze z kroku 2.
6. Commitni a pushni. V appce se vpravo nahoře objeví **Sdíleno**.

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
```

Data ve Firebase: `pairs/<kód>/{profile, sessions/<id>, messages/<id>, reactions/<sessionId>/<id>}`.

## Úprava plánu

Cviky, cíle a fáze jsou v `js/plan.js`. Přidání cviku = nový objekt v poli `exercises`. Změna týdenního cíle jde i přímo v appce v Nastavení.
