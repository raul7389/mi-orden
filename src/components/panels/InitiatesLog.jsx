/**
 * InitiatesLog — El Registro del Iniciado (Diario)
 */
import React, { useState } from 'react';
import { DIARIO_PROMPTS } from '../../data/lore.js';
import styles from './InitiatesLog.module.css';

const MOODS = [
  { v:'🌟', l:'Elevado' }, { v:'🌊', l:'En flujo' },
  { v:'🕯️', l:'Sereno'  }, { v:'🌱', l:'Creciendo' }
];

export function InitiatesLog({ codex }) {
  const { state, saveEntry, deleteEntry } = codex;
  const [text, setText] = useState('');
  const [prompt, setPrompt] = useState(DIARIO_PROMPTS[0]);
  const [mood, setMood] = useState('🕯️');

  const handle = () => { saveEntry(text, prompt, mood); setText(''); };

  const now = new Date();
  const dateStr = now.toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const streak = (() => {
    let s = 0; const d = new Date();
    const keys = new Set(state.diario.map(e => new Date(e.date).toISOString().slice(0,10)));
    while(s < 366){ const k=d.toISOString().slice(0,10); if(keys.has(k)){s++;d.setDate(d.getDate()-1);}else break; }
    return s;
  })();

  const weekCount = state.diario.filter(e => new Date(e.date) > new Date(Date.now()-7*86400000)).length;

  return (
    <div className={styles.log}>
      <div className={styles.header}>
        <p className={styles.eye}>Inscribe tus revelaciones</p>
        <h1 className={styles.title}>Registro del <em>Iniciado</em></h1>
      </div>
      <div className={styles.layout}>
        <div>
          <div className={styles.entryCard}>
            <p className={styles.dateLabel}>{dateStr}</p>
            <p className={styles.fieldLabel}>Pregunta guía</p>
            <select className={styles.promptSel} value={prompt} onChange={e => setPrompt(e.target.value)}>
              {DIARIO_PROMPTS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <p className={styles.fieldLabel}>Mi reflexión de hoy</p>
            <textarea className={styles.textarea} value={text} onChange={e => setText(e.target.value)}
              placeholder="Escribe tu insight del día, una revelación, una transformación observada..." rows={5} />
            <div className={styles.entryMeta}>
              <span className={styles.moodLabel}>Estado</span>
              <div className={styles.moodRow}>
                {MOODS.map(m => (
                  <button key={m.v} className={`${styles.moodBtn} ${mood===m.v?styles.moodActive:''}`}
                    onClick={() => setMood(m.v)}>{m.v} {m.l}</button>
                ))}
              </div>
              <button className={styles.saveBtn} onClick={handle}>Inscribir</button>
            </div>
          </div>

          <div className={styles.entriesList}>
            {state.diario.length === 0
              ? <div className={styles.empty}>El registro está en blanco. La primera entrada es la más importante.</div>
              : state.diario.map((e, i) => (
                <div key={i} className={styles.entry}>
                  <div className={styles.entryHead}>
                    <div>
                      <span className={styles.entryDate}>{e.dateStr}</span>
                      <span className={styles.entryPrompt}>{e.prompt}</span>
                    </div>
                    <div className={styles.entryRight}>
                      <span>{e.mood}</span>
                      <button className={styles.delBtn} onClick={() => deleteEntry(i)}>✕</button>
                    </div>
                  </div>
                  <p className={styles.entryText}>{e.text}</p>
                </div>
              ))
            }
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <p className={styles.sideTitle}>Llama viva</p>
            <div className={styles.streakNum}>{streak}</div>
            <div className={styles.streakLbl}>días consecutivos</div>
          </div>
          <div className={styles.sideCard}>
            <p className={styles.sideTitle}>Preguntas rápidas</p>
            <ul className={styles.quickList}>
              {DIARIO_PROMPTS.slice(0,6).map(p => (
                <li key={p} onClick={() => setPrompt(p)}>{p}</li>
              ))}
            </ul>
          </div>
          <div className={styles.sideCard}>
            <p className={styles.sideTitle}>El Registro</p>
            <div className={styles.statsGrid}>
              <div className={styles.stat}><span className={styles.statN}>{state.diario.length}</span><span className={styles.statL}>Entradas</span></div>
              <div className={styles.stat}><span className={styles.statN}>{weekCount}</span><span className={styles.statL}>Esta semana</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
