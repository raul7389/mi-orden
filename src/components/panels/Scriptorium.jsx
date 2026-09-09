/**
 * Scriptorium — La Biblioteca de Links
 * Acceso directo a todos los textos por fase.
 */
import React, { useState } from 'react';
import styles from './Scriptorium.module.css';

const SECTIONS = [
  {
    title: 'Fase I — Los Fundamentos', eye: 'Empezar aquí',
    links: [
      { icon:'📜', name:'Metafísica al Alcance de Todos — Connie Méndez', note:'La más importante en español · leer primero', href:'https://archive.org/details/metafisica-al-alcance-de-todos-connie-mendez', badge:'Gratis' },
      { icon:'🎧', name:'Metafísica al Alcance de Todos — Audiolibro', note:'YouTube · español completo', href:'https://www.youtube.com/results?search_query=metafisica+al+alcance+de+todos+connie+mendez+audiolibro+completo', badge:'Audio' },
      { icon:'📜', name:'El Maravilloso Número 7 — Connie Méndez', note:'Los 7 principios metafísicos', href:'https://archive.org/details/el-maravilloso-numero-7-connie-mendez', badge:'Gratis' },
      { icon:'📜', name:'Como el Hombre Piensa — James Allen', note:'El texto más breve y esencial · dominio público', href:'https://www.gutenberg.org/ebooks/4507', badge:'Gratis' },
      { icon:'📜', name:'La Ciencia de Hacerse Rico — Wattles', note:'Base filosófica de la prosperidad', href:'https://www.gutenberg.org/ebooks/1632', badge:'Gratis' },
      { icon:'📜', name:'El Sistema de la Llave Maestra — Haanel', note:'24 semanas de entrenamiento mental progresivo', href:'https://archive.org/details/the-master-key-system-charles-haanel', badge:'Gratis' },
      { icon:'📜', name:'La Ciencia de la Mente — Ernest Holmes', note:'La enciclopedia del movimiento', href:'https://archive.org/details/scienceofmind00holm', badge:'Gratis' },
    ]
  },
  {
    title: 'Fase II — Dominio Mental', eye: 'El subconsciente y la manifestación',
    links: [
      { icon:'📜', name:'El Poder del Subconsciente — Joseph Murphy', note:'El más leído en español · punto de entrada ideal', href:'https://archive.org/details/the-power-of-your-subconscious-mind-joseph-murphy', badge:'Gratis' },
      { icon:'🎧', name:'El Poder del Subconsciente — Audiolibro', note:'YouTube · español completo', href:'https://www.youtube.com/results?search_query=poder+subconsciente+joseph+murphy+audiolibro+espanol+completo', badge:'Audio' },
      { icon:'📜', name:'El Sentir es el Secreto — Neville Goddard', note:'La emoción como clave de la manifestación', href:'https://archive.org/details/feeling-is-the-secret-neville-goddard', badge:'Gratis' },
      { icon:'📜', name:'El Juego de la Vida — Florence Scovel Shinn', note:'Tratamientos prácticos · afirmaciones y decretos', href:'https://www.gutenberg.org/ebooks/23297', badge:'Gratis' },
      { icon:'📜', name:'Piense y Hágase Rico — Napoleon Hill', note:'El puente más directo hacia la riqueza material', href:'https://archive.org/details/think-and-grow-rich-napoleon-hill_202101', badge:'Gratis' },
      { icon:'🎧', name:'Piense y Hágase Rico — Audiolibro', note:'YouTube · español completo', href:'https://www.youtube.com/results?search_query=piense+hagase+rico+napoleon+hill+audiolibro+espanol+completo', badge:'Audio' },
      { icon:'📜', name:'El Sermón del Monte — Emmet Fox', note:'Metafísica cristiana · compatible con Martinismo', href:'https://archive.org/details/the-sermon-on-the-mount-emmet-fox', badge:'Gratis' },
    ]
  },
  {
    title: 'Fase III — Profundización Filosófica', eye: 'Hermetismo y filosofía',
    links: [
      { icon:'📜', name:'El Kybalion — Los Tres Iniciados', note:'Los 7 principios herméticos · compatible con AMORC', href:'https://www.gutenberg.org/ebooks/14209', badge:'Gratis' },
      { icon:'🎧', name:'El Kybalion — Audiolibro español', note:'YouTube · completo', href:'https://www.youtube.com/results?search_query=el+kybalion+audiolibro+espanol+completo+7+principios', badge:'Audio' },
      { icon:'📜', name:'Conferencias de Edimburgo — Thomas Troward', note:'El fundamento filosófico más profundo del movimiento', href:'https://archive.org/details/edinburgh-lectures-on-mental-science-thomas-troward', badge:'Gratis' },
      { icon:'📜', name:'El Poder de la Consciencia — Neville Goddard', note:'El estado mental como causa absoluta', href:'https://archive.org/details/neville-goddard-the-power-of-awareness', badge:'Gratis' },
      { icon:'📜', name:'Usted Puede Sanar Su Vida — Louise Hay', note:'El libro más vendido del movimiento moderno', href:'https://archive.org/details/you-can-heal-your-life-louise-hay', badge:'Gratis' },
    ]
  },
  {
    title: 'Fases IV–V — Práctica Avanzada', eye: 'Integración y dominio',
    links: [
      { icon:'📜', name:'La Ley y la Promesa — Neville Goddard', note:'Casos reales de manifestación documentados', href:'https://archive.org/details/the-law-and-the-promise-neville-goddard', badge:'Gratis' },
      { icon:'📜', name:'Leyes Dinámicas de la Prosperidad — Catherine Ponder', note:'El texto más completo sobre prosperidad consciente', href:'https://archive.org/details/the-dynamic-laws-of-prosperity-catherine-ponder', badge:'Gratis' },
      { icon:'🌐', name:'Rompiendo el Hábito — Joe Dispenza', note:'Neurociencia y Nuevo Pensamiento · sitio oficial', href:'https://drjoedispenza.com/collections/books', badge:'Oficial' },
      { icon:'🌐', name:'La Biología de la Creencia — Bruce Lipton', note:'Validación científica de la programación mental', href:'https://www.brucelipton.com/books', badge:'Oficial' },
      { icon:'🌐', name:'La Matriz Divina — Gregg Braden', note:'Ciencia y espiritualidad integradas', href:'https://greggbraden.com/books', badge:'Oficial' },
    ]
  },
  {
    title: 'William Walker Atkinson y Harvey Spencer Lewis', eye: 'Los dos nuevos iniciados',
    links: [
      { icon:'📜', name:'La Ley de la Atracción (1906) — W.W. Atkinson', note:'El primer libro en usar el término · origen histórico', href:'https://archive.org/details/thought-vibration-or-the-law-of-attraction-in-the-thought-world', badge:'Gratis' },
      { icon:'📜', name:'Obras completas de Atkinson — Archive.org', note:'Más de 100 libros · todos gratuitos', href:'https://archive.org/search?query=william+walker+atkinson', badge:'Gratis' },
      { icon:'📜', name:'Yogi Ramacharaka (Atkinson) — Colección', note:'Raja Yoga, Hatha Yoga, Filosofía Oriental', href:'https://archive.org/search?query=yogi+ramacharaka', badge:'Gratis' },
      { icon:'📜', name:'Rosicrucian Q&A — Harvey Spencer Lewis', note:'Introducción completa a la filosofía rosacruista AMORC', href:'https://archive.org/details/rosicrucianquest00lewi', badge:'Gratis' },
      { icon:'🌹', name:'AMORC — Sitio oficial', note:'La organización que Lewis fundó en 1915', href:'https://www.amorc.org', badge:'Oficial' },
    ]
  },
  {
    title: 'Estoicismo — Textos Clásicos', eye: 'El Pórtico',
    links: [
      { icon:'📜', name:'Enquiridión — Epicteto', note:'El texto estoico más accesible · leer primero', href:'https://www.gutenberg.org/ebooks/45898', badge:'Gratis' },
      { icon:'📜', name:'Meditaciones — Marco Aurelio', note:'El diario espiritual más influyente de la historia', href:'https://www.gutenberg.org/ebooks/2680', badge:'Gratis' },
      { icon:'🎧', name:'Meditaciones — Audiolibro español', note:'YouTube · completo', href:'https://www.youtube.com/results?search_query=meditaciones+marco+aurelio+audiolibro+espanol+completo', badge:'Audio' },
      { icon:'📜', name:'Cartas a Lucilio — Séneca', note:'124 cartas sobre la vida buena', href:'https://www.gutenberg.org/ebooks/1793', badge:'Gratis' },
      { icon:'🌐', name:'Daily Stoic — Ryan Holiday', note:'El mejor sitio de estoicismo práctico · recursos gratuitos', href:'https://dailystoic.com', badge:'Web' },
    ]
  },
  {
    title: 'Repositorios Gratuitos', eye: 'Las fuentes primarias',
    links: [
      { icon:'🗄️', name:'Archive.org — New Thought', note:'Miles de textos gratuitos del movimiento', href:'https://archive.org/search?query=new+thought', badge:'Principal' },
      { icon:'📚', name:'Project Gutenberg — New Thought', note:'Todos los clásicos del dominio público', href:'https://www.gutenberg.org/ebooks/subject/2014', badge:'Gratis' },
      { icon:'🔮', name:'Sacred Texts — New Thought', note:'Hermetismo · mística · Nuevo Pensamiento', href:'https://www.sacred-texts.com/nth/index.htm', badge:'Gratis' },
      { icon:'📖', name:'New Thought Library', note:'Biblioteca dedicada exclusivamente al N.P.', href:'https://newthoughtlibrary.com', badge:'Gratis' },
      { icon:'📱', name:'Insight Timer — Meditación', note:'Miles de meditaciones en español · app gratuita', href:'https://insighttimer.com', badge:'App' },
    ]
  },
];

export function Scriptorium() {
  const [open, setOpen] = useState({ 0: true });
  const toggle = (i) => setOpen(o => ({ ...o, [i]: !o[i] }));

  return (
    <div className={styles.scriptorium}>
      <div className={styles.header}>
        <p className={styles.eye}>Acceso directo a los textos sagrados</p>
        <h1 className={styles.title}>El <em>Scriptorium</em></h1>
        <p className={styles.sub}>Todos los manuscritos del sistema, organizados por fase de estudio</p>
      </div>
      <div className={styles.wrap}>
        {SECTIONS.map((sec, i) => (
          <div key={i} className={styles.section}>
            <button className={styles.secHead} onClick={() => toggle(i)}>
              <div>
                <p className={styles.secEye}>{sec.eye}</p>
                <p className={styles.secTitle}>{sec.title}</p>
              </div>
              <span className={styles.secTog}>{open[i] ? '−' : '+'}</span>
            </button>
            {open[i] && (
              <div className={styles.linkList}>
                {sec.links.map((l, j) => (
                  <a key={j} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.lrow}>
                    <span className={styles.licon}>{l.icon}</span>
                    <div className={styles.lbody}>
                      <span className={styles.lname}>{l.name}</span>
                      <span className={styles.lnote}>{l.note}</span>
                    </div>
                    <span className={styles.lbadge}>{l.badge}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
