/**
 * SacredDecrees — Decretos Sagrados (Afirmaciones + Memofichas)
 */
import React, { useState } from 'react';
import styles from './SacredDecrees.module.css';

const CAT_ICONS = {prosperidad:'💰',salud:'💚',amor:'❤️',trabajo:'🔑',espiritual:'✨'};

const CARDS = [
  {era:'clasicos',author:'James Allen',obra:'Como el Hombre Piensa',front:'¿Cuál es la analogía central del libro de Allen?',back:'La mente es como un jardín: el pensamiento habitual es la semilla. Lo que cultivas con constancia es lo que crece y da fruto en tu vida.'},
  {era:'clasicos',author:'Neville Goddard',obra:'El Sentir es el Secreto',front:'¿Por qué el SENTIMIENTO es la clave de la manifestación?',back:'El subconsciente no distingue entre experiencia real y vivida imaginada. Lo que se siente como ya verdadero, el subconsciente lo acepta y lo ejecuta como orden.'},
  {era:'clasicos',author:'Joseph Murphy',obra:'El Poder del Subconsciente',front:'¿Cuándo es más efectivo programar el subconsciente?',back:'En el estado hipnagógico entre vigilia y sueño, la mente consciente cede y el subconsciente es totalmente receptivo. Es el momento óptimo para afirmaciones e imágenes.'},
  {era:'clasicos',author:'Ernest Holmes',obra:'La Ciencia de la Mente',front:'¿Cuáles son los 5 pasos del Tratamiento Espiritual?',back:'1. Reconocimiento de la Inteligencia Infinita. 2. Unificación con ella. 3. Realización del bien como hecho ya existente. 4. Gratitud. 5. Liberación con plena confianza.'},
  {era:'clasicos',author:'Napoleon Hill',obra:'Piense y Hágase Rico',front:'¿Qué es el "deseo ardiente" según Napoleon Hill?',back:'No un simple deseo sino una obsesión definitiva: un objetivo específico, una cifra exacta, una fecha determinada y un plan de acción concreto. Sin esto no hay punto de partida.'},
  {era:'clasicos',author:'Florence Scovel Shinn',obra:'El Juego de la Vida',front:'¿Qué quiere decir Shinn con que "las palabras son vibraciones"?',back:'Cada palabra pronunciada con emoción y convicción crea una onda que se manifiesta. Hablar desde el bien deseado como ya real activa la ley creativa.'},
  {era:'clasicos',author:'Catherine Ponder',obra:'Leyes Dinámicas de la Prosperidad',front:'¿Por qué Ponder dice que dar activa la prosperidad?',back:'El dinero es energía en circulación. Retenerlo lo estanca. Darlo con fe y alegría activa la ley de circulación, que devuelve multiplicado lo que fue enviado con amor.'},
  {era:'clasicos',author:'Wallace Wattles',obra:'La Ciencia de Hacerse Rico',front:'¿Cuál es la diferencia entre competir y crear según Wattles?',back:'Competir opera desde la escasez. Crear opera desde la abundancia infinita: añadir nuevo valor al mundo. El creador no necesita quitar a nadie.'},
  {era:'clasicos',author:'Thomas Troward',obra:'Conferencias de Edimburgo',front:'¿Cuál es la ley de la correspondencia según Troward?',back:'El mundo exterior es un espejo exacto del mundo interior habitual. No es metáfora: es una ley precisa. Cambiar el patrón mental cambia las circunstancias.'},
  {era:'fundadores',author:'Phineas Quimby',obra:'Manuscritos',front:'¿Cuál fue el descubrimiento fundamental de Quimby?',back:'La enfermedad tiene su origen en creencias mentales erróneas. Corregir la creencia — no el síntoma — produce la sanación real y duradera.'},
  {era:'clasicos',author:'William Walker Atkinson',obra:'La Ley de la Atracción',front:'¿Qué es la "vibración del pensamiento" según Atkinson?',back:'El pensamiento emite frecuencias reales que atraen pensamientos, personas y circunstancias de vibración similar. Como un diapasón, sintoniza con lo que habitualmente piensa.'},
  {era:'clasicos',author:'Harvey Spencer Lewis',obra:'Rosicrucian Q&A',front:'¿Qué es la "alquimia mental" según Lewis?',back:'La transmutación del plomo de la ignorancia en el oro de la sabiduría. Es el proceso de reprogramar la mente subconsciente y elevar la consciencia hasta sintonizarse con la Mente Cósmica Universal.'},
];

const PRESETS = [
  {text:'Soy un imán para la abundancia. El dinero fluye hacia mí de formas esperadas e inesperadas.',cat:'prosperidad'},
  {text:'Soy uno con la Inteligencia Infinita que me guía hacia mi mayor bien.',cat:'espiritual'},
  {text:'Mi mente es un canal abierto para ideas creativas y soluciones perfectas.',cat:'trabajo'},
  {text:'Cada día y en todos los sentidos voy mejorando más y más.',cat:'salud'},
];

export function SacredDecrees({ codex }) {
  const { state, addAfirmacion, deleteAfirmacion, incrementRep } = codex;
  const [tab, setTab] = useState('decretos');
  const [sel, setSel] = useState(null);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [cat, setCat] = useState('prosperidad');
  const [fcIdx, setFcIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filter, setFilter] = useState('all');

  // Init presets if empty
  const afirm = state.afirm.length === 0 ? PRESETS : state.afirm;

  const selectAfirm = (idx) => { setSel(idx); setCount(0); };
  const rep = () => {
    if (sel === null || count >= 21) return;
    setCount(c => c + 1);
    incrementRep(sel);
    if (count + 1 === 21) setTimeout(() => setCount(0), 1500);
  };

  const filtered = filter === 'all' ? CARDS : CARDS.filter(c => c.era === filter);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>Las palabras que crean la realidad</p>
        <h1 className={styles.title}><em>Decretos</em> Sagrados</h1>
      </div>
      <div className={styles.inner}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab==='decretos'?styles.tabActive:''}`} onClick={() => setTab('decretos')}>Mis Decretos</button>
          <button className={`${styles.tab} ${tab==='fichas'?styles.tabActive:''}`} onClick={() => setTab('fichas')}>Memofichas</button>
        </div>

        {tab === 'decretos' && (
          <>
            {/* Práctica */}
            <div className={styles.practiceCard}>
              <p className={styles.practiceText}>{sel !== null ? afirm[sel]?.text : 'Selecciona un decreto para practicarlo'}</p>
              <div className={styles.counter}>{count >= 21 ? '✦' : count}</div>
              <p className={styles.counterLbl}>de 21 repeticiones</p>
              <div className={styles.dots}>
                {[...Array(21)].map((_,i) => <div key={i} className={`${styles.dot} ${i<count?styles.dotFilled:''}`}/>)}
              </div>
              <div className={styles.pBtns}>
                <button className={`${styles.pBtn} ${styles.pBtnPrimary}`} onClick={rep}>+ Repetición</button>
                <button className={styles.pBtn} onClick={() => setCount(0)}>Reiniciar</button>
              </div>
            </div>

            {/* Añadir decreto */}
            <div className={styles.addCard}>
              <p className={styles.addLabel}>Inscribir nuevo decreto</p>
              <div className={styles.addRow}>
                <input className={styles.addInp} value={text} onChange={e=>setText(e.target.value)}
                  placeholder="Escribe tu decreto en tiempo presente: Yo soy, Yo tengo, Yo recibo..."/>
                <select className={styles.addCat} value={cat} onChange={e=>setCat(e.target.value)}>
                  {Object.entries(CAT_ICONS).map(([k,v]) => <option key={k} value={k}>{v} {k}</option>)}
                </select>
              </div>
              <button className={styles.saveBtn} onClick={() => { addAfirmacion(text,cat); setText(''); }}>Inscribir</button>
            </div>

            {/* Lista */}
            <div className={styles.afirmList}>
              {afirm.map((a, i) => (
                <div key={i} className={`${styles.afirmItem} ${sel===i?styles.afirmSel:''}`} onClick={() => selectAfirm(i)}>
                  <span>{CAT_ICONS[a.cat]||'✨'}</span>
                  <span className={styles.afirmText}>{a.text}</span>
                  <span className={styles.afirmReps}>{a.reps||0} rep.</span>
                  <button className={styles.afirmDel} onClick={e => {e.stopPropagation();deleteAfirmacion(i);}}>✕</button>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'fichas' && (
          <>
            <div className={styles.fcFilter}>
              {[{v:'all',l:'Todos'},{v:'fundadores',l:'Fundadores'},{v:'clasicos',l:'Clásicos'},{v:'contemporaneos',l:'Contemp.'}].map(f => (
                <button key={f.v} className={`${styles.fcBtn} ${filter===f.v?styles.fcBtnActive:''}`} onClick={() => {setFilter(f.v);setFcIdx(0);setFlipped(false);}}>{f.l}</button>
              ))}
            </div>
            <div className={styles.fcWrap} style={{perspective:'1000px'}}>
              <div className={styles.fc} style={{transform:flipped?'rotateY(180deg)':'',transformStyle:'preserve-3d',transition:'transform .45s ease',cursor:'pointer',position:'relative',minHeight:'200px'}} onClick={() => setFlipped(f=>!f)}>
                <div className={`${styles.fcFace} ${styles.fcFront}`}>
                  <p className={styles.fcAuthor}>{filtered[fcIdx]?.author}</p>
                  <p className={styles.fcObra}>{filtered[fcIdx]?.obra}</p>
                  <p className={styles.fcContent}>{filtered[fcIdx]?.front}</p>
                  <p className={styles.fcHint}>Toca para ver la respuesta</p>
                </div>
                <div className={`${styles.fcFace} ${styles.fcBack}`} style={{transform:'rotateY(180deg)'}}>
                  <p className={styles.fcAuthor}>{filtered[fcIdx]?.author}</p>
                  <p className={styles.fcContent}>{filtered[fcIdx]?.back}</p>
                </div>
              </div>
            </div>
            <div className={styles.fcNav}>
              <button className={styles.fcNavBtn} onClick={() => {setFcIdx(i=>(i-1+filtered.length)%filtered.length);setFlipped(false);}}>← Anterior</button>
              <span className={styles.fcCtr}>{fcIdx+1} / {filtered.length}</span>
              <button className={styles.fcNavBtn} onClick={() => {setFcIdx(i=>(i+1)%filtered.length);setFlipped(false);}}>Siguiente →</button>
            </div>
            <div style={{textAlign:'center',marginBottom:'1rem'}}>
              <button className={styles.fcNavBtn} onClick={() => {const s=[...filtered].sort(()=>Math.random()-.5);setFcIdx(0);setFlipped(false);}}>🔀 Aleatorio</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
