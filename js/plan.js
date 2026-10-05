// Tréninkový plán: fáze 1 (základní síla a stabilita), 2–3× týdně, 3 série.
window.PLAN = {
  weeklyGoalDefault: 3,
  phases: [
    { id: 1, name: "Základy síly", range: "první 3–4 týdny", summary: "Probudit kvadriceps, získat jistotu v koleni a čistou techniku. Vlastní váha, guma, židle." },
    { id: 2, name: "Přidáváme zátěž", range: "po 4 týdnech bez bolesti a otoků", summary: "Činka do rukou při dřepu, delší výdrže, lehký rovný běh na pásu." },
    { id: 3, name: "Dynamika", range: "až sedí síla i stabilita", summary: "Skoky, změny směru, návrat ke sportu. Nejlépe pod dohledem fyzioterapeuta." }
  ],
  rules: [
    { title: "Žádná ostrá bolest", text: "Tlak nebo tah ve svalech je v pořádku. Píchání v koleni nebo pod čéškou znamená cvik hned ukončit." },
    { title: "Kvalita nad kvantitou", text: "Plná kontrola pohybu. V zrcadle hlídej, aby koleno neuhýbalo dovnitř." },
    { title: "2–3× týdně", text: "Například pondělí, středa, pátek. Svaly potřebují den na regeneraci." }
  ],
  exercises: [
    {
      id: "slr",
      name: "Zvedání natažené nohy",
      alias: "Straight Leg Raise",
      target: "3 × 10–15, výdrž 3–5 s",
      type: "reps",
      why: "Probuzení a posílení kvadricepsu, hlavně vnitřní hlavy (VMO), bez zátěže kloubu.",
      steps: [
        "Sedni si na zem s nataženýma nohama.",
        "Zatni stehno operované nohy a zatlač podkolenní jamku do země.",
        "Zvedni nataženou nohu 10–20 cm nad zem, drž 3–5 s, pomalu polož."
      ]
    },
    {
      id: "boxsquat",
      name: "Dřepy na židli",
      alias: "Box Squat",
      target: "3 × 10–15",
      type: "reps",
      why: "Bezpečný nácvik dřepu, židle jistí a hlídá hloubku.",
      steps: [
        "Stůj zády k židli, váha na celých chodidlech, rovná záda.",
        "Pomalu se posaď a hned zase vstaň.",
        "Zabírej oběma nohama rovnoměrně, postupně víc operovanou."
      ],
      tip: "Měkký míč nebo srolovaný ručník mezi koleny a lehký stisk aktivuje správné svaly."
    },
    {
      id: "revlunge",
      name: "Výpady vzad",
      alias: "Reverse Lunge",
      target: "3 × 10–15 na každou nohu",
      type: "reps",
      why: "Šetrnější než výpady vpřed: koleno nepřepadává přes špičku.",
      steps: [
        "Stůj rovně, udělej krok vzad.",
        "Pomalu klesni zadním kolenem k zemi, těžiště na přední noze.",
        "Odrazem přední nohy se vrať do stoje."
      ],
      tip: "Když je to zpočátku těžké, přidrž se stěny nebo opěradla."
    },
    {
      id: "hamstring",
      name: "Hamstringy s gumou",
      alias: "Zadní strana stehna",
      target: "3 × 10–15",
      type: "reps",
      why: "Hamstringy jsou protisíla k přednímu vazu. Klíč ke stabilitě kolena.",
      steps: [
        "Gumu připevni k něčemu pevnému nebo zahákni o druhou nohu.",
        "Vleže na břiše nebo ve stoje s oporou přitahuj patu k hýždi.",
        "Zpátky pomalu, s kontrolou."
      ]
    },
    {
      id: "calf",
      name: "Výpony na jedné noze",
      alias: "Lýtko a kotník",
      target: "3 × 10–15",
      type: "reps",
      why: "Lýtka a stabilita kotníku i kolena.",
      steps: [
        "Stoupni si na operovanou nohu, pro jistotu se drž zdi.",
        "Pomalu nahoru na špičku a pomalu dolů."
      ],
      tip: "Až to půjde, přejdi na schod, aby pata mohla klesnout pod úroveň špičky."
    },
    {
      id: "balance",
      name: "Stoj na jedné noze",
      alias: "Propriocepce",
      target: "3 × 30–60 s",
      type: "time",
      why: "Učí koleno reagovat na nerovnosti, předchází dalšímu zranění.",
      steps: [
        "Stoupni si na operovanou nohu, koleno mírně pokrč, nikdy nezamykej.",
        "Vydrž 30–60 s bez zakolísání."
      ],
      tip: "Těžší varianta: zavřené oči nebo složený ručník pod nohou."
    }
  ],
  cheers: [
    "Jsi hvězda, jen tak dál! 💪",
    "Každý trénink se počítá. Hrdý na tebe.",
    "Dneska dobrý den na trénink? Fandím ti!",
    "Tři série a máš to. Zvládneš to.",
    "Koleno ti poděkuje. ❤️",
    "Pomalu, čistě, bez bolesti. Přesně tak."
  ],
  milestones: [
    { id: "first", name: "První krok", desc: "Zapsaný první trénink", test: s => s.total >= 1 },
    { id: "five", name: "Pětka", desc: "5 tréninků", test: s => s.total >= 5 },
    { id: "week", name: "Splněný týden", desc: "Poprvé splněný týdenní cíl", test: s => s.weeksHit >= 1 },
    { id: "ten", name: "Desítka", desc: "10 tréninků", test: s => s.total >= 10 },
    { id: "streak3", name: "Tři v řadě", desc: "3 týdny v řadě splněný cíl", test: s => s.bestStreak >= 3 },
    { id: "calm", name: "Klidné koleno", desc: "5 tréninků po sobě s bolestí do 2", test: s => s.calmRun >= 5 },
    { id: "twenty", name: "Dvacítka", desc: "20 tréninků", test: s => s.total >= 20 },
    { id: "phase2", name: "Základy hotové", desc: "4 splněné týdny, čas přidat zátěž", test: s => s.weeksHit >= 4 }
  ]
};
