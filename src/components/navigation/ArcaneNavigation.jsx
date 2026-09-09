/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * ArcaneNavigation — La Bóveda Celestial
 *
 * Reemplaza el <nav> monolítico original.
 * Navegación fija con efecto de cristal oscuro,
 * marca del grado actual y símbolo de la Orden.
 * ─────────────────────────────────────────────
 */

import React, { useState, useEffect } from 'react';
import { ARCANE_NAMES } from '../../data/lore.js';
import styles from './ArcaneNavigation.module.css';

const PANELS = ['home','plan','links','quiz','diario','meditacion','habitos','afirmaciones','estoicismo','orden'];

export function ArcaneNavigation({ activePanel, onNavigate, obrasDone, totalObras }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pct = Math.round((obrasDone / totalObras) * 100);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Navegación arcana">

      {/* Marca de la Orden */}
      <button
        className={styles.brand}
        onClick={() => onNavigate('home')}
        aria-label="Sanctum principal"
      >
        <span className={styles.brandSymbol} aria-hidden>⚔️</span>
        <span className={styles.brandName}>
          <span>Ordo</span>
          <em> Mentis Aureae</em>
        </span>
      </button>

      {/* Pestañas de navegación */}
      <div className={styles.tabs} role="tablist">
        {PANELS.map(panel => {
          const meta = ARCANE_NAMES[panel];
          const isActive = activePanel === panel;
          return (
            <button
              key={panel}
              role="tab"
              aria-selected={isActive}
              aria-label={meta.tab}
              className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
              onClick={() => onNavigate(panel)}
            >
              <span className={styles.tabIcon} aria-hidden>{meta.icon}</span>
              <span className={styles.tabLabel}>{meta.tab}</span>
            </button>
          );
        })}
      </div>

      {/* Indicador de progreso — la vela encendida */}
      <div className={styles.progress} aria-label={`Desvelamiento: ${pct}%`} title={`${obrasDone} de ${totalObras} obras`}>
        <span className={styles.progressPct}>{pct}%</span>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
        <span className={styles.progressLabel}>Desvelado</span>
      </div>

    </nav>
  );
}
