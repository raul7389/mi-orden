/**
 * StoicPortico — El Pórtico Estoico
 * Exponentes, fichas y práctica diaria estoica.
 */
import React, { useState } from 'react';
import styles from './StoicPortico.module.css';

const ESTO_CARDS = [
  {era:'epicteto',author:'Epicteto',obra:'El Enquiridión',front:'¿Cuál es la distinción fundamental que todo lo cambia?',back:'Hay cosas que dependen de nosotros —juicios, impulsos, deseos— y cosas que no —el cuerpo, la reputación, el cargo. La libertad interior absoluta comienza al enfocarse solo en lo primero y aceptar completamente lo segundo.'},
  {era:'epicteto',author:'Epicteto',obra:'El Enquiridión',front:'Según Epicteto, ¿qué perturba a los hombres?',back:'No son los hechos los que perturban a los hombres, sino las opiniones que tienen sobre los hechos. La fuente de toda perturbación es interior, no exterior. Cambiar el juicio cambia la experiencia.'},
  {era:'marco',author:'Marco Aurelio',obra:'Meditaciones',front:'¿Cómo describe Marco Aurelio el obstáculo en su principio más famoso?',back:'"El impedimento para la acción avanza la acción. Lo que se interpone en el camino se convierte en el camino." Los obstáculos no bloquean el camino: son el camino.'},
  {era:'marco',author:'Marco Aurelio',obra:'Meditaciones',front:'¿Qué práctica matutina recomienda Marco Aurelio?',back:'Al despertar, recordar: "Hoy encontraré personas difíciles. Pero comparten mi naturaleza racional. Ninguno puede hacerme daño verdadero, pues nadie puede involucrarme en algo feo sin mi consentimiento."'},
  {era:'seneca',author:'Séneca',obra:'Cartas a Lucilio',front:'¿Cuál es la enseñanza central de Séneca sobre el tiempo?',back:'"No tenemos poco tiempo, sino que perdemos mucho. La vida es suficientemente larga si sabes cómo usarla." El problema no es la brevedad de la vida sino el desperdicio.'},
  {era:'seneca',author:'Séneca',obra:'Sobre la Brevedad de la Vida',front:'¿Qué distingue al hombre ocupado del hombre sabio según Séneca?',back:'El hombre ocupado está siempre activo pero nunca vive: aplaza la vida para cuando tenga tiempo libre. El hombre sabio vive cada momento plenamente.'},
  {era:'moderno',author:'Ryan Holiday',obra:'El Obstáculo es el Camino',front:'¿Cuál es el principio central del libro de Ryan Holiday?',back:'Cada obstáculo contiene en sí mismo la semilla de su solución. Los estoicos no evitaban los obstáculos: los usaban como combustible. La pregunta no es "¿por qué?" sino "¿qué puedo hacer con esto?"'},
  {era:'moderno',author:'Massimo Pigliucci',obra:'Cómo ser un Estoico',front:'¿Cómo integra Pigliucci el estoicismo con la psicología moderna?',back:'La Terapia Cognitivo-Conductual de Beck se basó directamente en Epicteto: son los juicios, no los eventos, los que crean las emociones. El estoicismo es psicología aplicada con dos mil años de práctica.'},
  {era:'moderno',author:'William Irvine',obra:'Una Guía de la Buena Vida',front:'¿Qué es la "visualización negativa" que propone Irvine?',back:'Imaginar brevemente perder lo que más valoras —no para aterrorizarte sino para apreciarlo profundamente ahora. Es el antídoto estoico a la adaptación hedónica: genera gratitud constante.'},
  {era:'epicteto',author:'Epicteto',obra:'Las Disertaciones',front:'¿Qué es la libertad para Epicteto, que fue esclavo toda su vida?',back:'La libertad no es la ausencia de cadenas externas sino el dominio de los propios juicios. El esclavo que domina su mente es más libre que el rey que es esclavo de sus pasiones.'},
  {era:'marco',author:'Marco Aurelio',obra:'Meditaciones',front:'¿Cómo practica Marco Aurelio la perspectiva cósmica?',back:'Ver los eventos desde arriba, como el águila ve el campo. Las guerras, las ambiciones, los dramas humanos vistos desde la perspectiva del cosmos se vuelven pequeños. Esta vista genera ecuanimidad profunda.'},
  {era:'seneca',author:'Séneca',obra:'Cartas a Lucilio',front:'¿Qué dice Séneca sobre la fortuna y la adversidad?',back:'"La fortuna no ha concedido nada a nadie sin reservarse el derecho de recuperarlo." Todo lo externo es prestado. Esta conciencia no produce tristeza sino libertad: quien no teme perder lo que tiene, vive sin ansiedad.'},
];

export function StoicPortico() {
  const [tab, setTab]       = useState('fichas');
  const [filter, setFilter] = useState('all');
  const [fcIdx, setFcIdx]   = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = filter === 'all' ? ESTO_CARDS : ESTO_CARDS.filter(c => c.era === filter);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>La sabiduría del Pórtico Antiguo</p>
        <h1 className={styles.title}>El <em>Pórtico</em> Estoico</h1>
        <p className={styles.sub}>El Estoicismo y el Nuevo Pensamiento comparten un núcleo común: la mente es la causa de toda experiencia.</p>
      </div>
      <div className={styles.inner}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab==='fichas'?styles.tabActive:''}`} onClick={() => setTab('fichas')}>🃏 Memofichas</button>
          <button className={`${styles.tab} ${tab==='practica'?styles.tabActive:''}`} onClick={() => setTab('practica')}>⚡ Práctica Diaria</button>
          <button className={`${styles.tab} ${tab==='virtudes'?styles.tabActive:''}`} onClick={() => setTab('virtudes')}>⚖️ Las 4 Virtudes</button>
        </div>

        {tab === 'fichas' && (
          <>
            <div className={styles.fcFilter}>
              {[{v:'all',l:'Todos'},{v:'epicteto',l:'Epicteto'},{v:'marco',l:'Marco Aurelio'},{v:'seneca',l:'Séneca'},{v:'moderno',l:'Moderno'}].map(f => (
                <button key={f.v} className={`${styles.fcBtn} ${filter===f.v?styles.fcBtnActive:''}`}
                  onClick={() => {setFilter(f.v);setFcIdx(0);setFlipped(false);}}>{f.l}</button>
              ))}
            </div>
            <div style={{perspective:'1000px',marginBottom:'1.2rem'}}>
              <div style={{transformStyle:'preserve-3d',transition:'transform .45s ease',transform:flipped?'rotateY(180deg)':'',cursor:'pointer',position:'relative',minHeight:'200px'}} onClick={() => setFlipped(f=>!f)}>
                <div className={`${styles.fcFace} ${styles.fcFront}`}>
                  <p className={styles.fcAuthor}>{filtered[fcIdx]?.author}</p>
                  <p className={styles.fcObra}>{filtered[fcIdx]?.obra}</p>
                  <p className={styles.fcContent}>{filtered[fcIdx]?.front}</p>
                  <p className={styles.fcHint}>Toca para ver el principio</p>
                </div>
                <div className={`${styles.fcFace} ${styles.fcBack}`} style={{transform:'rotateY(180deg)'}}>
                  <p className={styles.fcAuthor}>{filtered[fcIdx]?.author} — {filtered[fcIdx]?.obra}</p>
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
              <button className={styles.fcNavBtn} onClick={() => {setFcIdx(0);setFlipped(false);}}>🔀 Aleatorio</button>
            </div>
          </>
        )}

        {tab === 'practica' && (
          <div className={styles.pracGrid}>
            {[
              {icon:'🌅',title:'El Alba Estoica',items:['Premeditación negativa (5 min): contempla brevemente qué podría ser difícil hoy. No para temer, sino para prepararte y apreciar lo que tienes.','Pregunta matutina (Epicteto): "¿Qué depende de mí hoy? ¿Qué no?" Enfoca toda tu energía solo en lo primero.','Intención del día: elige una virtud estoica para practicar: prudencia, justicia, valentía o templanza.']},
              {icon:'⚡',title:'Ante el Obstáculo',items:['La pregunta de Epicteto: "¿Esto depende de mí o no?" Si no depende, acepta. Si depende, actúa con tu mejor virtud.','El pivote de Marco Aurelio: "El obstáculo para la acción avanza la acción. Lo que se interpone en el camino se convierte en el camino."','Ante personas difíciles: nadie puede perturbarte sin tu consentimiento. Tu estado interior es tu responsabilidad, no de ellos.']},
              {icon:'🌙',title:'El Crepúsculo Estoico',items:['Examen nocturno (Marco Aurelio): ¿Qué hice bien hoy? ¿Qué hice mal? ¿Qué haré diferente mañana? Sin autocrítica destructiva.','Contemplación del memento mori: recuerda brevemente la impermanencia. Agudiza el aprecio y elimina lo trivial.','Gratitud estoica: no por lo que quieres sino por lo que ya tienes y podrías no haber tenido.']},
              {icon:'🔗',title:'Integración con el N.P.',items:['Mañana: usa el Nuevo Pensamiento para crear — afirmaciones, visualización, estado del ser.','Durante el día: usa el Estoicismo para mantener la ecuanimidad ante lo que no puedes controlar.','Noche: el examen estoico más la revisión del N.P. Son perfectamente complementarios.']},
            ].map(card => (
              <div key={card.title} className={styles.pracCard}>
                <p className={styles.pracIcon}>{card.icon}</p>
                <p className={styles.pracTitle}>{card.title}</p>
                {card.items.map((item,i) => (
                  <div key={i} className={styles.pracItem}>
                    <span className={styles.pracNum}>{i+1}.</span>
                    <span className={styles.pracText}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === 'virtudes' && (
          <div className={styles.virtGrid}>
            {[
              {name:'Prudencia (Sophia)',desc:'Sabiduría práctica para distinguir lo bueno de lo malo y actuar correctamente en cada situación.',icon:'🧠'},
              {name:'Justicia (Dikaiosyne)',desc:'Tratar a todos con equidad, honestidad y contribuir activamente al bien de la comunidad.',icon:'⚖️'},
              {name:'Valentía (Andreia)',desc:'Actuar con rectitud frente al miedo, la adversidad y la incertidumbre, sin paralizarse.',icon:'🔥'},
              {name:'Templanza (Sophrosyne)',desc:'Moderación y autodominio en todos los aspectos de la vida — emociones, deseos, placeres.',icon:'🌊'},
            ].map(v => (
              <div key={v.name} className={styles.virtCard}>
                <span className={styles.virtIcon}>{v.icon}</span>
                <p className={styles.virtName}>{v.name}</p>
                <p className={styles.virtDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
