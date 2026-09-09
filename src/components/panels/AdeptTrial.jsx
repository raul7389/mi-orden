/**
 * AdeptTrial — Prueba del Adepto (Quiz)
 */
import React, { useState } from 'react';
import styles from './AdeptTrial.module.css';

const QUIZZES = {
  'James Allen':{ obra:'Como el Hombre Piensa', preguntas:[
    {q:'¿Cuál es la premisa central del libro?',ops:['El hombre es resultado de su entorno','El pensamiento habitual moldea el carácter y la circunstancia','El éxito depende del trabajo físico','La inteligencia es lo más importante'],ans:1,exp:'Allen enseña que la mente es como un jardín: lo que cultivas, crece. El pensamiento habitual es la causa y la circunstancia es el efecto.'},
    {q:'¿A qué compara Allen la mente humana?',ops:['A una máquina de vapor','A un jardín que puede cultivarse o descuidarse','A un río que fluye solo','A un libro que otros escriben'],ans:1,exp:'La analogía del jardín es central. El jardinero puede cultivar flores o permitir malezas, igual que la mente.'},
    {q:'¿Qué dice Allen sobre la visión y los ideales?',ops:['Son peligrosas distracciones','Son el comienzo de todo logro real','Solo los artistas necesitan visión','La visión sin trabajo no sirve'],ans:1,exp:'Allen enseña que los sueños son los semilleros de las realidades. La visión clara sostenida es el primer paso.'},
    {q:'¿Cómo afecta el pensamiento a la salud según Allen?',ops:['No existe relación','El cuerpo refleja el estado mental habitual','Solo las graves enfermedades tienen causa mental','La medicina corrige cualquier efecto'],ans:1,exp:'Allen anticipa décadas antes lo que la medicina mente-cuerpo confirmaría.'},
    {q:'¿Qué relación tiene el pensamiento con las circunstancias?',ops:['Son independientes','Las circunstancias crean los pensamientos','El pensamiento es causa y las circunstancias son el efecto','Solo el pensamiento positivo cambia las circunstancias'],ans:2,exp:'El hombre no atrae lo que quiere sino lo que ES. Las circunstancias son un espejo del estado mental.'}
  ]},
  'Neville Goddard':{ obra:'El Sentir es el Secreto', preguntas:[
    {q:'¿Por qué Neville dice que "el sentir es el secreto"?',ops:['Las emociones dan energía física','El subconsciente acepta como real lo que se siente','Sentir bien produce buena salud','Las emociones atraen personas similares'],ans:1,exp:'El subconsciente no distingue entre experiencia real e imaginada vívida. Lo que se siente como ya verdadero, el subconsciente lo ejecuta.'},
    {q:'¿Cuándo recomienda Neville practicar la visualización?',ops:['Al mediodía','En el estado hipnagógico entre vigilia y sueño','Durante el ejercicio físico','En grupos'],ans:1,exp:'El estado hipnagógico, justo antes de dormir, es cuando la mente consciente cede y el subconsciente es más receptivo.'},
    {q:'¿Qué es el estado SATS?',ops:['Un estado de alerta máxima','State Akin To Sleep: somnolencia consciente para programar el subconsciente','Un sistema de meditación tibetana','Una técnica de respiración'],ans:1,exp:'SATS significa State Akin To Sleep. En ese estado la mente está abierta y receptiva al deseo ya cumplido.'},
    {q:'¿Qué debe imaginar para manifestar un deseo?',ops:['El proceso de cómo llegará','La escena que implicaría que el deseo YA fue cumplido','Una imagen borrosa del resultado','Una lista de pasos'],ans:1,exp:'No imagines el proceso sino el final. La escena que IMPLICA que tu deseo ya es realidad.'},
    {q:'¿Cómo relaciona Neville la consciencia con Dios?',ops:['Dios está separado del ser humano','La consciencia individual ES Dios operando en el nivel humano','Dios premia o castiga','Solo existe para creyentes'],ans:1,exp:'Para Neville, "Yo Soy" es el nombre de Dios. La consciencia que dice "yo soy" es la misma consciencia divina.'}
  ]},
  'Joseph Murphy':{ obra:'El Poder del Subconsciente', preguntas:[
    {q:'¿Cómo describe Murphy la mente subconsciente?',ops:['Es más poderosa la consciente','No razona: acepta como verdad lo que se le imprime','Son exactamente iguales','Solo opera durante los sueños'],ans:1,exp:'La mente subconsciente no cuestiona ni razona. Acepta como verdad lo que se le repite con emoción y convicción.'},
    {q:'¿Cuál es el método más efectivo según Murphy?',ops:['Repetir afirmaciones todo el día','Repetir afirmaciones con emoción en el estado hipnagógico','Escribir los deseos 100 veces','Meditar durante horas'],ans:1,exp:'Murphy recomienda el estado antes de dormir: la mente consciente se relaja y el subconsciente es más receptivo.'},
    {q:'¿Qué sucede cuando hay conflicto entre mente consciente y subconsciente?',ops:['Siempre gana la consciente','Siempre gana la subconsciente','Depende del nivel de emoción','Se cancelan'],ans:1,exp:'Murphy es categórico: cuando la consciente desea una cosa pero el subconsciente cree otra, el subconsciente siempre gana.'},
    {q:'¿Qué función tiene la oración científica según Murphy?',ops:['Pedir a Dios que intervenga','Imprimir en el subconsciente la realidad deseada como ya cumplida','Protegerse de energías negativas','Solo agradecer'],ans:1,exp:'La oración efectiva no pide sino que afirma. Declara la realidad deseada como ya existente.'},
    {q:'¿Cómo explica Murphy los milagros de sanación?',ops:['Son intervenciones sobrenaturales','Resultado de reprogramar el subconsciente que controla el cuerpo','Son coincidencias estadísticas','Son efecto placebo'],ans:1,exp:'El subconsciente controla todas las funciones del cuerpo. Reprogramado con salud perfecta, el cuerpo obedece al nuevo patrón.'}
  ]},
  'Napoleon Hill':{ obra:'Piense y Hágase Rico', preguntas:[
    {q:'¿Cuál es el primer principio del éxito según Hill?',ops:['La buena educación','El deseo ardiente con objetivo específico y fecha definida','El trabajo duro sin descanso','Las relaciones con personas influyentes'],ans:1,exp:'Hill fue explícito: el punto de partida de todo logro es el DESEO ardiente, con un objetivo claro y una fecha específica.'},
    {q:'¿Cuántas personas estudió Hill?',ops:['100 personas','Más de 500 de los más exitosos durante 20 años','Solo a Carnegie','25 empresarios'],ans:1,exp:'Hill pasó 20 años estudiando a más de 500 personas exitosas incluyendo Carnegie, Edison, Ford y Rockefeller.'},
    {q:'¿Qué es el "Cerebro Maestro" según Hill?',ops:['El cerebro de una persona muy inteligente','La alianza armoniosa de dos o más mentes hacia un objetivo común','Un grupo de meditación','Un estado mental de concentración'],ans:1,exp:'Cuando dos o más mentes se unen en armonía, se crea una tercera mente más poderosa que cualquiera individualmente.'},
    {q:'¿Por qué Hill enfatiza la autosugestión?',ops:['Reemplaza el trabajo físico','Es el medio para imprimir el deseo en el subconsciente que guía las acciones','Engaña al cerebro','Solo funciona para algunos'],ans:1,exp:'El subconsciente solo actúa sobre instrucciones con emoción y fe. La autosugestión es el puente entre el deseo y la acción.'},
    {q:'¿Qué es la "inteligencia infinita" según Hill?',ops:['El coeficiente intelectual máximo','Una fuerza universal a la que la mente humana puede acceder para obtener guía','Solo la inteligencia de los genios','Un concepto religioso'],ans:1,exp:'Existe una Inteligencia Universal a la que la mente puede sintonizarse para recibir ideas, inspiración y guía.'}
  ]},
  'Ernest Holmes':{ obra:'La Ciencia de la Mente', preguntas:[
    {q:'¿Qué es el Tratamiento Espiritual según Holmes?',ops:['Una oración de petición a Dios','Una declaración de la verdad espiritual ya existente','Una sesión de hipnosis','Un ritual con elementos físicos'],ans:1,exp:'Holmes diseñó el tratamiento de 5 pasos: Reconocimiento, Unificación, Realización, Gratitud y Liberación.'},
    {q:'¿Cuáles son los 5 pasos del tratamiento?',ops:['Orar, meditar, visualizar, afirmar, agradecer','Reconocimiento, Unificación, Realización, Gratitud, Liberación','Pedir, creer, recibir, agradecer, compartir','Ver, sentir, afirmar, actuar, liberar'],ans:1,exp:'El tratamiento sigue este orden preciso. No se pide, se declara la realidad espiritual ya existente.'},
    {q:'¿Qué papel juega el no apego al resultado?',ops:['Es falta de fe','El Paso 5 (Liberación): soltar con confianza permite que la ley opere','No tiene importancia','Solo para avanzados'],ans:1,exp:'Holmes enseñó que la ansiedad por el resultado interfiere con la ley. Liberar es como enviar una carta: una vez enviada, no la reenvíes.'},
    {q:'¿Cuál es la naturaleza del Espíritu según Holmes?',ops:['Una entidad separada que juzga','La Inteligencia Infinita que lo permea todo y de la que formamos parte','Un concepto sin aplicación práctica','Solo para personas con fe religiosa'],ans:1,exp:'Para Holmes el Espíritu es omnipresente. No es una entidad separada sino la realidad subyacente de todo lo existente.'},
    {q:'¿Qué significa "Ciencia de la Mente" para Holmes?',ops:['El estudio científico del cerebro','Un sistema que aplica principios espirituales con la precisión de las leyes físicas','Una religión basada en la mente','Una técnica psicológica moderna'],ans:1,exp:'Holmes propuso que los principios espirituales son tan exactos como las leyes físicas. Si los aplicas correctamente, los resultados son predecibles.'}
  ]},
  'William Walker Atkinson':{ obra:'La Ley de la Atracción', preguntas:[
    {q:'¿Cuál fue el aporte histórico más importante de Atkinson?',ops:['Fundó la primera escuela metafísica','Acuñó y sistematizó el término "Ley de Atracción" en 1906','Tradujo El Kybalión al inglés','Fue el primer discípulo de Quimby'],ans:1,exp:'En 1906 publicó "Thought Vibration or the Law of Attraction in the Thought World", siendo el primero en usar el término sistemáticamente.'},
    {q:'¿Bajo qué seudónimos escribió Atkinson?',ops:['Joseph Brenner y Henry Hamblin','Yogi Ramacharaka y Theron Q. Dumont','Eliphas Lévi y Papus','Charles Fillmore y Unity School'],ans:1,exp:'Atkinson escribió más de 100 libros bajo varios nombres. Como Yogi Ramacharaka exploró la filosofía oriental.'},
    {q:'¿Qué es la "vibración del pensamiento" según Atkinson?',ops:['Un fenómeno puramente metafórico','El pensamiento emite frecuencias reales que atraen pensamientos y circunstancias similares','Una técnica de meditación tibetana','El resultado del trabajo físico sostenido'],ans:1,exp:'Para Atkinson el pensamiento es una fuerza vibratoria real. Como un diapasón, los pensamientos habituales atraen lo que está en la misma frecuencia.'},
    {q:'¿Cómo conecta Atkinson la filosofía oriental con el Nuevo Pensamiento?',ops:['Los considera incompatibles','Demuestra que el Prana yóguico y la Fuerza Mental del N.P. son el mismo principio en dos tradiciones distintas','Solo traduce textos orientales','Rechaza la filosofía oriental'],ans:1,exp:'Como Yogi Ramacharaka, Atkinson mostró que el Prana del Yoga y la Fuerza del Pensamiento son expresiones culturales del mismo principio universal.'},
    {q:'¿Por qué es relevante Atkinson para quien estudia AMORC?',ops:['Fue miembro fundador de AMORC','Su síntesis de hermetismo occidental y filosofía oriental crea el mismo puente filosófico que AMORC construyó en sus grados','Escribió los manuales de AMORC','Fue maestro de Harvey Spencer Lewis'],ans:1,exp:'Atkinson creó exactamente el mismo puente filosófico que AMORC formaliza: la unión del hermetismo occidental, el esoterismo oriental y el Nuevo Pensamiento.'}
  ]},
  'Harvey Spencer Lewis':{ obra:'Rosicrucian Questions and Answers', preguntas:[
    {q:'¿Cuál es el aporte fundamental de Harvey Spencer Lewis?',ops:['Escribió la primera traducción del Kybalión','Fundó AMORC en 1915 y fue su primer Imperator','Creó el movimiento de la Ciencia Cristiana','Fue el primer maestro de Neville Goddard'],ans:1,exp:'Lewis fundó la Ancient and Mystical Order Rosae Crucis (AMORC) en 1915 y construyó el puente entre N.P. y hermetismo rosacruista.'},
    {q:'¿Cómo conecta Lewis la alquimia mental con el Nuevo Pensamiento?',ops:['Los considera opuestos irreconciliables','La alquimia interior — transmutación del plomo en oro de la sabiduría — es exactamente la reprogramación mental que el N.P. enseña','La alquimia es solo química medieval','Solo aplica a los grados más altos de la Masonería'],ans:1,exp:'Para Lewis la alquimia real siempre fue un proceso mental. Transmutar el plomo en oro significa transmutar la ignorancia en comprensión.'},
    {q:'¿Qué es la "doble mente" en la filosofía de Lewis?',ops:['El hemisferio izquierdo y derecho','La mente objetiva consciente y la mente subjetiva cósmica que conecta con la Inteligencia Universal','El ego y el superego freudianos','La mente individual y la colectiva junguiana'],ans:1,exp:'Lewis enseñaba que el ser humano accede a dos niveles: la personal-objetiva que razona, y la cósmica-subjetiva conectada con la Mente Universal.'},
    {q:'¿Cuál es la visión de Lewis sobre la salud y la enfermedad?',ops:['Rechazó cualquier conexión entre mente y enfermedad','Toda enfermedad tiene una causa mental-espiritual primaria que puede abordarse mediante la mente cósmica','Solo aceptó la medicina convencional','La enfermedad es un castigo kármico inevitable'],ans:1,exp:'Lewis integró la comprensión de Quimby con la tradición rosacruista: la enfermedad es una desarmonía entre la mente personal y la Mente Cósmica.'},
    {q:'¿Por qué Lewis es el exponente más directamente relevante para un miembro de AMORC?',ops:['Porque escribió en español','Porque es el fundador de la organización a la que el estudiante pertenece y sus enseñanzas son el marco filosófico oficial de los grados','Porque fue el único esotérico que rechazó la Masonería','Porque sus libros son los más baratos'],ans:1,exp:'Como miembro de AMORC, usted estudia directamente el sistema que Lewis construyó. Conocer su filosofía explícita permite integrar conscientemente el N.P. con la tradición rosacruista.'}
  ]},
};

export function AdeptTrial({ codex }) {
  const { state, recordAnswer } = codex;
  const [sel, setSel] = useState(null);
  const [qs, setQs] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [done, setDone] = useState(false);

  const start = (author) => {
    setSel(author);
    setQs([...QUIZZES[author].preguntas].sort(() => Math.random() - .5));
    setIdx(0); setScore(0); setAnswered(null); setDone(false);
  };

  const answer = (i) => {
    if (answered !== null) return;
    const correct = qs[idx].ans === i;
    setAnswered({ chosen: i, correct });
    if (correct) setScore(s => s + 1);
    recordAnswer(sel, idx, correct);
  };

  const next = () => {
    if (idx + 1 >= qs.length) { setDone(true); return; }
    setIdx(i => i + 1); setAnswered(null);
  };

  const pct = Math.round(((idx) / qs.length) * 100);

  if (!sel) return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>Demuestra lo que has aprendido</p>
        <h1 className={styles.title}>Prueba del <em>Adepto</em></h1>
        <p className={styles.sub}>Elige un maestro para comenzar la prueba de su obra principal</p>
      </div>
      <div className={styles.grid}>
        {Object.entries(QUIZZES).map(([author, q]) => {
          const correct = q.preguntas.filter((_,i) => state.quiz?.[`${author}-${i}`] === true).length;
          return (
            <button key={author} className={styles.authorBtn} onClick={() => start(author)}>
              <span className={styles.authorName}>{author}</span>
              <span className={styles.authorObra}>{q.obra}</span>
              <span className={styles.authorScore}>{correct}/{q.preguntas.length} correctas</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (done) return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>Prueba completada</p>
        <h1 className={styles.title}><em>{sel}</em></h1>
      </div>
      <div className={styles.results}>
        <div className={styles.resultScore}>{score}/{qs.length}</div>
        <p className={styles.resultLabel}>respuestas correctas</p>
        <p className={styles.resultMsg}>
          {score === qs.length ? '"La mente perfectamente entrenada reconoce la verdad."'
            : score >= 4 ? '"El conocimiento se convierte en sabiduría cuando se interioriza profundamente."'
            : '"El primer paso de la sabiduría es reconocer lo que aún no sabemos."'}
        </p>
        <button className={styles.retryBtn} onClick={() => start(sel)}>Repetir prueba</button>
        <button className={styles.retryBtn} onClick={() => setSel(null)}>Elegir otro maestro</button>
      </div>
    </div>
  );

  const q = qs[idx];
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.eye}>{sel} · {QUIZZES[sel].obra}</p>
        <h1 className={styles.title}>Prueba del <em>Adepto</em></h1>
      </div>
      <div className={styles.quizWrap}>
        <div className={styles.quizMeta}>
          <span className={styles.quizCtr}>Pregunta {idx+1} de {qs.length}</span>
          <span className={styles.quizScore}>Correctas: {score}</span>
        </div>
        <div className={styles.progTrack}><div className={styles.progFill} style={{width:`${pct}%`}}/></div>
        <div className={styles.qCard}>
          <p className={styles.qText}>{q.q}</p>
          <div className={styles.opts}>
            {q.ops.map((op, i) => {
              let cls = styles.opt;
              if (answered !== null) {
                if (i === q.ans) cls = `${styles.opt} ${styles.optCorrect}`;
                else if (i === answered.chosen && !answered.correct) cls = `${styles.opt} ${styles.optWrong}`;
              }
              return <button key={i} className={cls} onClick={() => answer(i)} disabled={answered !== null}>{op}</button>;
            })}
          </div>
        </div>
        {answered && (
          <div className={`${styles.feedback} ${answered.correct ? styles.fbCorrect : styles.fbWrong}`}>
            {answered.correct ? '✦ Correcto. ' : '✗ No exactamente. '}{q.exp}
          </div>
        )}
        {answered && (
          <button className={styles.nextBtn} onClick={next}>
            {idx + 1 >= qs.length ? 'Ver resultados →' : 'Siguiente →'}
          </button>
        )}
      </div>
    </div>
  );
}
