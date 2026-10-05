// Tréninkový plán: 8 týdnů, 2–3× týdně. Týdny 1–4 základní síla a stabilita,
// týdny 5–8 přidávání zátěže. Stejná struktura se ukládá do databáze pod
// pairs/<kód>/plan; appka pak použije verzi z databáze místo této vestavěné.
window.PLAN = {
  version: 2,
  name: "Návrat síly po ACL",
  weeklyGoal: 3,
  phases: [
    { id: 1, name: "Základy síly", range: "týdny 1–4", summary: "Probudit kvadriceps, získat jistotu v koleni a čistou techniku. Vlastní váha, guma, židle." },
    { id: 2, name: "Přidáváme zátěž", range: "týdny 5–8", summary: "Činka nebo lahev v rukou, schod, jednonožní mosty, rychlá chůze a první lehký běh." },
    { id: 3, name: "Dynamika", range: "po 8. týdnu", summary: "Skoky, změny směru, návrat ke sportu. Nejlépe pod dohledem fyzioterapeuta." }
  ],
  rules: [
    { title: "Žádná ostrá bolest", text: "Tlak nebo tah ve svalech je v pořádku. Píchání v koleni nebo pod čéškou znamená cvik hned ukončit." },
    { title: "Kvalita nad kvantitou", text: "Plná kontrola pohybu. V zrcadle hlídej, aby koleno neuhýbalo dovnitř." },
    { title: "2–3× týdně", text: "Například pondělí, středa, pátek. Svaly potřebují den na regeneraci." },
    { title: "Další týden až po klidném týdnu", text: "Do dalšího týdne plánu přejdi, když proběhl celý bez ostré bolesti a bez otoku. Jinak týden zopakuj." }
  ],
  exercises: {
    slr: {
      name: "Zvedání natažené nohy", alias: "Straight Leg Raise", type: "reps",
      why: "Probuzení a posílení kvadricepsu, hlavně vnitřní hlavy (VMO), bez zátěže kloubu.",
      steps: ["Sedni si na zem s nataženýma nohama.", "Zatni stehno operované nohy a zatlač podkolenní jamku do země.", "Zvedni nataženou nohu 10–20 cm nad zem, drž, pomalu polož."],
      gear: "Podložka na zem.",
      avoid: ["Ohýbání kolene při zvedání: noha zůstává propnutá, stehno zatnuté.", "Švih: nahoru i dolů pomalu, 2 s tam, 2 s zpět.", "Prohýbání v bedrech: druhou nohu pokrč a opři chodidlem o zem."]
    },
    boxsquat: {
      name: "Dřepy na židli", alias: "Box Squat", type: "reps",
      why: "Bezpečný nácvik dřepu, židle jistí a hlídá hloubku.",
      steps: ["Stůj zády k židli, váha na celých chodidlech, rovná záda.", "Pomalu se posaď a hned zase vstaň.", "Zabírej oběma nohama rovnoměrně, postupně víc operovanou."],
      tip: "Měkký míč nebo srolovaný ručník mezi koleny a lehký stisk aktivuje správné svaly.",
      gear: "Židle nebo lavice, volitelně míč nebo ručník mezi kolena.",
      avoid: ["Koleno uhýbá dovnitř: tlač kolena mírně ven, špičky lehce od sebe.", "Pata se zvedá: váha na celém chodidle, sedni si dozadu jako na židli.", "Dopad na židli: dosedni měkce, krátce se dotkni a vstaň."]
    },
    revlunge: {
      name: "Výpady vzad", alias: "Reverse Lunge", type: "reps",
      why: "Šetrnější než výpady vpřed: koleno nepřepadává přes špičku.",
      steps: ["Stůj rovně, udělej krok vzad.", "Pomalu klesni zadním kolenem k zemi, těžiště na přední noze.", "Odrazem přední nohy se vrať do stoje."],
      tip: "Když je to zpočátku těžké, přidrž se stěny nebo opěradla.",
      gear: "Rovná podlaha, zpočátku zeď nebo opěradlo na dosah.",
      avoid: ["Krátký krok vzad: zadní koleno má klesat pod bok, ne za něj.", "Přední koleno před špičkou: hlídej, ať zůstává nad patou.", "Náklon trupu: hrudník vzpřímený, pohled dopředu."]
    },
    hamstring: {
      name: "Hamstringy s gumou", alias: "Zadní strana stehna", type: "reps",
      why: "Hamstringy jsou protisíla k přednímu vazu. Klíč ke stabilitě kolena.",
      steps: ["Gumu připevni k něčemu pevnému nebo zahákni o druhou nohu.", "Vleže na břiše nebo ve stoje s oporou přitahuj patu k hýždi.", "Zpátky pomalu, s kontrolou."],
      gear: "Odporová guma, bod uchycení (noha stolu, klika) nebo druhá noha.",
      avoid: ["Pohyb z beder: pánev a trup se nehýbou, pracuje jen koleno.", "Švih gumou: brzdi i cestu zpět.", "Příliš silná guma: správně je 10–15 opakování s únavou na konci, ne boj o každé."]
    },
    calf: {
      name: "Výpony na jedné noze", alias: "Lýtko a kotník", type: "reps",
      why: "Lýtka a stabilita kotníku i kolena.",
      steps: ["Stoupni si na operovanou nohu, pro jistotu se drž zdi.", "Pomalu nahoru na špičku a pomalu dolů."],
      tip: "Na schodu může pata klesnout pod úroveň špičky, pohyb je delší a účinnější.",
      gear: "Zeď na přidržení, od 3. týdne schod.",
      avoid: ["Kotník se bortí dovnitř: tlač váhu na palec, lýtko drží kotník rovně.", "Krátký rozsah: nahoru co nejvýš, dolů pomalu až do plného protažení.", "Pokrčené koleno: noha propnutá, pracuje jen kotník."]
    },
    balance: {
      name: "Stoj na jedné noze", alias: "Propriocepce", type: "time",
      why: "Učí koleno reagovat na nerovnosti, předchází dalšímu zranění.",
      steps: ["Stoupni si na operovanou nohu, koleno mírně pokrč, nikdy nezamykej.", "Vydrž bez zakolísání."],
      tip: "Těžší varianta: zavřené oči nebo složený ručník pod nohou.",
      gear: "Zpočátku zeď na dosah, od 4. týdne složený ručník nebo polštář.",
      avoid: ["Zamčené koleno: drž mírný podřep, koleno pruží.", "Koleno padá dovnitř: nastav ho nad druhý prst na noze.", "Zadržený dech: dýchej normálně, oči na jeden bod před sebou."]
    },
    bridge: {
      name: "Most na jedné noze", alias: "Single-leg Bridge", type: "reps",
      why: "Hýždě a hamstringy bez zátěže kolena. Připravuje na běh.",
      steps: ["Lehni si na záda, chodidla na zemi, pokrčená kolena.", "Zdravou nohu zvedni, operovanou zatlač do země a zvedni pánev.", "Nahoře zatni hýždě na 2 s, pomalu dolů."],
      tip: "Když to na jedné noze nejde čistě, dělej most obounož a jen přidej výdrž.",
      gear: "Podložka na zem.",
      avoid: ["Prohnutí v bedrech: pánev zvedej silou hýždí, ne zad.", "Bok padá na stranu zvednuté nohy: zvedej jen tak vysoko, aby boky zůstaly rovně.", "Pata moc daleko od hýždě: chodidlo asi na dlaň od zadku."]
    },
    stepup: {
      name: "Výstupy na schod", alias: "Step-up", type: "reps",
      why: "Funkční síla kvadricepsu a hýždí, přenos do chůze po schodech a běhu.",
      steps: ["Operovanou nohu polož na schod, koleno nad špičkou.", "Vystoupej silou přední nohy, zdravou nohou nepomáhej odrazem.", "Pomalu dolů, brzdi operovanou nohou."],
      tip: "Začni na nízkém schodu. Když koleno uhýbá dovnitř, sniž výšku.",
      gear: "Schod nebo stabilní stupínek, výška 15–25 cm.",
      avoid: ["Odraz zdravou nohou: zadní noha je jen „mrtvá“, nahoru táhne ta na schodu.", "Koleno dovnitř: stejně jako u dřepu, tlač ho nad špičku.", "Seskok dolů: dolů pomalu, 2–3 s, brzdí operovaná noha."]
    },
    goblet: {
      name: "Dřep se zátěží v rukou", alias: "Goblet Squat", type: "reps",
      why: "Dřep ze židle se zátěží: činka, kettlebell nebo lahev s vodou u hrudníku.",
      steps: ["Zátěž drž oběma rukama u hrudníku, lokty dolů.", "Dřep k židli nebo do pohodlné hloubky, váha na celých chodidlech.", "Nahoru rovnoměrně oběma nohama."],
      tip: "Začni se 3–5 kg. Technika stejná jako u dřepu na židli.",
      gear: "Činka, kettlebell nebo lahev s vodou (začni 3–5 kg).",
      avoid: ["Zátěž daleko od těla: drž ji u hrudníku, lokty dolů.", "Kulatá záda: hrudník nahoru, pohled dopředu.", "Hluboký dřep hned: hloubku přidávej postupně, bolest nad čéškou znamená méně do hloubky."]
    },
    walk: {
      name: "Rychlá chůze", alias: "Kondice", type: "time",
      why: "Vytrvalost a návyk na delší zátěž bez nárazů.",
      steps: ["Rovný terén, pohodlné boty.", "Tempo, při kterém se zadýcháš, ale mluvíš.", "Po chůzi zkontroluj koleno: žádný otok, žádná bolest."],
      gear: "Pohodlné sportovní boty, rovný terén.",
      avoid: ["Kulhání: jakmile se změní chůze, zpomal nebo skonči.", "Kopce a nerovný terén: zatím ne, koleno chce rovinu.", "Dlouhá chůze hned: délku přidávej po 5 minutách týdně."]
    },
    run: {
      name: "Lehký běh na pásu", alias: "Chůze a běh střídavě", type: "time",
      why: "První návrat k běhu, rovně, bez změn směru, kontrolovaně.",
      steps: ["Rozehřej se 5 min chůzí.", "Střídej 1 min lehkého klusu a 2 min chůze.", "Skonči chůzí. Druhý den sleduj otok."],
      tip: "Jen pokud předchozí týden proběhl bez otoku. Při pichnutí v koleni přejdi na chůzi.",
      gear: "Běžecký pás nebo rovná měkká cesta, dobré běžecké boty.",
      avoid: ["Příliš rychle: lehký klus, při kterém se dá mluvit.", "Ignorování otoku: když koleno druhý den oteče, vrať se o týden zpět na chůzi.", "Zatáčky a seskoky: zatím jen rovně."]
    }
  },
  weeks: [
    { week: 1, phase: 1, title: "Probuzení", focus: "Naučit se cviky, aktivovat kvadriceps, žádné přetěžování.",
      items: [
        { ex: "slr", sets: 3, reps: 10, hold: "3 s" },
        { ex: "boxsquat", sets: 3, reps: 10, note: "zpočátku víc zdravou nohou" },
        { ex: "revlunge", sets: 3, reps: 8, note: "na každou nohu, s oporou o zeď" },
        { ex: "hamstring", sets: 3, reps: 10, note: "lehká guma" },
        { ex: "calf", sets: 3, reps: 10, note: "s oporou o zeď" },
        { ex: "balance", sets: 3, time: "30 s" }
      ] },
    { week: 2, phase: 1, title: "Stabilita", focus: "Víc opakování, rovnoměrné zatížení obou nohou.",
      items: [
        { ex: "slr", sets: 3, reps: 12, hold: "4 s" },
        { ex: "boxsquat", sets: 3, reps: 12, note: "ručník mezi koleny" },
        { ex: "revlunge", sets: 3, reps: 10, note: "na každou nohu, opora jen když je potřeba" },
        { ex: "hamstring", sets: 3, reps: 12 },
        { ex: "calf", sets: 3, reps: 12 },
        { ex: "balance", sets: 3, time: "40 s" }
      ] },
    { week: 3, phase: 1, title: "Kontrola", focus: "Bez opory, pomalejší tempo, čistá technika.",
      items: [
        { ex: "slr", sets: 3, reps: 15, hold: "5 s" },
        { ex: "boxsquat", sets: 3, reps: 15, note: "3 s dolů, plynule nahoru" },
        { ex: "revlunge", sets: 3, reps: 12, note: "na každou nohu, bez opory" },
        { ex: "hamstring", sets: 3, reps: 15 },
        { ex: "calf", sets: 3, reps: 15, note: "na schodu, pata pod úroveň" },
        { ex: "balance", sets: 3, time: "45 s", note: "zkus 10 s se zavřenýma očima" }
      ] },
    { week: 4, phase: 1, title: "Výdrž", focus: "Poslední týden základů. Když proběhne bez bolesti a otoku, od příštího týdne přidáváme zátěž.",
      items: [
        { ex: "slr", sets: 3, reps: 15, hold: "5 s", note: "volitelně lehký závaží na kotníku" },
        { ex: "boxsquat", sets: 3, reps: 15, note: "3 s dolů, 1 s výdrž nad židlí" },
        { ex: "revlunge", sets: 3, reps: 12, note: "na každou nohu, 2 s dolů" },
        { ex: "hamstring", sets: 3, reps: 15, note: "silnější guma" },
        { ex: "calf", sets: 3, reps: 15, note: "na schodu, 2 s výdrž nahoře" },
        { ex: "balance", sets: 3, time: "60 s", note: "na složeném ručníku" }
      ] },
    { week: 5, phase: 2, title: "První zátěž", focus: "Dřep se zátěží místo židle, mosty a schod. Opakování zpátky dolů, zátěž nahoru.",
      items: [
        { ex: "goblet", sets: 3, reps: 10, note: "3–5 kg" },
        { ex: "revlunge", sets: 3, reps: 10, note: "na každou nohu, lahev v rukou" },
        { ex: "bridge", sets: 3, reps: 10, note: "na každou nohu" },
        { ex: "stepup", sets: 3, reps: 10, note: "nízký schod, na každou nohu" },
        { ex: "calf", sets: 3, reps: 15, note: "na schodu" },
        { ex: "balance", sets: 3, time: "45 s", note: "na ručníku, zavřené oči" },
        { ex: "walk", sets: 1, time: "20 min", note: "mimo silový trénink, 2× týdně" }
      ] },
    { week: 6, phase: 2, title: "Objem", focus: "Více opakování se stejnou zátěží. Chůze delší.",
      items: [
        { ex: "goblet", sets: 3, reps: 12, note: "stejná zátěž jako minulý týden" },
        { ex: "revlunge", sets: 3, reps: 12, note: "na každou nohu, se zátěží" },
        { ex: "bridge", sets: 3, reps: 12, note: "na každou nohu, 2 s výdrž" },
        { ex: "stepup", sets: 3, reps: 12, note: "na každou nohu" },
        { ex: "calf", sets: 3, reps: 15, note: "na schodu, se zátěží v ruce" },
        { ex: "balance", sets: 3, time: "60 s", note: "na ručníku, zavřené oči" },
        { ex: "walk", sets: 1, time: "30 min", note: "2× týdně" }
      ] },
    { week: 7, phase: 2, title: "První klus", focus: "Zátěž o stupeň výš, chůze se mění v intervaly s lehkým během. Jen bez otoku.",
      items: [
        { ex: "goblet", sets: 3, reps: 10, note: "zátěž o 2–3 kg víc" },
        { ex: "revlunge", sets: 3, reps: 12, note: "na každou nohu, se zátěží" },
        { ex: "bridge", sets: 3, reps: 15, note: "na každou nohu" },
        { ex: "stepup", sets: 3, reps: 12, note: "vyšší schod nebo zátěž v ruce" },
        { ex: "calf", sets: 3, reps: 15, note: "na schodu, se zátěží" },
        { ex: "balance", sets: 3, time: "60 s", note: "na ručníku, mírný podřep" },
        { ex: "run", sets: 1, time: "15 min", note: "1 min klus, 2 min chůze, 2× týdně" }
      ] },
    { week: 8, phase: 2, title: "Souvislý běh", focus: "Konec plánu. Po něm se rozhodni s fyzioterapeutem o skocích a změnách směru.",
      items: [
        { ex: "goblet", sets: 3, reps: 12, note: "stejná zátěž jako v 7. týdnu" },
        { ex: "revlunge", sets: 3, reps: 12, note: "na každou nohu, se zátěží" },
        { ex: "bridge", sets: 3, reps: 15, note: "na každou nohu, 2 s výdrž" },
        { ex: "stepup", sets: 3, reps: 15, note: "na každou nohu" },
        { ex: "calf", sets: 3, reps: 20, note: "na schodu" },
        { ex: "balance", sets: 3, time: "60 s", note: "zavřené oči, mírný podřep" },
        { ex: "run", sets: 1, time: "20 min", note: "2 min klus, 1 min chůze, nebo 10 min souvisle" }
      ] }
  ],
  cheers: [
    "Jsi hvězda, jen tak dál! 💪",
    "Každý trénink se počítá. Hrdý na tebe.",
    "Dneska dobrý den na trénink? Fandím ti!",
    "Tři série a máš to. Zvládneš to.",
    "Koleno ti poděkuje. ❤️",
    "Pomalu, čistě, bez bolesti. Přesně tak."
  ]
};

// Milníky zůstávají v kódu (obsahují funkce), do databáze se neukládají.
window.MILESTONES = [
  { id: "first", name: "První krok", desc: "Zapsaný první trénink", test: s => s.total >= 1 },
  { id: "five", name: "Pětka", desc: "5 tréninků", test: s => s.total >= 5 },
  { id: "week", name: "Splněný týden", desc: "Poprvé splněný týdenní cíl", test: s => s.weeksHit >= 1 },
  { id: "ten", name: "Desítka", desc: "10 tréninků", test: s => s.total >= 10 },
  { id: "streak3", name: "Tři v řadě", desc: "3 týdny v řadě splněný cíl", test: s => s.bestStreak >= 3 },
  { id: "calm", name: "Klidné koleno", desc: "5 tréninků po sobě s bolestí do 2", test: s => s.calmRun >= 5 },
  { id: "phase2", name: "Základy hotové", desc: "4 splněné týdny, čas přidat zátěž", test: s => s.weeksHit >= 4 },
  { id: "twenty", name: "Dvacítka", desc: "20 tréninků", test: s => s.total >= 20 },
  { id: "plan", name: "Celý plán", desc: "8 splněných týdnů", test: s => s.weeksHit >= 8 }
];
