/**
 * DailyDiscipline — Disciplina Diaria (Hábitos)
 */
import React, { useState } from 'react';
import { HABITS_DATA } from '../../data/lore.js';
import styles from './DailyDiscipline.module.css';

const todayKey = () => new Date().toISOString().slice(0,10);

function calcStreak(habitos, id) {
  let s = 0; const d = new Date();
  while(s < 366){ const k=d.toISOString().slice(0,10); if(habitos[k]?.[id]){s++;d.setDate(d.getDate()-1);}else break; }
  return s;
}

function calcOverall(habitos) {
  let s = 0; const d = new Date();
  while(s < 366){ const k=d.toISOString().slice(0,10); const day=habitos[k]||{}; if(Object.values(day).some(Boolean)){s++;d.setDate(d.getDate()-1);}else break; }
  return s;
}

export function DailyDiscipline({ codex }) {
  const { state, toggleHabit } = codex;
  const [calY, setCalY] = useState(new Date().getFullYear());
  const [calM, setCalM] = useState(new Date().getMonth());

  const key = todayKey();
  const today = state.habitos[key] || {};
  const done = HABITS_DATA.filter(h => today[h.id]).length;
  const pct = Math.round(done / HABITS_DATA.length * 100);
  const streak = calcOverall(state.habitos);
  const allDays = Object.keys(state.habitos);
  const fullDays = allDays.filter(k => Object.values(state.habitos[k]).filter(Boolean).length === 5).length;
  const totalHab = allDays.reduce((s,k) => s + Object.values(state.habitos[k]).filter(Boolean).length, 0);

  const MN = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const firstDow = (new Date(calY,calM,1).getDay()+6)%7;
  const daysInM = new Date(calY,calM+1,0).getDate();
  const todStr = todayKey();

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>Construcción diaria del carácter</p>
        <h1 className={styles.title}><em>Disciplina</em> Diaria</h1>
      </div>
      <div className={styles.layout}>
        <div>
          {/* Hábitos de hoy */}
          <div className={styles.todayCard}>
            <div className={styles.todayHead}>
              <span className={styles.todayLbl}>{new Date().toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'})}</span>
              <span className={styles.todayPct}>{done}/5</span>
            </div>
            <div className={styles.habList}>
              {HABITS_DATA.map(h => {
                const isDone = !!today[h.id];
                const s = calcStreak(state.habitos, h.id);
                return (
                  <div key={h.id} className={`${styles.habRow} ${isDone?styles.habDone:''}`}
                    onClick={() => toggleHabit(h.id)} role="button" tabIndex={0}
                    onKeyDown={e => e.key==='Enter' && toggleHabit(h.id)}>
                    <div className={`${styles.habSeal} ${isDone?styles.habSealDone:''}`}>
                      <span className={styles.habMark}>{isDone?'✦':''}</span>
                    </div>
                    <span className={styles.habIcon}>{h.icon}</span>
                    <div className={styles.habInfo}>
                      <span className={styles.habName}>{h.name}</span>
                      <span className={styles.habDesc}>{h.desc}</span>
                    </div>
                    {s > 1 && <span className={styles.habStreak}>{s}🔥</span>}
                  </div>
                );
              })}
            </div>
            <div className={styles.barBg}><div className={styles.barFill} style={{width:`${pct}%`}}/></div>
          </div>

          {/* Calendario */}
          <div className={styles.calCard}>
            <div className={styles.calHead}>
              <button className={styles.calNav} onClick={() => { let m=calM-1,y=calY; if(m<0){m=11;y--;} setCalM(m);setCalY(y); }}>←</button>
              <span className={styles.calMonth}>{MN[calM]} {calY}</span>
              <button className={styles.calNav} onClick={() => { let m=calM+1,y=calY; if(m>11){m=0;y++;} setCalM(m);setCalY(y); }}>→</button>
            </div>
            <div className={styles.calGrid}>
              {['Lu','Ma','Mi','Ju','Vi','Sa','Do'].map(d => <div key={d} className={styles.calDow}>{d}</div>)}
              {[...Array(firstDow)].map((_,i) => <div key={`e${i}`} className={styles.calEmpty}/>)}
              {[...Array(daysInM)].map((_,i) => {
                const dt = new Date(calY,calM,i+1);
                const k = dt.toISOString().slice(0,10);
                const cnt = Object.values(state.habitos[k]||{}).filter(Boolean).length;
                return <div key={i} className={`${styles.calDay}${cnt===5?' '+styles.calFull:cnt>0?' '+styles.calHas:''}${k===todStr?' '+styles.calToday:''}`}>{i+1}</div>;
              })}
            </div>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <p className={styles.sideTitle}>El Registro</p>
            <div className={styles.statsGrid}>
              <div className={styles.stat}><span className={styles.statN}>{streak}🔥</span><span className={styles.statL}>Llama viva</span></div>
              <div className={styles.stat}><span className={styles.statN}>{allDays.length}</span><span className={styles.statL}>Días activos</span></div>
              <div className={styles.stat}><span className={styles.statN}>{fullDays}</span><span className={styles.statL}>Días perfectos</span></div>
              <div className={styles.stat}><span className={styles.statN}>{totalHab}</span><span className={styles.statL}>Total sellos</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
