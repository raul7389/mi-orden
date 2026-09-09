/**
 * MiOrden — La Orden Personal · Ordo Mentis Aureae
 * Los 7 grados iniciáticos · Ritual diario · Registro
 */
import React, { useState, useMemo } from 'react';
import { GRADOS_DATA } from '../../data/lore.js';
import styles from './MiOrden.module.css';

function calcRacha(habitos) {
  let s = 0; const d = new Date();
  while(s < 366){ const k=d.toISOString().slice(0,10); const day=habitos[k]||{}; if(Object.values(day).some(Boolean)){s++;d.setDate(d.getDate()-1);}else break; }
  return s;
}

const INIT_TYPES = ['💡 Revelación','⚔️ Victoria interior','🏔️ Obstáculo vencido','🔮 Insight filosófico','🌙 Sueño o visión','💎 Gratitud profunda'];

export function MiOrden({ codex }) {
  const { state, completeGrado, saveInitEntry, deleteInitEntry } = codex;
  const [tab, setTab] = useState('grados');
  const [initText, setInitText] = useState('');
  const [initType, setInitType] = useState(INIT_TYPES[0]);

  const racha = calcRacha(state.habitos);
  const regCount = (state.initEntries||[]).length;
  const gradosDone = Object.keys(state.gradosDone||{}).filter(k=>state.gradosDone[k]).length;

  const checkReq = (req) => {
    if (req.topicId)     return !!state.done[req.topicId];
    if (req.type === 'registros') return regCount >= req.n;
    if (req.type === 'ritual')    return racha >= req.dias;
    return !!state.gradosDone?.[req.id];
  };

  const canComplete = (grado) => {
    if (state.gradosDone?.[grado.id]) return false;
    return grado.reqs.every(checkReq);
  };

  const isUnlocked = (grado, idx) => idx === 0 || !!state.gradosDone?.['g'+idx];

  // Progress rings
  const pctGrados   = Math.round((gradosDone / GRADOS_DATA.length) * 100);
  const pctRacha    = Math.min(Math.round(racha / 30 * 100), 100);
  const pctRegistros= Math.min(Math.round(regCount / 70 * 100), 100);

  function Ring({ pct, val, lbl }) {
    const r = 27; const circ = 2*Math.PI*r; const offset = circ - circ*pct/100;
    return (
      <div className={styles.ring}>
        <svg width="64" height="64" viewBox="0 0 64 64" style={{transform:'rotate(-90deg)'}}>
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(200,168,74,.08)" strokeWidth="3"/>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#c8a84a" strokeWidth="3"
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
            style={{transition:'stroke-dashoffset .8s ease'}}/>
        </svg>
        <div className={styles.ringCenter}><span className={styles.ringVal}>{val}</span></div>
        <span className={styles.ringLbl}>{lbl}</span>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>

      {/* HERO */}
      <div className={styles.hero}>
        <span className={styles.heroSymbol}>⚔️</span>
        <h1 className={styles.heroTitle}>Ordo <em>Mentis Aureae</em></h1>
        <p className={styles.heroMotto}>"La mente domada forja la realidad · El carácter es el destino"</p>
        <div className={styles.rings}>
          <Ring pct={pctGrados}    val={`${gradosDone}/7`} lbl="Grados" />
          <Ring pct={pctRacha}     val={racha}              lbl="Días ritual" />
          <Ring pct={pctRegistros} val={regCount}           lbl="Registros" />
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab==='grados'?styles.tabActive:''}`}    onClick={() => setTab('grados')}>⚔️ Los 7 Grados</button>
          <button className={`${styles.tab} ${tab==='ritual'?styles.tabActive:''}`}    onClick={() => setTab('ritual')}>🕯️ Ritual Diario</button>
          <button className={`${styles.tab} ${tab==='registro'?styles.tabActive:''}`}  onClick={() => setTab('registro')}>📜 Registro</button>
        </div>

        {/* ── GRADOS ── */}
        {tab === 'grados' && (
          <div>
            <p className={styles.introText}>Cada grado integra las tres tradiciones: Nuevo Pensamiento como motor creativo, Estoicismo como ancla de carácter, y Filosofía Hermética como marco sagrado. No se avanza hasta dominar el grado anterior.</p>
            <div className={styles.gradoTrack}>
              {GRADOS_DATA.map((g, i) => {
                const done = !!state.gradosDone?.[g.id];
                const unlocked = isUnlocked(g, i);
                const can = canComplete(g);
                return (
                  <div key={g.id} className={`${styles.gradoItem} ${done?styles.gradoDone:unlocked?styles.gradoUnlocked:''}`}>
                    <div className={styles.gradoDot}>{g.icon}</div>
                    <div className={styles.gradoBody}>
                      <p className={styles.gradoNum}>{g.num}</p>
                      <p className={styles.gradoTitle}>{g.title}</p>
                      <p className={styles.gradoDesc}>{g.desc}</p>
                      <div className={styles.gradoReqs}>
                        {g.reqs.map(r => (
                          <div key={r.id} className={`${styles.gradoReq} ${checkReq(r)?styles.gradoReqDone:''}`}>
                            <span className={styles.gradoReqDot}/>
                            <span>{r.txt}</span>
                          </div>
                        ))}
                      </div>
                      {can && <button className={styles.completeBtn} onClick={() => completeGrado(g.id)}>✦ Completar este grado</button>}
                      {done && <div className={styles.completedBadge}>✓ Grado completado</div>}
                      {!done && !unlocked && <p className={styles.lockedNote}>Completa el grado anterior primero.</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── RITUAL ── */}
        {tab === 'ritual' && (
          <div className={styles.ritualGrid}>
            {[
              {icon:'🌅',title:'El Alba — Activación (15–20 min)',steps:[
                {n:'I',txt:'Silencio y presencia (2 min). Antes de mirar el teléfono. Siéntate. Respira. Recuerda quién eres y para qué estás aquí.'},
                {n:'II',txt:'Premeditación estoica (3 min). ¿Qué podría ser difícil hoy? ¿Qué depende de mí? ¿Qué no? Prepárate sin temer.'},
                {n:'III',txt:'Afirmación y estado del ser (5 min). Adopta la identidad de quien ya logró lo que buscas. Siente, no pienses. Repite tu decreto ×21.'},
                {n:'IV',txt:'Visualización (5 min). Construye la escena que implica que tu visión ya es real. Siente la emoción del ya cumplido.'},
                {n:'V',txt:'Intención del día (2 min). Una virtud templaria para hoy. Una acción concreta hacia tu propósito.'},
              ]},
              {icon:'⚡',title:'En Campo — El Guerrero',steps:[
                {n:'I',txt:'Ante cada obstáculo. Pausa. Pregunta: ¿esto depende de mí? Si sí, actúa con tu mejor virtud. Si no, acepta y sigue.'},
                {n:'II',txt:'Ante cada persona difícil. Nadie puede perturbarte sin tu consentimiento. Tu estado interior es tu responsabilidad.'},
                {n:'III',txt:'El pivote: "El obstáculo para la acción avanza la acción. Lo que se interpone en el camino se convierte en el camino."'},
              ]},
              {icon:'🌙',title:'El Crepúsculo — Integración (10–15 min)',steps:[
                {n:'I',txt:'Examen nocturno estoico (5 min). ¿Qué hice bien? ¿Qué hice mal? ¿Qué haré diferente mañana? Solo observación.'},
                {n:'II',txt:'Gratitud iniciática (3 min). Tres cosas concretas y sentidas. La gratitud es la frecuencia más alta.'},
                {n:'III',txt:'Programación pre-sueño (5 min). En el estado hipnagógico, imprime en el subconsciente tu estado del ser deseado.'},
                {n:'IV',txt:'Registro iniciático (2 min). Una línea en el diario. Un insight, una victoria interior, una revelación.'},
              ]},
            ].map(card => (
              <div key={card.title} className={styles.ritualCard}>
                <p className={styles.ritualTime}>{card.icon} {card.title}</p>
                <div className={styles.ritualSteps}>
                  {card.steps.map(s => (
                    <div key={s.n} className={styles.ritualStep}>
                      <span className={styles.ritualN}>{s.n}</span>
                      <span className={styles.ritualTxt}><strong>{s.txt.split('.')[0]}.</strong>{s.txt.slice(s.txt.indexOf('.')+1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── REGISTRO ── */}
        {tab === 'registro' && (
          <>
            <p className={styles.introText}>El caballero iniciado documenta su camino. Cada entrada es evidencia de su transformación. Este registro es privado, personal e irrepetible.</p>
            <div className={styles.initEntryCard}>
              <p className={styles.initDateLbl}>{new Date().toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
              <div className={styles.typeRow}>
                {INIT_TYPES.map(t => (
                  <button key={t} className={`${styles.typeBtn} ${initType===t?styles.typeBtnActive:''}`} onClick={() => setInitType(t)}>{t}</button>
                ))}
              </div>
              <textarea className={styles.initTa} value={initText} onChange={e=>setInitText(e.target.value)}
                placeholder="Escribe tu registro iniciático de hoy. Una revelación, una victoria interior, un insight que no quieres olvidar..." rows={4}/>
              <button className={styles.saveBtn} onClick={() => { saveInitEntry(initText, initType); setInitText(''); }}>Guardar en el Registro</button>
            </div>
            <p className={styles.initListLabel}>Registros anteriores</p>
            <div className={styles.initList}>
              {(state.initEntries||[]).length === 0
                ? <div className={styles.empty}>Tu registro está vacío. La primera entrada es el primer paso del camino.</div>
                : (state.initEntries||[]).map((e,i) => (
                  <div key={i} className={styles.initItem}>
                    <div className={styles.initHead}>
                      <div style={{display:'flex',gap:'.5rem',alignItems:'center',flexWrap:'wrap'}}>
                        <span className={styles.initDate}>{e.dateStr}</span>
                        <span className={styles.initType}>{e.type}</span>
                      </div>
                      <button className={styles.initDel} onClick={() => deleteInitEntry(i)}>✕</button>
                    </div>
                    <p className={styles.initText}>{e.text}</p>
                  </div>
                ))
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
}
