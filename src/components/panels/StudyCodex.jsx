/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * StudyCodex — El Códice de Estudio Sagrado
 *
 * Reemplaza el panel "Plan de Estudio" monolítico.
 * 24 exponentes, 35 obras, notas, plan del día.
 * Diseño: pergamino oscuro, tipografía inmersiva.
 * ─────────────────────────────────────────────
 */

import React, { useState, useCallback } from 'react';
import { EXP_DATA, TOTAL_OBRAS } from '../../data/lore.js';
import styles from './StudyCodex.module.css';

// ── SUBCOMPONENTE: Obra individual ────────────────────────────────────────────
function TopicScroll({ topic, isDone, notes, onToggle, onSaveNote, onDeleteNote, onAddToPlan }) {
  const [notesOpen, setNotesOpen] = useState(false);
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    onSaveNote(topic.id, noteText);
    setNoteText('');
  };

  return (
    <div className={`${styles.topic} ${isDone ? styles.topicDone : ''}`}>
      <div className={styles.topicMain}>
        {/* Sello de completado */}
        <button
          className={`${styles.seal} ${isDone ? styles.sealDone : ''}`}
          onClick={() => onToggle(topic.id)}
          aria-label={isDone ? 'Desmarcar obra' : 'Marcar como leída'}
        >
          <span className={styles.sealMark}>✦</span>
        </button>

        {/* Información de la obra */}
        <div className={styles.topicBody}>
          <div className={styles.topicTitle}>{topic.title}</div>
          <div className={styles.topicNote}>{topic.note}</div>

          {/* Accesos */}
          <div className={styles.topicLinks}>
            <a href={topic.r} target="_blank" rel="noopener noreferrer" className={styles.scroll}>
              📜 Leer
            </a>
            <a href={topic.a} target="_blank" rel="noopener noreferrer" className={`${styles.scroll} ${styles.scrollSecondary}`}>
              🎧 Audio
            </a>
          </div>
        </div>
      </div>

      {/* Acciones secundarias */}
      <div className={styles.topicActs}>
        <button
          className={styles.actBtn}
          onClick={() => setNotesOpen(o => !o)}
        >
          <span>✒️ Anotaciones</span>
          {notes.length > 0 && <span className={styles.noteCount}>{notes.length}</span>}
        </button>
        <button
          className={styles.actBtn}
          onClick={() => onAddToPlan(topic.id, topic.title)}
        >
          + Añadir al plan de hoy
        </button>
      </div>

      {/* Panel de notas colapsable */}
      {notesOpen && (
        <div className={styles.notesPanel}>
          {notes.length > 0 && (
            <div className={styles.notesList}>
              {notes.map((n, i) => (
                <div key={i} className={styles.noteItem}>
                  <p className={styles.noteText}>{n.text}</p>
                  <div className={styles.noteMeta}>
                    <span className={styles.noteDate}>{n.date}</span>
                    <button
                      className={styles.noteDel}
                      onClick={() => onDeleteNote(topic.id, i)}
                      aria-label="Borrar anotación"
                    >✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.noteInput}>
            <textarea
              className={styles.noteTextarea}
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="Inscribe tu reflexión sobre esta obra..."
              rows={2}
            />
            <button className={styles.noteSave} onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── SUBCOMPONENTE: Exponente (acordeón) ───────────────────────────────────────
function ExponentScroll({ exp, state, onToggle, onSaveNote, onDeleteNote, onAddToPlan }) {
  const [open, setOpen] = useState(false);
  const doneCnt = exp.topics.filter(t => state.done[t.id]).length;
  const allDone = doneCnt === exp.topics.length;

  return (
    <div className={`${styles.exp} ${allDone ? styles.expDone : ''} ${open ? styles.expOpen : ''}`}>

      {/* Cabecera del exponente */}
      <button
        className={styles.expHead}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={styles.expEra}>{exp.era.replace('Clásicos ', '')}</span>
        <div className={styles.expInfo}>
          <span className={styles.expName}>{exp.name}</span>
          <span className={styles.expDates}>{exp.dates}</span>
        </div>
        <span className={`${styles.expBadge} ${allDone ? styles.expBadgeDone : ''}`}>
          {doneCnt}/{exp.topics.length}
        </span>
        <span className={styles.expToggle} aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>

      {/* Cuerpo colapsable */}
      {open && (
        <div className={styles.expBody}>
          {exp.bio && (
            <p className={styles.expBio}>{exp.bio}</p>
          )}
          <div className={styles.topicsLabel}>Manuscritos recomendados</div>
          {exp.topics.map(topic => (
            <TopicScroll
              key={topic.id}
              topic={topic}
              isDone={!!state.done[topic.id]}
              notes={state.notes[topic.id] || []}
              onToggle={onToggle}
              onSaveNote={onSaveNote}
              onDeleteNote={onDeleteNote}
              onAddToPlan={onAddToPlan}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── SUBCOMPONENTE: Plan del día ───────────────────────────────────────────────
function DayScroll({ plan, onToggle, onRemove, onAddFree }) {
  const [freeText, setFreeText] = useState('');

  const handleAdd = () => {
    onAddFree(freeText);
    setFreeText('');
  };

  return (
    <div className={styles.dayScroll}>
      <div className={styles.dayHead}>
        <span className={styles.dayTitle}>📅 Tabla de hoy</span>
        <span className={styles.dayDate}>
          {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
        </span>
      </div>

      <div className={styles.dayBody}>
        {plan.length === 0 ? (
          <p className={styles.dayEmpty}>Inscribe obras con "Añadir al plan de hoy"</p>
        ) : (
          plan.map((p, i) => (
            <div key={p.id} className={`${styles.dayItem} ${p.done ? styles.dayItemDone : ''}`}>
              <button
                className={`${styles.daySeal} ${p.done ? styles.daySealDone : ''}`}
                onClick={() => onToggle(i)}
                aria-label="Marcar como completado"
              >
                <span className={styles.daySealMark}>✦</span>
              </button>
              <span className={styles.dayText}>{p.text}</span>
              <button
                className={styles.dayDel}
                onClick={() => onRemove(i)}
                aria-label="Retirar del plan"
              >✕</button>
            </div>
          ))
        )}

        {/* Añadir tarea libre */}
        <div className={styles.dayAdd}>
          <input
            className={styles.dayInput}
            value={freeText}
            onChange={e => setFreeText(e.target.value)}
            placeholder="Tarea libre..."
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
          <button className={styles.dayAddBtn} onClick={handleAdd}>+</button>
        </div>
      </div>
    </div>
  );
}

// ── PANEL PRINCIPAL ───────────────────────────────────────────────────────────
export function StudyCodex({ codex }) {
  const {
    state,
    toggleDone, saveNote, deleteNote,
    addToPlan, addFreePlan, togglePlanDone, removePlan,
    obrasDone
  } = codex;

  const pct = Math.round((obrasDone / TOTAL_OBRAS) * 100);

  // Agrupar exponentes por era
  const eras = [...new Set(EXP_DATA.map(e => e.era))];

  return (
    <div className={styles.codex}>

      {/* Encabezado */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>24 iniciados · 35 manuscritos</p>
        <h1 className={styles.title}>
          El <em>Códice</em> Sagrado
        </h1>
        <div className={styles.ornament} aria-hidden>✦ ✦ ✦</div>

        {/* Barra de desvelamiento */}
        <div className={styles.progressWrap}>
          <div className={styles.progressHead}>
            <span className={styles.progressLabel}>Desvelamiento de los Misterios</span>
            <span className={styles.progressValue}>{pct}%</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
          <p className={styles.progressSub}>{obrasDone} de {TOTAL_OBRAS} manuscritos descifrados</p>
        </div>
      </header>

      {/* Layout principal */}
      <div className={styles.layout}>

        {/* Lista de exponentes */}
        <div className={styles.expList}>
          {eras.map(era => (
            <section key={era} aria-labelledby={`era-${era}`}>
              {/* Separador de era */}
              <div className={styles.eraSep}>
                <div className={styles.eraLine} />
                <span id={`era-${era}`} className={styles.eraLabel}>{era}</span>
                <div className={styles.eraLine} />
              </div>

              {EXP_DATA.filter(e => e.era === era).map(exp => (
                <ExponentScroll
                  key={exp.id}
                  exp={exp}
                  state={state}
                  onToggle={toggleDone}
                  onSaveNote={saveNote}
                  onDeleteNote={deleteNote}
                  onAddToPlan={addToPlan}
                />
              ))}
            </section>
          ))}
        </div>

        {/* Panel lateral */}
        <aside className={styles.sidebar}>
          <DayScroll
            plan={state.plan}
            onToggle={togglePlanDone}
            onRemove={removePlan}
            onAddFree={addFreePlan}
          />

          {/* Estadísticas */}
          <div className={styles.statsCard}>
            <p className={styles.statsTitle}>El Registro</p>
            <div className={styles.statsGrid}>
              {[
                { n: obrasDone, l: 'Descifradas' },
                { n: TOTAL_OBRAS - obrasDone, l: 'Pendientes' },
                { n: Object.values(state.notes).reduce((a, b) => a + b.length, 0), l: 'Anotaciones' },
                { n: `${EXP_DATA.filter(e => e.topics.every(t => state.done[t.id])).length}/24`, l: 'Iniciados' }
              ].map(({ n, l }) => (
                <div key={l} className={styles.stat}>
                  <span className={styles.statN}>{n}</span>
                  <span className={styles.statL}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
