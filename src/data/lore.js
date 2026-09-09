/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * Lore — El repositorio de conocimiento sagrado
 * Todos los datos estáticos del sistema extraídos
 * del monolito original. Inmutable. Solo lectura.
 * ─────────────────────────────────────────────
 */

// ── NOMENCLATURA ARCANA ──────────────────────────────────────────────────────
export const ARCANE_NAMES = {
  home:          { tab: 'Sanctum',       icon: '🜂' },
  plan:          { tab: 'Códice',        icon: '📜' },
  links:         { tab: 'Scriptorium',   icon: '🔗' },
  quiz:          { tab: 'Prueba',        icon: '⚗️' },
  diario:        { tab: 'Diario',        icon: '✒️' },
  meditacion:    { tab: 'Contemplatio',  icon: '🕯️' },
  habitos:       { tab: 'Disciplina',    icon: '⚖️' },
  afirmaciones:  { tab: 'Decretos',      icon: '💎' },
  estoicismo:    { tab: 'Pórtico',       icon: '🏛️' },
  orden:         { tab: 'Mi Orden',      icon: '⚔️' },
};

// ── EXPONENTES ───────────────────────────────────────────────────────────────
export const EXP_DATA = [
  {
    id: 'e1', era: 'Siglo XIX',
    name: 'Phineas Parkhurst Quimby',
    dates: '1802–1866 · El Padre del Nuevo Pensamiento',
    bio: 'Relojero autodidacta que descubrió que la enfermedad es una creencia mental y la curación, una corrección de esa creencia. Padre de toda la tradición.',
    topics: [
      { id: 't1a', title: 'Los Manuscritos de Quimby', note: 'Fuentes primarias del movimiento · 470 páginas de doctrina original',
        r: 'https://archive.org/details/quimbymanuscript00quim',
        a: 'https://www.youtube.com/results?search_query=phineas+quimby+nuevo+pensamiento+espanol' }
    ]
  },
  {
    id: 'e2', era: 'Siglo XIX',
    name: 'Ralph Waldo Emerson',
    dates: '1803–1882 · Base filosófica del movimiento',
    bio: 'Filósofo trascendentalista que articuló la idea del Alma Universal. Fuente directa de la doctrina de la Mente Universal que todo el Nuevo Pensamiento adoptó.',
    topics: [
      { id: 't2a', title: 'Autoconfianza (Self-Reliance)', note: 'El ensayo más influyente del movimiento',
        r: 'https://www.gutenberg.org/ebooks/16643',
        a: 'https://www.youtube.com/results?search_query=emerson+autoconfianza+espanol+audio' },
      { id: 't2b', title: 'El Alma Suprema (The Oversoul)', note: 'La idea de la Mente Universal en su forma más pura',
        r: 'https://www.gutenberg.org/ebooks/16643',
        a: 'https://www.youtube.com/results?search_query=emerson+el+alma+suprema+espanol+audio' }
    ]
  },
  {
    id: 'e3', era: 'Siglo XIX',
    name: 'Ralph Waldo Trine',
    dates: '1866–1958 · El más leído del siglo XIX',
    bio: 'Su libro fue el bestseller espiritual del siglo XIX. Henry Ford lo llevaba siempre consigo. La primera síntesis verdaderamente popular del Nuevo Pensamiento.',
    topics: [
      { id: 't3a', title: 'En Sintonía con el Infinito', note: 'Bestseller espiritual del siglo XIX · Henry Ford lo amaba',
        r: 'https://archive.org/details/inharmonywithinf00trin',
        a: 'https://www.youtube.com/results?search_query=en+sintonia+con+el+infinito+trine+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e4', era: 'Siglo XIX',
    name: 'Wallace D. Wattles',
    dates: '1860–1911 · La prosperidad como ciencia exacta',
    bio: 'Formuló la prosperidad como una ley tan precisa como la química. Su distinción entre mentalidad competitiva y mentalidad creativa es la base de toda la doctrina de abundancia.',
    topics: [
      { id: 't4a', title: 'La Ciencia de Hacerse Rico', note: 'Base filosófica de la prosperidad · inspiró El Secreto',
        r: 'https://www.gutenberg.org/ebooks/1632',
        a: 'https://www.youtube.com/results?search_query=la+ciencia+de+hacerse+rico+wattles+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e5', era: 'Clásicos 1900–1950',
    name: 'James Allen',
    dates: '1864–1912 · El poder del pensamiento',
    bio: 'Su texto más breve es su obra más perfecta. La analogía del jardín — la mente como tierra que cultivas o descuidas — es el principio central del movimiento expresado con máxima economía.',
    topics: [
      { id: 't5a', title: 'Como el Hombre Piensa', note: 'El texto más breve y esencial del movimiento',
        r: 'https://www.gutenberg.org/ebooks/4507',
        a: 'https://www.youtube.com/results?search_query=como+el+hombre+piensa+james+allen+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e6', era: 'Clásicos 1900–1950',
    name: 'Charles F. Haanel',
    dates: '1866–1949 · Sistema mental estructurado',
    bio: 'Creó el sistema más progresivo y estructurado del movimiento: 24 semanas de entrenamiento mental, cada semana construyendo sobre la anterior.',
    topics: [
      { id: 't6a', title: 'El Sistema de la Llave Maestra', note: '24 semanas de entrenamiento mental progresivo',
        r: 'https://archive.org/details/the-master-key-system-charles-haanel',
        a: 'https://www.youtube.com/results?search_query=sistema+llave+maestra+haanel+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e7', era: 'Clásicos 1900–1950',
    name: 'Thomas Troward',
    dates: '1847–1916 · El filósofo más profundo',
    bio: 'Juez del Punjab que aplicó rigor filosófico al Nuevo Pensamiento. La distinción entre mente objetiva y subjetiva, y la ley de correspondencia, provienen de sus Conferencias de Edimburgo.',
    topics: [
      { id: 't7a', title: 'Conferencias de Edimburgo', note: 'El fundamento filosófico más profundo del movimiento',
        r: 'https://archive.org/details/edinburgh-lectures-on-mental-science-thomas-troward',
        a: 'https://www.youtube.com/results?search_query=thomas+troward+conferencias+edimburgo+espanol+audio' },
      { id: 't7b', title: 'Conferencias de Dore', note: 'Continuación filosófica de Edimburgo',
        r: 'https://archive.org/details/edinburgh-lectures-on-mental-science-thomas-troward',
        a: 'https://www.youtube.com/results?search_query=thomas+troward+conferencias+dore+espanol+audio' }
    ]
  },
  {
    id: 'e8', era: 'Clásicos 1900–1950',
    name: 'Ernest Holmes',
    dates: '1887–1960 · Fundador de la Ciencia de la Mente',
    bio: 'Creó el sistema más completo y aplicado del movimiento. Su tratamiento de 5 pasos es la herramienta más precisa y reproducible de toda la tradición.',
    topics: [
      { id: 't8a', title: 'La Ciencia de la Mente', note: 'La enciclopedia del movimiento · texto central',
        r: 'https://archive.org/details/scienceofmind00holm',
        a: 'https://www.youtube.com/results?search_query=ernest+holmes+ciencia+de+la+mente+espanol+audiolibro+completo' }
    ]
  },
  {
    id: 'e9', era: 'Clásicos 1900–1950',
    name: 'Florence Scovel Shinn',
    dates: '1871–1940 · Afirmaciones y decretos',
    bio: 'Ilustradora de libros infantiles que se convirtió en una de las voces más poderosas del movimiento. Sus afirmaciones son decretos — vibraciones que crean condiciones.',
    topics: [
      { id: 't9a', title: 'El Juego de la Vida', note: 'Tratamientos prácticos para prosperidad y relaciones',
        r: 'https://www.gutenberg.org/ebooks/23297',
        a: 'https://www.youtube.com/results?search_query=florence+scovel+shinn+juego+de+la+vida+audiolibro+espanol+completo' },
      { id: 't9b', title: 'Tu Palabra es Tu Varita', note: 'Afirmaciones organizadas por tema de vida',
        r: 'https://archive.org/details/the-game-of-life-and-how-to-play-it',
        a: 'https://www.youtube.com/results?search_query=florence+scovel+shinn+tu+palabra+es+tu+varita+espanol+audio' }
    ]
  },
  {
    id: 'e10', era: 'Clásicos 1900–1950',
    name: 'Emmet Fox',
    dates: '1886–1951 · Síntesis mística cristiana',
    bio: 'Unió el Nuevo Pensamiento con la mística cristiana. Su reinterpretación del Sermón del Monte como manual práctico de transformación mental es compatible con AMORC y el Martinismo.',
    topics: [
      { id: 't10a', title: 'El Sermón del Monte', note: 'Metafísica cristiana práctica · compatible con Martinismo',
        r: 'https://archive.org/details/the-sermon-on-the-mount-emmet-fox',
        a: 'https://www.youtube.com/results?search_query=emmet+fox+sermon+del+monte+espanol+audiolibro+completo' }
    ]
  },
  {
    id: 'e11', era: 'Clásicos 1900–1950',
    name: 'Neville Goddard',
    dates: '1905–1972 · El maestro de la consciencia',
    bio: 'El más radical del movimiento. Para Neville la consciencia es Dios, el estado es la causa, y el sentimiento es el secreto. Su técnica del estado SATS es la más reproducible de toda la tradición.',
    topics: [
      { id: 't11a', title: 'El Sentir es el Secreto', note: 'La emoción como clave de la manifestación',
        r: 'https://archive.org/details/feeling-is-the-secret-neville-goddard',
        a: 'https://www.youtube.com/results?search_query=neville+goddard+el+sentir+es+el+secreto+espanol+audiolibro' },
      { id: 't11b', title: 'El Poder de la Consciencia', note: 'El estado mental como determinante absoluto',
        r: 'https://archive.org/details/neville-goddard-the-power-of-awareness',
        a: 'https://www.youtube.com/results?search_query=neville+goddard+el+poder+de+la+consciencia+espanol+audiolibro' },
      { id: 't11c', title: 'La Ley y la Promesa', note: 'Casos reales de manifestación documentados',
        r: 'https://archive.org/details/the-law-and-the-promise-neville-goddard',
        a: 'https://www.youtube.com/results?search_query=neville+goddard+la+ley+y+la+promesa+espanol+audiolibro' }
    ]
  },
  {
    id: 'e12', era: 'Clásicos 1900–1950',
    name: 'Joseph Murphy',
    dates: '1898–1981 · El poder del subconsciente',
    bio: 'El más práctico y el más leído del movimiento en español. Su método de programación pre-sueño es la herramienta más accesible para cualquier principiante.',
    topics: [
      { id: 't12a', title: 'El Poder del Subconsciente', note: 'El más leído en español · punto de entrada ideal',
        r: 'https://archive.org/details/the-power-of-your-subconscious-mind-joseph-murphy',
        a: 'https://www.youtube.com/results?search_query=joseph+murphy+poder+del+subconsciente+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e13', era: 'Clásicos 1900–1950',
    name: 'Napoleon Hill',
    dates: '1883–1970 · Puente entre pensamiento y riqueza',
    bio: 'Pasó 20 años estudiando a más de 500 de los hombres más exitosos de su época. Su libro es el manual más completo de aplicación práctica del Nuevo Pensamiento a la creación de riqueza.',
    topics: [
      { id: 't13a', title: 'Piense y Hágase Rico', note: 'El puente más directo hacia la riqueza material',
        r: 'https://archive.org/details/think-and-grow-rich-napoleon-hill_202101',
        a: 'https://www.youtube.com/results?search_query=napoleon+hill+piense+y+hagase+rico+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e14', era: 'Clásicos 1900–1950',
    name: 'Catherine Ponder',
    dates: '1927–presente · Las leyes de la prosperidad',
    bio: 'Ministra Unity que escribió el sistema más completo sobre prosperidad consciente. Su trabajo sobre los bloqueos de abundancia y la ley de circulación es insustituible.',
    topics: [
      { id: 't14a', title: 'Las Leyes Dinámicas de la Prosperidad', note: 'El texto más completo sobre prosperidad consciente',
        r: 'https://archive.org/details/the-dynamic-laws-of-prosperity-catherine-ponder',
        a: 'https://www.youtube.com/results?search_query=catherine+ponder+leyes+dinamicas+prosperidad+espanol+audiolibro' }
    ]
  },
  {
    id: 'e15', era: 'Clásicos 1900–1950',
    name: 'Connie Méndez',
    dates: '1898–1979 · La voz del movimiento en español',
    bio: 'No tradujo: creó en español. Sus ejemplos, metáforas y lenguaje son naturalmente latinoamericanos. La puerta de entrada más directa al movimiento para el hispanohablante.',
    topics: [
      { id: 't15a', title: 'Metafísica al Alcance de Todos', note: 'El texto de referencia del movimiento en español',
        r: 'https://archive.org/details/metafisica-al-alcance-de-todos-connie-mendez',
        a: 'https://www.youtube.com/results?search_query=connie+mendez+metafisica+al+alcance+de+todos+audiolibro+espanol+completo' },
      { id: 't15b', title: 'El Maravilloso Número 7', note: 'Los 7 principios metafísicos · complementa El Kybalion',
        r: 'https://archive.org/details/el-maravilloso-numero-7-connie-mendez',
        a: 'https://www.youtube.com/results?search_query=connie+mendez+el+maravilloso+numero+7+audiolibro+espanol' }
    ]
  },
  {
    id: 'e16', era: 'Contemporáneos',
    name: 'Louise Hay',
    dates: '1926–2017 · Fundadora de Hay House',
    bio: 'Estableció el mapa más completo entre patrones mentales y enfermedades. Su afirmación central — me apruebo y me acepto — es la base de toda sanación interior.',
    topics: [
      { id: 't16a', title: 'Usted Puede Sanar Su Vida', note: 'El libro más vendido del movimiento moderno',
        r: 'https://archive.org/details/you-can-heal-your-life-louise-hay',
        a: 'https://www.youtube.com/results?search_query=louise+hay+usted+puede+sanar+su+vida+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e17', era: 'Contemporáneos',
    name: 'Wayne Dyer',
    dates: '1940–2015 · Síntesis contemporánea',
    bio: 'Hizo accesible el Nuevo Pensamiento a una generación que no se identificaba con el lenguaje espiritual tradicional. Su concepto de la intención como fuerza universal es su mayor aporte.',
    topics: [
      { id: 't17a', title: 'El Poder de la Intención', note: 'Síntesis accesible del Nuevo Pensamiento moderno',
        r: 'https://archive.org/search?query=wayne+dyer+poder+de+la+intencion+espanol',
        a: 'https://www.youtube.com/results?search_query=wayne+dyer+el+poder+de+la+intencion+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e18', era: 'Contemporáneos',
    name: 'Bob Proctor',
    dates: '1934–2022 · Discípulo de Napoleon Hill',
    bio: 'Fue el puente viviente entre Hill y el movimiento moderno. Su concepto de paradigma — el conjunto de creencias subconscientes que controlan el comportamiento automático — es la clave de su sistema.',
    topics: [
      { id: 't18a', title: 'Usted Nació Rico', note: 'Consciencia de prosperidad y paradigmas mentales',
        r: 'https://archive.org/search?query=bob+proctor+nacio+rico+espanol',
        a: 'https://www.youtube.com/results?search_query=bob+proctor+usted+nacio+rico+espanol+audiolibro+completo' }
    ]
  },
  {
    id: 'e19', era: 'Contemporáneos',
    name: 'Esther Hicks (Abraham)',
    dates: '1948–presente · La Ley de Atracción moderna',
    bio: 'Popularizó el término Ley de Atracción en su forma más accesible. La alineación vibracional — hacer que tu estado emocional coincida con la frecuencia del bien deseado — es su aporte principal.',
    topics: [
      { id: 't19a', title: 'Pide y Se Te Dará', note: 'Los procesos más completos de alineación vibracional',
        r: 'https://archive.org/search?query=abraham+hicks+pide+se+te+dara+espanol',
        a: 'https://www.youtube.com/results?search_query=abraham+hicks+pide+y+se+te+dara+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e20', era: 'Contemporáneos',
    name: 'Joe Dispenza',
    dates: '1962–presente · Neurociencia y Nuevo Pensamiento',
    bio: 'El más científico del movimiento moderno. Demostró mediante neuroimagen que la meditación profunda genera cambios cerebrales y bioquímicos medibles. El puente entre Goddard y la neurociencia.',
    topics: [
      { id: 't20a', title: 'Rompiendo el Hábito de Ser Tú Mismo', note: 'El más científico del movimiento moderno',
        r: 'https://drjoedispenza.com/collections/books',
        a: 'https://www.youtube.com/results?search_query=joe+dispenza+rompiendo+habito+ser+tu+mismo+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e21', era: 'Contemporáneos',
    name: 'Gregg Braden',
    dates: '1954–presente · Ciencia y espiritualidad',
    bio: 'Geólogo y científico que demostró la existencia de un campo cuántico que conecta toda la materia y que responde al pensamiento y la emoción. La Matriz Divina como realidad verificable.',
    topics: [
      { id: 't21a', title: 'La Matriz Divina', note: 'Ciencia y espiritualidad integradas',
        r: 'https://greggbraden.com/books',
        a: 'https://www.youtube.com/results?search_query=gregg+braden+la+matriz+divina+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e22', era: 'Contemporáneos',
    name: 'Bruce Lipton',
    dates: '1944–presente · La biología de la creencia',
    bio: 'Biólogo celular que demostró experimentalmente que las células responden al ambiente — incluyendo los pensamientos y creencias — y no a los genes. La validación científica definitiva del Nuevo Pensamiento.',
    topics: [
      { id: 't22a', title: 'La Biología de la Creencia', note: 'Validación científica de la programación mental',
        r: 'https://www.brucelipton.com/books',
        a: 'https://www.youtube.com/results?search_query=bruce+lipton+biologia+de+la+creencia+audiolibro+espanol+completo' }
    ]
  },
  {
    id: 'e23', era: 'Clásicos 1900–1950',
    name: 'William Walker Atkinson',
    dates: '1862–1932 · El origen histórico de la Ley de Atracción',
    bio: 'Acuñó el término "Ley de Atracción" en 1906. Escribió más de 100 libros bajo los seudónimos Yogi Ramacharaka y Theron Q. Dumont, creando el puente más completo entre filosofía oriental y Nuevo Pensamiento occidental.',
    topics: [
      { id: 't23a', title: 'La Ley de la Atracción en el Mundo del Pensamiento', note: 'El primer libro en usar el término "Ley de Atracción" · 1906',
        r: 'https://archive.org/details/thought-vibration-or-the-law-of-attraction-in-the-thought-world',
        a: 'https://www.youtube.com/results?search_query=atkinson+ley+de+atraccion+mundo+pensamiento+audiolibro+espanol' },
      { id: 't23b', title: 'El Poder del Pensamiento (como Theron Q. Dumont)', note: 'La mente como fuerza operativa · bajo su seudónimo',
        r: 'https://archive.org/details/mental-fascination-william-walker-atkinson',
        a: 'https://www.youtube.com/results?search_query=william+walker+atkinson+poder+pensamiento+espanol+audiolibro' },
      { id: 't23c', title: 'Raja Yoga (como Yogi Ramacharaka)', note: 'Síntesis de filosofía oriental y Nuevo Pensamiento',
        r: 'https://archive.org/search?query=yogi+ramacharaka',
        a: 'https://www.youtube.com/results?search_query=yogi+ramacharaka+raja+yoga+espanol+audiolibro' }
    ]
  },
  {
    id: 'e24', era: 'Clásicos 1900–1950',
    name: 'Harvey Spencer Lewis',
    dates: '1883–1939 · Fundador de AMORC · Primer Imperator',
    bio: 'Fundó AMORC en 1915 y construyó el puente formal entre el Nuevo Pensamiento y la tradición hermético-rosacruista. Para quien estudia AMORC, Lewis es el autor que unifica explícitamente ambas tradiciones en un sistema iniciático progresivo.',
    topics: [
      { id: 't24a', title: 'Mansión de la Mente (Mental Alchemy)', note: 'Alquimia mental rosacruista · directamente conectado con AMORC',
        r: 'https://archive.org/search?query=harvey+spencer+lewis+mental+alchemy',
        a: 'https://www.youtube.com/results?search_query=harvey+spencer+lewis+AMORC+espanol' },
      { id: 't24b', title: 'Rosicrucian Questions and Answers', note: 'Introducción completa a la filosofía rosacruista AMORC',
        r: 'https://archive.org/details/rosicrucianquest00lewi',
        a: 'https://www.youtube.com/results?search_query=harvey+spencer+lewis+rosicrucian+espanol+audio' }
    ]
  }
];

// ── TOTAL DE OBRAS ──────────────────────────────────────────────────────────
export const TOTAL_OBRAS = EXP_DATA.reduce((sum, e) => sum + e.topics.length, 0); // 35

// ── PLAN SEMANAL ─────────────────────────────────────────────────────────────
export const WEEK_PLAN = [
  { l: 'Lunes',     t: ['Metafísica al Alcance de Todos — Méndez (cap.1–3)', 'Como el Hombre Piensa — Allen', 'Meditación 10 min · Diario'] },
  { l: 'Martes',    t: ['En Sintonía con el Infinito — Trine (cap.1–4)', 'Ciencia de Hacerse Rico — Wattles', 'Afirmaciones ×21 · Diario'] },
  { l: 'Miércoles', t: ['El Maravilloso Número 7 — Méndez', 'Autoconfianza — Emerson', 'Meditación 15 min · Reflexión'] },
  { l: 'Jueves',    t: ['El Poder del Subconsciente — Murphy (cap.1–6)', 'El Sentir es el Secreto — Goddard', 'Visualización 15 min'] },
  { l: 'Viernes',   t: ['El Juego de la Vida — Shinn', 'Tu Palabra es Tu Varita — Shinn', 'Tratamiento espiritual 5 pasos'] },
  { l: 'Sábado',    t: ['El Sermón del Monte — Fox (cap.1–4)', 'Ciencia de la Mente — Holmes (intro)', 'Meditación 20 min · en pareja'] },
  { l: 'Domingo',   t: ['Repaso y consolidación', 'Piense y Hágase Rico — Hill (cap.1–3)', 'Plan próxima semana'] }
];

// ── GUÍAS DE MEDITACIÓN ──────────────────────────────────────────────────────
export const MED_GUIDES = {
  reconocimiento: {
    title: 'Reconocimiento de la Mente Universal — Holmes',
    steps: [
      'Cierra los ojos. Respira profundamente tres veces. Suelta la tensión del día.',
      'Reconoce: Existe una Inteligencia Infinita que llena todo el universo. Está en cada célula de tu ser ahora mismo.',
      'Siente cómo esa Inteligencia fluye a través de ti. No estás separado de ella. Eres su expresión.',
      'Declara internamente: "Soy uno con la Fuente de toda vida, toda sabiduría y toda abundancia."',
      'Permanece en ese reconocimiento. Cuando la mente divague, vuelve suavemente a esta verdad.',
      'Antes de terminar: da gracias por esta unidad. No por lo que vendrá, sino por lo que ya es.'
    ]
  },
  estado: {
    title: 'Estado del Ser — Yo Soy (Neville Goddard)',
    steps: [
      'Relájate completamente. Siente el cuerpo pesado y cálido. Permite que la mente consciente se aquiete.',
      'Imagina: ¿Quién serías si tu visión más grande ya fuera real? ¿Cómo te sentirías?',
      'Adopta ESA identidad ahora. No la pienses. Siéntela en el cuerpo. Eres esa persona.',
      'Construye una escena que IMPLIQUE que tu deseo ya es una realidad. Vívela desde adentro.',
      'Añade los detalles: sonidos, aromas, texturas. Hazla más real que la habitación donde estás.',
      'Permanece en ese estado. Este es el estado que crea. La emoción de ya tenerlo es la clave.'
    ]
  },
  subconsciente: {
    title: 'Programación del Subconsciente — Murphy',
    steps: [
      'Respira suavemente. Con cada respiración, desciendes más profundo hacia el estado alfa.',
      'Cuenta hacia atrás desde 10. Cada número te lleva a una relajación más profunda.',
      'En este estado, tu subconsciente es completamente receptivo. Acepta lo que afirmas como verdad.',
      'Repite tu afirmación principal lentamente, con emoción y convicción. Siente que ya es real.',
      'Visualiza el resultado final. No el proceso, sino el estado de haberlo logrado ya.',
      'Imprime esta imagen con emoción positiva. Tu subconsciente la acepta y empieza a ejecutarla.'
    ]
  },
  prosperidad: {
    title: 'Consciencia de Prosperidad — Ponder / Wattles',
    steps: [
      'Cierra los ojos. Visualiza luz dorada llenando el espacio donde estás.',
      'Reconoce: La abundancia es la naturaleza del universo. No hay escasez en la fuente.',
      'Piensa en tres áreas donde ya tienes abundancia. Siéntela genuinamente.',
      'Visualiza tu prosperidad deseada. No el dinero, sino la LIBERTAD y el BIEN que representa.',
      'Declara: "Soy un canal abierto para la prosperidad divina. El bien fluye hacia mí y a través de mí."',
      'Libera cualquier creencia de escasez. Suéltala con la exhalación. Inhala abundancia.'
    ]
  },
  respiracion: {
    title: 'Contemplatio — Silencio puro',
    steps: [
      'Observa tu respiración natural. No la cambies. Solo observa.',
      'Inhala 4 tiempos. Sostén 4. Exhala 4. Sostén 4. Repite suavemente.',
      'Cuando un pensamiento llegue, no lo sigas. Obsérvalo pasar como una nube.',
      'Regresa siempre a la respiración. Ella es el ancla al momento presente.',
      'No hay lugar donde ir. No hay nada que lograr. Este momento es completo.',
      'Permanece en silencio. La respuesta más profunda surge en el silencio.'
    ]
  },
  gratitud: {
    title: 'Gratitud Profunda',
    steps: [
      'Lleva la mano al corazón. Respira hacia esa zona. Siente el calor que genera.',
      'Trae a la mente algo por lo que estés genuinamente agradecido. SIENTE la gratitud.',
      'Expande esa sensación. Tu esposa, tu camino, tu salud, tu inteligencia.',
      'Siente gratitud por lo que aún no ha llegado como si ya estuviera aquí. Esta es la fe activa.',
      'La gratitud es la frecuencia más alta. En este estado, eres un imán para el bien.',
      'Termina declarando: "Gracias por todo lo que tengo, todo lo que soy y todo lo que viene."'
    ]
  }
};

// ── LOS 7 GRADOS INICIÁTICOS ────────────────────────────────────────────────
export const GRADOS_DATA = [
  {
    id: 'g1', num: 'Grado I', title: 'Neófito · El Buscador', icon: '🌱',
    desc: 'El aspirante reconoce que la mente es la causa de toda experiencia. Comienza el trabajo de observación interior y establece la práctica diaria como fundamento inquebrantable.',
    reqs: [
      { id: 'gr1a', txt: 'Leer Como el Hombre Piensa — Allen completo', topicId: 't5a' },
      { id: 'gr1b', txt: 'Leer El Enquiridión — Epicteto completo', topicId: 'es-t2a' },
      { id: 'gr1c', txt: 'Completar 7 días consecutivos de ritual matutino', type: 'ritual', dias: 7 },
      { id: 'gr1d', txt: 'Escribir 3 registros iniciáticos', type: 'registros', n: 3 }
    ]
  },
  {
    id: 'g2', num: 'Grado II', title: 'Adepto · El Observador', icon: '👁️',
    desc: 'El adepto aprende a distinguir entre lo que depende de él y lo que no. Entrena la observación del pensamiento sin identificarse con él. La mente comienza a ser herramienta, no amo.',
    reqs: [
      { id: 'gr2a', txt: 'Completar Meditaciones — Marco Aurelio', topicId: 'es-t3a' },
      { id: 'gr2b', txt: 'Completar El Poder del Subconsciente — Murphy', topicId: 't12a' },
      { id: 'gr2c', txt: '21 días de práctica de afirmaciones documentados' },
      { id: 'gr2d', txt: 'Escribir 7 registros iniciáticos', type: 'registros', n: 7 }
    ]
  },
  {
    id: 'g3', num: 'Grado III', title: 'Compañero · El Forjador', icon: '🔨',
    desc: 'El compañero forja su carácter deliberadamente. Cada adversidad es material para la construcción del ser. La prosperidad comienza a manifestarse como consecuencia natural del trabajo interior.',
    reqs: [
      { id: 'gr3a', txt: 'Completar El Obstáculo es el Camino — Holiday', topicId: 'es-t5a' },
      { id: 'gr3b', txt: 'Completar La Ciencia de Hacerse Rico — Wattles', topicId: 't4a' },
      { id: 'gr3c', txt: 'Completar Piense y Hágase Rico — Hill', topicId: 't13a' },
      { id: 'gr3d', txt: 'Escribir 14 registros iniciáticos', type: 'registros', n: 14 }
    ]
  },
  {
    id: 'g4', num: 'Grado IV', title: 'Maestro Artesano · El Creador', icon: '✨',
    desc: 'El maestro artesano comprende el proceso completo de la creación mental. Domina la visualización, la afirmación y el estado del ser. Su mente es un instrumento preciso de manifestación.',
    reqs: [
      { id: 'gr4a', txt: 'Completar El Sentir es el Secreto — Goddard', topicId: 't11a' },
      { id: 'gr4b', txt: 'Completar La Ciencia de la Mente — Holmes', topicId: 't8a' },
      { id: 'gr4c', txt: 'Completar El Kybalion — Los Tres Iniciados' },
      { id: 'gr4d', txt: 'Escribir 21 registros iniciáticos', type: 'registros', n: 21 }
    ]
  },
  {
    id: 'g5', num: 'Grado V', title: 'Caballero · El Guerrero Interior', icon: '⚔️',
    desc: 'El caballero ha integrado la disciplina estoica con el poder creativo del Nuevo Pensamiento. Actúa con valentía desde la ecuanimidad. La batalla real es siempre interior.',
    reqs: [
      { id: 'gr5a', txt: 'Completar Cartas a Lucilio — Séneca', topicId: 'es-t4a' },
      { id: 'gr5b', txt: 'Completar Cómo ser un Estoico — Pigliucci', topicId: 'es-t6a' },
      { id: 'gr5c', txt: 'Completar Las Leyes Dinámicas de la Prosperidad — Ponder', topicId: 't14a' },
      { id: 'gr5d', txt: 'Escribir 30 registros iniciáticos', type: 'registros', n: 30 }
    ]
  },
  {
    id: 'g6', num: 'Grado VI', title: 'Comendador · El Filósofo', icon: '🔮',
    desc: 'El comendador ha sintetizado las tres tradiciones en una visión unificada. Comprende la unidad del ser, la ley de correspondencia y el principio hermético como realidades operativas.',
    reqs: [
      { id: 'gr6a', txt: 'Completar Conferencias de Edimburgo — Troward', topicId: 't7a' },
      { id: 'gr6b', txt: 'Completar Una Guía de la Buena Vida — Irvine', topicId: 'es-t7a' },
      { id: 'gr6c', txt: 'Completar El Poder de la Consciencia — Goddard', topicId: 't11b' },
      { id: 'gr6d', txt: 'Escribir 45 registros iniciáticos', type: 'registros', n: 45 }
    ]
  },
  {
    id: 'g7', num: 'Grado VII', title: 'Gran Maestro · El Iniciado', icon: '👑',
    desc: 'La transmutación está completa. Su mente crea deliberadamente, su carácter sostiene cualquier adversidad y su comprensión del universo es operativa. El caballero, el filósofo y el creador en una sola persona.',
    reqs: [
      { id: 'gr7a', txt: 'Completar los 24 exponentes del Nuevo Pensamiento' },
      { id: 'gr7b', txt: 'Completar todos los exponentes del Estoicismo' },
      { id: 'gr7c', txt: '365 días de práctica documentada del ritual diario', type: 'ritual', dias: 365 },
      { id: 'gr7d', txt: 'Escribir 70 registros iniciáticos', type: 'registros', n: 70 }
    ]
  }
];

// ── HÁBITOS ──────────────────────────────────────────────────────────────────
export const HABITS_DATA = [
  { id: 'lectura',       icon: '📖', name: 'Lectura del Códice',    desc: 'Leer al menos 20 minutos del plan sagrado' },
  { id: 'meditacion',    icon: '🧘', name: 'Contemplatio',          desc: 'Práctica de meditación o contemplación profunda' },
  { id: 'afirmaciones',  icon: '🗣️', name: 'Decretos Verbales',     desc: '21 repeticiones del decreto principal' },
  { id: 'visualizacion', icon: '👁️', name: 'Visión Interior',       desc: '15 minutos de visualización creativa' },
  { id: 'diario',        icon: '✒️', name: 'Registro del Adepto',   desc: 'Escribir el insight iniciático del día' }
];

// ── PROMPTS DEL DIARIO INICIÁTICO ─────────────────────────────────────────────
export const DIARIO_PROMPTS = [
  '¿Qué concepto del Códice de hoy resonó más profundamente en mi ser?',
  '¿Qué patrón de pensamiento observo que deseo transmutar?',
  '¿Qué decreto practicaré esta semana y cuál es su significado para mí?',
  '¿En qué área de mi vida percibo la mayor transformación?',
  '¿Cómo se manifiesta hoy el principio de "como es adentro, es afuera"?',
  '¿Qué haría diferente el Raúl que ya logró la visión que busca?',
  '¿Qué creencia de escasez o limitación disuelvo hoy con la Verdad?',
  '¿Cómo aplica lo que estudio a mi camino hacia la abundancia y el propósito?',
  '¿Qué reconocimiento espiritual quiero declarar como decreto hoy?',
  '¿Por qué expresión de gratitud profunda quiero dar gracias en este momento?'
];
