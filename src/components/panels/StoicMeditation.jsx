/**
 * StoicMeditation — Contemplatio
 * Temporizador de meditación con guías arcanas.
 */
import React, { useState, useRef, useEffect } from 'react';
import { MED_GUIDES } from '../../data/lore.js';
import styles from './StoicMeditation.module.css';

const PRESETS = [
  {min:5,lbl:'Básica'},{min:10,lbl:'Fase I'},{min:15,lbl:'Fase II'},
  {min:20,lbl:'Fase III'},{min:30,lbl:'Fase IV'},{min:45,lbl:'Avanzada'}
];
const CIRC = 659;

function playBell() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(528, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 2);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 3);
  } catch(e) {}
}

export function StoicMeditation({ codex }) {
  const { state, saveSession } = codex;
  const [total, setTotal] = useState(600);
  const [remaining, setRemaining] = useState(600);
  const [running, setRunning] = useState(false);
  const [guideKey, setGuideKey] = useState('reconocimiento');
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null);
  const stepRef = useRef(null);

  const guide = MED_GUIDES[guideKey];
  const pct = remaining / total;
  const arcOffset = CIRC * (1 - pct);
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;

  const setTime = (min) => {
    if (running) return;
    const t = min * 60;
    setTotal(t); setRemaining(t);
  };

  const start = () => {
    setRunning(true); playBell();
    const stepTime = Math.floor((total / guide.steps.length) * 1000);
    setStep(0);
    stepRef.current = setInterval(() => setStep(p => Math.min(p + 1, guide.steps.length - 1)), stepTime);
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current); clearInterval(stepRef.current);
          setRunning(false); playBell(); setTimeout(playBell, 1000);
          saveSession(guide.title, Math.round(total / 60));
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const pause = () => {
    setRunning(false);
    clearInterval(intervalRef.current); clearInterval(stepRef.current);
  };

  const reset = () => {
    pause(); setRemaining(total); setStep(0);
  };

  useEffect(() => () => { clearInterval(intervalRef.current); clearInterval(stepRef.current); }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>Silencio y contemplación</p>
        <h1 className={styles.title}><em>Contemplatio</em></h1>
      </div>
      <div className={styles.center}>
        <div className={styles.presets}>
          {PRESETS.map(p => (
            <button key={p.min} className={`${styles.preset} ${total===p.min*60?styles.presetActive:''}`}
              onClick={() => setTime(p.min)}>
              <span className={styles.presetMin}>{p.min}</span>
              <span className={styles.presetLbl}>{p.lbl}</span>
            </button>
          ))}
        </div>

        <select className={styles.guideSel} value={guideKey} onChange={e => setGuideKey(e.target.value)} disabled={running}>
          {Object.entries(MED_GUIDES).map(([k,g]) => <option key={k} value={k}>{g.title}</option>)}
        </select>

        <div className={styles.timerWrap}>
          <svg width="220" height="220" viewBox="0 0 220 220" style={{transform:'rotate(-90deg)'}}>
            <circle cx="110" cy="110" r="105" fill="none" stroke="rgba(200,168,74,.07)" strokeWidth="4"/>
            <circle cx="110" cy="110" r="105" fill="none" stroke="#c8a84a" strokeWidth="4"
              strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={arcOffset}
              style={{transition:'stroke-dashoffset .5s linear'}}/>
          </svg>
          <div className={styles.timerCenter}>
            <div className={styles.timerDisplay}>{m}:{s.toString().padStart(2,'0')}</div>
            <div className={styles.timerPhase}>{running ? guide.steps[step]?.slice(0,28)+'…' : 'Listo'}</div>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={`${styles.ctrl} ${styles.ctrlPrimary}`} onClick={running ? pause : start}>
            {running ? '⏸ Pausar' : '▶ Iniciar'}
          </button>
          <button className={styles.ctrl} onClick={reset}>↺ Reiniciar</button>
        </div>

        <div className={styles.guideBox}>
          <p className={styles.guideTitle}>{guide.title} — Paso {step+1}/{guide.steps.length}</p>
          <p className={styles.guideText}>{guide.steps[step]}</p>
        </div>

        {state.sessions.length > 0 && (
          <div className={styles.sessionsCard}>
            <p className={styles.sessionsTitle}>Sesiones recientes</p>
            {state.sessions.slice(0,5).map((s,i) => (
              <div key={i} className={styles.sessItem}>
                <span>{s.guide}</span><span>{s.min} min · {s.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
