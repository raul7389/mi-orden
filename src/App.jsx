/**
 * ORDO MENTIS AUREAE
 * ─────────────────────────────────────────────
 * App.jsx — La Puerta del Sanctum
 *
 * Componente raíz. Orquesta la navegación entre
 * paneles y provee el hook useCodex a todos los
 * componentes hijos que lo necesiten.
 *
 * Lazy loading por panel para carga rápida.
 * ─────────────────────────────────────────────
 */

import React, { useState, Suspense, lazy } from 'react';
import { useCodex } from './hooks/useCodex.js';
import { ArcaneNavigation } from './components/navigation/ArcaneNavigation.jsx';
import { TOTAL_OBRAS } from './data/lore.js';
import './styles/arcane.css';
import styles from './App.module.css';

// ── Lazy loading de paneles ──────────────────────────────────────────────────
const SanctumHome      = lazy(() => import('./components/panels/SanctumHome.jsx').then(m => ({ default: m.SanctumHome })));
const StudyCodex       = lazy(() => import('./components/panels/StudyCodex.jsx').then(m => ({ default: m.StudyCodex })));
const Scriptorium      = lazy(() => import('./components/panels/Scriptorium.jsx').then(m => ({ default: m.Scriptorium })));
const AdeptTrial       = lazy(() => import('./components/panels/AdeptTrial.jsx').then(m => ({ default: m.AdeptTrial })));
const InitiatesLog     = lazy(() => import('./components/panels/InitiatesLog.jsx').then(m => ({ default: m.InitiatesLog })));
const StoicMeditation  = lazy(() => import('./components/panels/StoicMeditation.jsx').then(m => ({ default: m.StoicMeditation })));
const DailyDiscipline  = lazy(() => import('./components/panels/DailyDiscipline.jsx').then(m => ({ default: m.DailyDiscipline })));
const SacredDecrees    = lazy(() => import('./components/panels/SacredDecrees.jsx').then(m => ({ default: m.SacredDecrees })));
const StoicPortico     = lazy(() => import('./components/panels/StoicPortico.jsx').then(m => ({ default: m.StoicPortico })));
const MiOrden          = lazy(() => import('./components/panels/MiOrden.jsx').then(m => ({ default: m.MiOrden })));

// ── Spinner de carga arcano ──────────────────────────────────────────────────
function ArcaneLoader() {
  return (
    <div className={styles.loader} role="status" aria-label="Cargando...">
      <span className={styles.loaderSymbol} aria-hidden>⚔️</span>
      <p className={styles.loaderText}>Abriendo el grimorio...</p>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function App() {
  const [activePanel, setActivePanel] = useState('home');
  const codex = useCodex();

  const { obrasDone } = codex;

  const renderPanel = () => {
    const props = { codex };
    switch (activePanel) {
      case 'home':          return <SanctumHome      {...props} onNavigate={(panel) => { setActivePanel(panel); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />;
      case 'plan':          return <StudyCodex        {...props} />;
      case 'links':         return <Scriptorium       {...props} />;
      case 'quiz':          return <AdeptTrial         {...props} />;
      case 'diario':        return <InitiatesLog      {...props} />;
      case 'meditacion':    return <StoicMeditation   {...props} />;
      case 'habitos':       return <DailyDiscipline   {...props} />;
      case 'afirmaciones':  return <SacredDecrees      {...props} />;
      case 'estoicismo':    return <StoicPortico       {...props} />;
      case 'orden':         return <MiOrden            {...props} />;
      default:              return <SanctumHome        {...props} />;
    }
  };

  return (
    <>
      <ArcaneNavigation
        activePanel={activePanel}
        onNavigate={(panel) => {
          setActivePanel(panel);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        obrasDone={obrasDone}
        totalObras={TOTAL_OBRAS}
      />

      <main className={styles.main} id="main-content">
        <Suspense fallback={<ArcaneLoader />}>
          {renderPanel()}
        </Suspense>
      </main>
    </>
  );
}
