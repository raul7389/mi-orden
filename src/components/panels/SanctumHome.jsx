/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * SanctumHome — El Sanctum Principal
 * Dashboard inmersivo con anillos de progreso,
 * acceso a todos los paneles y plan semanal.
 * ─────────────────────────────────────────────
 */

import React, { useMemo } from 'react';
import { EXP_DATA, TOTAL_OBRAS, WEEK_PLAN, HABITS_DATA } from '../../data/lore.js';
import styles from './SanctumHome.module.css';

// ── Anillo de progreso SVG ────────────────────────────────────────────────────
function ProgressRing({ pct, label, value, size = 64 }) {
  const r = (size / 2) - 5;
  const circ = 2 * Math.PI * r;
  const offset = circ - (circ * Math.min(pct, 100) / 100);
  return (
    <div className={styles.ring}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(200,168,74,.08)" strokeWidth="3" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#c8a84a" strokeWidth="3"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset .8s ease' }} />
      </svg>
      <div className={styles.ringCenter}>
        <span className={styles.ringVal}>{value}</span>
      </div>
      <span className={styles.ringLabel}>{label}</span>
    </div>
  );
}

// ── Tarjeta de herramienta ────────────────────────────────────────────────────
function ToolCard({ icon, name, desc, onClick }) {
  return (
    <button className={styles.tool} onClick={onClick}>
      <span className={styles.toolIcon}>{icon}</span>
      <span className={styles.toolName}>{name}</span>
      <span className={styles.toolDesc}>{desc}</span>
      <span className={styles.toolArrow} aria-hidden>→</span>
    </button>
  );
}

// ── Panel principal ───────────────────────────────────────────────────────────
export function SanctumHome({ codex, onNavigate }) {
  const { state, obrasDone, habitsDoneToday, quizCorrect, calcRacha } = codex;

  const expDone = useMemo(
    () => EXP_DATA.filter(e => e.topics.every(t => state.done[t.id])).length,
    [state.done]
  );
  const racha = calcRacha();
  const pctObras = Math.round((obrasDone / TOTAL_OBRAS) * 100);
  const pctExp   = Math.round((expDone / EXP_DATA.length) * 100);
  const pctHab   = Math.round((habitsDoneToday / HABITS_DATA.length) * 100);
  const pctQuiz  = state.quiz && Object.keys(state.quiz).length > 0
    ? Math.round((quizCorrect / Object.keys(state.quiz).length) * 100) : 0;

  const tools = [
    { icon:'📜', name:'El Códice',          desc:'24 iniciados · 35 manuscritos',           panel:'plan' },
    { icon:'🔗', name:'Scriptorium',         desc:'Acceso directo a todos los textos',        panel:'links' },
    { icon:'⚗️', name:'Prueba del Adepto',   desc:'Quiz de comprensión por exponente',        panel:'quiz' },
    { icon:'✒️', name:'Registro del Iniciado',desc:'Diario de reflexión y revelaciones',      panel:'diario' },
    { icon:'🕯️', name:'Contemplatio',        desc:'Temporizador · guías · campana sagrada',   panel:'meditacion' },
    { icon:'⚖️', name:'Disciplina Diaria',   desc:'5 sellos diarios · llama viva',            panel:'habitos' },
    { icon:'💎', name:'Decretos Sagrados',   desc:'Afirmaciones · contador · memofichas',     panel:'afirmaciones' },
    { icon:'🏛️', name:'El Pórtico',         desc:'8 maestros estoicos · fichas · práctica',  panel:'estoicismo' },
    { icon:'⚔️', name:'Mi Orden',            desc:'Los 7 grados · ritual · registro',         panel:'orden' },
  ];

  return (
    <div className={styles.sanctum}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroSymbol} aria-hidden>⚔️</div>
        <p className={styles.heroEye}>Sistema iniciático personal</p>
        <h1 className={styles.heroTitle}>Ordo <em>Mentis Aureae</em></h1>
        <p className={styles.heroMotto}>"La mente domada forja la realidad · El carácter es el destino"</p>
        <div className={styles.heroRule} aria-hidden />

        {/* Anillos de progreso */}
        <div className={styles.rings}>
          <ProgressRing pct={pctObras} label="Manuscritos" value={`${pctObras}%`} />
          <ProgressRing pct={pctExp}   label="Iniciados"   value={`${expDone}/${EXP_DATA.length}`} />
          <ProgressRing pct={pctHab}   label="Sellos hoy"  value={`${pctHab}%`} />
          <ProgressRing pct={pctQuiz}  label="Pruebas"     value={`${pctQuiz}%`} />
        </div>
      </div>

      <div className={styles.wrap}>

        {/* Estadísticas rápidas */}
        <div className={styles.chips}>
          {[
            { n: `${obrasDone}/${TOTAL_OBRAS}`, l: 'Manuscritos descifrados' },
            { n: expDone+'/'+EXP_DATA.length,  l: 'Iniciados completados' },
            { n: racha+'🔥',                    l: 'Llama viva' },
            { n: state.diario.length,           l: 'Días de registro' },
            { n: quizCorrect,                   l: 'Pruebas correctas' },
            { n: state.afirm.length,            l: 'Decretos activos' },
          ].map(({ n, l }) => (
            <div key={l} className={styles.chip}>
              <span className={styles.chipN}>{n}</span>
              <span className={styles.chipL}>{l}</span>
            </div>
          ))}
        </div>

        {/* Acceso a herramientas */}
        <div className={styles.section}>
          <p className={styles.sectionEye}>Las Cámaras del Sanctum</p>
          <h2 className={styles.sectionTitle}>Herramientas del <em>Iniciado</em></h2>
          <div className={styles.toolsGrid}>
            {tools.map(t => (
              <ToolCard key={t.panel} {...t} onClick={() => onNavigate(t.panel)} />
            ))}
          </div>
        </div>

        {/* Plan semanal */}
        <div className={styles.section}>
          <p className={styles.sectionEye}>La Tabla Semanal</p>
          <h2 className={styles.sectionTitle}>Plan de <em>estudio</em></h2>
          <div className={styles.weekGrid}>
            {WEEK_PLAN.map((day, i) => {
              const dt = new Date(); dt.setDate(dt.getDate() + i + 1);
              return (
                <div key={day.l} className={`${styles.dayCol} ${i === 0 ? styles.todayCol : ''}`}>
                  <div className={styles.dayHead}>
                    <span className={styles.dayName}>{day.l}</span>
                    <span className={styles.dayDate}>{dt.toLocaleDateString('es-ES',{day:'numeric',month:'short'})}</span>
                  </div>
                  <div className={styles.dayTasks}>
                    {day.t.map(t => <div key={t} className={styles.dayTask}>{t}</div>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
