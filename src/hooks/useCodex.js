/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * useCodex — El custodio del estado sagrado
 *
 * Reemplaza la variable global ST + localStorage
 * del monolito original. Centraliza todo el estado
 * del sistema en un hook único, seguro y reactivo.
 * ─────────────────────────────────────────────
 */

import { useState, useEffect, useCallback } from 'react';

// ── ESTADO INICIAL DEL CÓDICE ────────────────────────────────────────────────
const INITIAL_STATE = {
  done:         {},  // { topicId: boolean } — obras completadas
  notes:        {},  // { topicId: [{text, date}] } — notas por obra
  plan:         [],  // [{ id, text, done, free }] — plan del día
  diario:       [],  // [{ text, prompt, mood, date, dateStr }]
  habitos:      {},  // { 'YYYY-MM-DD': { lectura, meditacion, ... } }
  afirm:        [],  // [{ text, cat, created, reps }]
  sessions:     [],  // [{ guide, min, date }] — sesiones de meditación
  quiz:         {},  // { 'Autor-idx': boolean }
  gradosDone:   {},  // { 'g1': true, ... }
  initEntries:  [],  // [{ text, type, date, dateStr }]
};

// ── CLAVE DE localStorage ────────────────────────────────────────────────────
const STORAGE_KEY = 'np_all';

/**
 * Carga el estado desde localStorage con fusión segura.
 * Si faltan campos (primera ejecución), usa los valores iniciales.
 */
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw);
    // Fusión defensiva: garantiza que todos los campos existen
    return { ...INITIAL_STATE, ...parsed };
  } catch {
    return INITIAL_STATE;
  }
}

/**
 * useCodex
 * ─────────────────────────────────────────────
 * Hook central del sistema. Devuelve el estado
 * completo y todas las acciones de mutación.
 *
 * Uso:
 *   const { state, toggleDone, saveEntry, ... } = useCodex();
 */
export function useCodex() {
  const [state, setState] = useState(loadFromStorage);

  // ── Persistencia automática en cada cambio ──────────────────────────────
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      console.warn('Ordo: no se pudo persistir el estado del Códice.');
    }
  }, [state]);

  // ── Helper interno de actualización ─────────────────────────────────────
  const update = useCallback((patch) => {
    setState(prev => ({ ...prev, ...patch }));
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — OBRAS (Plan de Estudio)
  // ══════════════════════════════════════════════════════════════════════════

  /** Marca o desmarca una obra como completada */
  const toggleDone = useCallback((topicId) => {
    setState(prev => {
      const newDone = { ...prev.done, [topicId]: !prev.done[topicId] };
      // Sincronizar con el plan del día si existe la obra allí
      const newPlan = prev.plan.map(p =>
        p.id === topicId ? { ...p, done: !!newDone[topicId] } : p
      );
      return { ...prev, done: newDone, plan: newPlan };
    });
  }, []);

  /** Agrega una nota a una obra */
  const saveNote = useCallback((topicId, text) => {
    if (!text.trim()) return;
    setState(prev => {
      const existing = prev.notes[topicId] || [];
      const now = new Date();
      return {
        ...prev,
        notes: {
          ...prev.notes,
          [topicId]: [...existing, {
            text: text.trim(),
            date: now.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })
          }]
        }
      };
    });
  }, []);

  /** Elimina una nota de una obra */
  const deleteNote = useCallback((topicId, idx) => {
    setState(prev => {
      const updated = [...(prev.notes[topicId] || [])];
      updated.splice(idx, 1);
      return { ...prev, notes: { ...prev.notes, [topicId]: updated } };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — PLAN DEL DÍA
  // ══════════════════════════════════════════════════════════════════════════

  const addToPlan = useCallback((id, text) => {
    setState(prev => {
      if (prev.plan.some(p => p.id === id)) return prev; // ya existe
      return { ...prev, plan: [...prev.plan, { id, text, done: !!prev.done[id], free: false }] };
    });
  }, []);

  const addFreePlan = useCallback((text) => {
    if (!text.trim()) return;
    setState(prev => ({
      ...prev,
      plan: [...prev.plan, { id: `free-${Date.now()}`, text: text.trim(), done: false, free: true }]
    }));
  }, []);

  const togglePlanDone = useCallback((idx) => {
    setState(prev => {
      const newPlan = [...prev.plan];
      newPlan[idx] = { ...newPlan[idx], done: !newPlan[idx].done };
      // Sincronizar con obras si no es libre
      const item = newPlan[idx];
      const newDone = item.free ? prev.done : { ...prev.done, [item.id]: item.done };
      return { ...prev, plan: newPlan, done: newDone };
    });
  }, []);

  const removePlan = useCallback((idx) => {
    setState(prev => {
      const newPlan = [...prev.plan];
      newPlan.splice(idx, 1);
      return { ...prev, plan: newPlan };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — DIARIO
  // ══════════════════════════════════════════════════════════════════════════

  const saveEntry = useCallback((text, prompt, mood) => {
    if (!text.trim()) return;
    const now = new Date();
    setState(prev => ({
      ...prev,
      diario: [{
        text: text.trim(), prompt, mood,
        date: now.toISOString(),
        dateStr: now.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
      }, ...prev.diario]
    }));
  }, []);

  const deleteEntry = useCallback((idx) => {
    setState(prev => {
      const newDiario = [...prev.diario];
      newDiario.splice(idx, 1);
      return { ...prev, diario: newDiario };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — HÁBITOS
  // ══════════════════════════════════════════════════════════════════════════

  const todayKey = () => new Date().toISOString().slice(0, 10);

  const toggleHabit = useCallback((habitId) => {
    const key = todayKey();
    setState(prev => {
      const today = prev.habitos[key] || {};
      return {
        ...prev,
        habitos: {
          ...prev.habitos,
          [key]: { ...today, [habitId]: !today[habitId] }
        }
      };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — AFIRMACIONES
  // ══════════════════════════════════════════════════════════════════════════

  const addAfirmacion = useCallback((text, cat) => {
    if (!text.trim()) return;
    setState(prev => ({
      ...prev,
      afirm: [{ text: text.trim(), cat, created: new Date().toISOString(), reps: 0 }, ...prev.afirm]
    }));
  }, []);

  const deleteAfirmacion = useCallback((idx) => {
    setState(prev => {
      const newAfirm = [...prev.afirm];
      newAfirm.splice(idx, 1);
      return { ...prev, afirm: newAfirm };
    });
  }, []);

  const incrementRep = useCallback((idx) => {
    setState(prev => {
      const newAfirm = [...prev.afirm];
      newAfirm[idx] = { ...newAfirm[idx], reps: (newAfirm[idx].reps || 0) + 1 };
      return { ...prev, afirm: newAfirm };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — MEDITACIÓN
  // ══════════════════════════════════════════════════════════════════════════

  const saveSession = useCallback((guide, minutes) => {
    const now = new Date();
    setState(prev => ({
      ...prev,
      sessions: [{
        guide, min: minutes,
        date: now.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      }, ...prev.sessions].slice(0, 20)
    }));
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — QUIZ
  // ══════════════════════════════════════════════════════════════════════════

  const recordAnswer = useCallback((author, qIdx, correct) => {
    setState(prev => ({
      ...prev,
      quiz: { ...prev.quiz, [`${author}-${qIdx}`]: correct }
    }));
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // ACCIONES — GRADOS Y REGISTRO INICIÁTICO
  // ══════════════════════════════════════════════════════════════════════════

  const completeGrado = useCallback((gradoId) => {
    setState(prev => ({
      ...prev,
      gradosDone: { ...prev.gradosDone, [gradoId]: true }
    }));
  }, []);

  const saveInitEntry = useCallback((text, type) => {
    if (!text.trim()) return;
    const now = new Date();
    setState(prev => ({
      ...prev,
      initEntries: [{
        text: text.trim(), type,
        date: now.toISOString(),
        dateStr: now.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
      }, ...prev.initEntries]
    }));
  }, []);

  const deleteInitEntry = useCallback((idx) => {
    setState(prev => {
      const updated = [...prev.initEntries];
      updated.splice(idx, 1);
      return { ...prev, initEntries: updated };
    });
  }, []);

  // ══════════════════════════════════════════════════════════════════════════
  // SELECTORES DERIVADOS (calculados, no almacenados)
  // ══════════════════════════════════════════════════════════════════════════

  /** Cuenta obras completadas */
  const obrasDone = Object.values(state.done).filter(Boolean).length;

  /** Calcula la racha general de hábitos (días consecutivos) */
  const calcRacha = useCallback(() => {
    let streak = 0;
    const d = new Date();
    while (streak < 366) {
      const key = d.toISOString().slice(0, 10);
      const day = state.habitos[key] || {};
      if (Object.values(day).some(Boolean)) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else break;
    }
    return streak;
  }, [state.habitos]);

  /** Hábitos completados hoy */
  const todayHabits = state.habitos[todayKey()] || {};
  const habitsDoneToday = Object.values(todayHabits).filter(Boolean).length;

  /** Total respuestas correctas en quiz */
  const quizCorrect = Object.values(state.quiz).filter(v => v === true).length;

  return {
    // Estado completo
    state,

    // Selectores derivados
    obrasDone,
    habitsDoneToday,
    quizCorrect,
    calcRacha,

    // Acciones — Obras
    toggleDone,
    saveNote,
    deleteNote,

    // Acciones — Plan
    addToPlan,
    addFreePlan,
    togglePlanDone,
    removePlan,

    // Acciones — Diario
    saveEntry,
    deleteEntry,

    // Acciones — Hábitos
    toggleHabit,

    // Acciones — Afirmaciones
    addAfirmacion,
    deleteAfirmacion,
    incrementRep,

    // Acciones — Meditación
    saveSession,

    // Acciones — Quiz
    recordAnswer,

    // Acciones — Orden
    completeGrado,
    saveInitEntry,
    deleteInitEntry,
  };
}
