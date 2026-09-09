# ⚔️ Ordo Mentis Aureae
### Sistema Iniciático de Nuevo Pensamiento y Estoicismo
**Arquitectura React · Estilo Dark Academia · Diseño de manuscrito antiguo**

---

## Estructura de carpetas

```
ordo-mentis-aureae/
│
├── index.html                      ← Punto de entrada HTML
├── vite.config.js                  ← Configuración de Vite + React
├── package.json                    ← Dependencias
│
└── src/
    ├── main.jsx                    ← Montaje de React en el DOM
    ├── App.jsx                     ← Raíz: navegación + lazy loading
    ├── App.module.css              ← Estilos globales del layout raíz
    │
    ├── data/
    │   └── lore.js                 ← TODOS los datos estáticos extraídos
    │       ├── EXP_DATA            ← 24 exponentes con 35 obras
    │       ├── TOTAL_OBRAS         ← 35 (calculado)
    │       ├── WEEK_PLAN           ← Plan semanal
    │       ├── MED_GUIDES          ← 6 guías de meditación
    │       ├── GRADOS_DATA         ← Los 7 grados iniciáticos
    │       ├── HABITS_DATA         ← 5 hábitos diarios
    │       ├── DIARIO_PROMPTS      ← 10 preguntas guía
    │       └── ARCANE_NAMES        ← Nomenclatura arcana de cada panel
    │
    ├── hooks/
    │   └── useCodex.js             ← Estado global → reemplaza ST + localStorage
    │       ├── state               ← done, notes, plan, diario, habitos, afirm...
    │       ├── toggleDone()        ← Marcar/desmarcar obra
    │       ├── saveNote()          ← Guardar anotación
    │       ├── saveEntry()         ← Entrada del diario
    │       ├── toggleHabit()       ← Marcar hábito del día
    │       ├── addAfirmacion()     ← Nueva afirmación
    │       ├── saveSession()       ← Sesión de meditación completada
    │       ├── recordAnswer()      ← Respuesta del quiz
    │       ├── completeGrado()     ← Completar grado iniciático
    │       └── saveInitEntry()     ← Registro iniciático de la Orden
    │
    ├── styles/
    │   └── arcane.css              ← Sistema de tokens visuales global
    │       ├── Variables CSS       ← Paleta: pergamino, tinta, oro desvanecido
    │       ├── Tipografía          ← Cormorant Garamond + EB Garamond
    │       ├── Componentes base    ← .arcane-card, .btn-arcane, .seal...
    │       └── Ornamentos          ← .ornament-line, .ornament-center...
    │
    └── components/
        │
        ├── navigation/
        │   ├── ArcaneNavigation.jsx        ← Nav fija con progreso arcano
        │   └── ArcaneNavigation.module.css
        │
        ├── panels/                         ← Un archivo por panel/sección
        │   ├── SanctumHome.jsx             ← Inicio: dashboard con anillos de progreso
        │   ├── StudyCodex.jsx      ✅      ← Plan de Estudio (IMPLEMENTADO)
        │   ├── StudyCodex.module.css ✅
        │   ├── Scriptorium.jsx             ← Links de libros por fase
        │   ├── AdeptTrial.jsx              ← Quiz "Prueba del Adepto"
        │   ├── InitiatesLog.jsx            ← Diario "Registro del Iniciado"
        │   ├── StoicMeditation.jsx         ← Meditación "Contemplatio"
        │   ├── DailyDiscipline.jsx         ← Hábitos "Disciplina Diaria"
        │   ├── SacredDecrees.jsx           ← Afirmaciones "Decretos Sagrados"
        │   ├── StoicPortico.jsx            ← Estoicismo "El Pórtico"
        │   └── MiOrden.jsx                 ← Orden personal + 7 grados
        │
        ├── layout/
        │   └── PanelWrapper.jsx            ← Wrapper común para todos los paneles
        │
        └── ui/                             ← Componentes atómicos reutilizables
            ├── ArcaneCard.jsx              ← Tarjeta con efecto de pergamino
            ├── ArcaneRing.jsx              ← Anillo de progreso SVG
            ├── ArcaneSeal.jsx              ← Checkbox arcano (el sello)
            ├── OrnamentDivider.jsx         ← Separador ornamental
            └── ArcaneToast.jsx             ← Notificaciones arcanas
```

---

## Nomenclatura arcana implementada

| Término original       | Término arcano              |
|------------------------|-----------------------------|
| Inicio / Dashboard     | Sanctum                     |
| Plan de Estudio        | El Códice Sagrado           |
| Links                  | Scriptorium                 |
| Quiz                   | Prueba del Adepto           |
| Diario                 | Registro del Iniciado       |
| Meditación             | Contemplatio                |
| Hábitos                | Disciplina Diaria           |
| Afirmaciones           | Decretos Sagrados           |
| Estoicismo             | El Pórtico                  |
| Mi Orden               | Mi Orden (conservado)       |
| Progreso general       | Desvelamiento de los Misterios |
| Obras completadas      | Manuscritos descifrados     |
| Marcar como leído      | Sellar (con símbolo ✦)      |
| Nota                   | Anotación / Inscripción     |
| Plan del día           | Tabla de hoy                |
| Estadísticas           | El Registro                 |
| Hábitos completados    | Sellos del día              |
| Racha                  | Llama viva                  |

---

## Sistema de diseño visual

### Paleta

| Token                | Valor hex              | Uso                            |
|----------------------|------------------------|--------------------------------|
| `--parchment-deep`   | `#0d0b07`              | Fondo principal                |
| `--parchment-surface`| `#221b0d`              | Superficie de tarjetas         |
| `--ink-primary`      | `#e8dcc8`              | Texto principal (marfil cálido)|
| `--ink-secondary`    | `#b8a882`              | Texto secundario (sepia)       |
| `--gold-bright`      | `#c8a84a`              | Acento dorado (uso mínimo)     |
| `--gold-mid`         | `#9b7d2e`              | Oro envejecido                 |
| `--seal-done`        | `#3a7a52`              | Verde musgo: completado        |

### Tipografía

- **Display / Títulos:** Cormorant Garamond 300–500 (Google Fonts)
- **Cuerpo / Etiquetas:** EB Garamond 400–500 (Google Fonts)
- **Sin sans-serif** — todo el sistema es serif, reforzando el feel de manuscrito

### Principios visuales

1. **Desgaste visible** — texturas de ruido en el fondo, bordes sin radius
2. **Luz de vela** — sombras cálidas, resplandores dorados sutiles en hover
3. **Pergamino, no vidrio** — sin glassmorphism; fondos opacos con warmth
4. **Sello, no checkbox** — el símbolo ✦ reemplaza el ✓ genérico
5. **Un acento** — solo el oro (#c8a84a) es vivo; todo lo demás es apagado

---

## Cómo ejecutar en desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:5173
```

## Cómo desplegar en GitHub Pages

```bash
# 1. En vite.config.js, descomentar:
#    base: '/mi-orden/',

# 2. Instalar gh-pages
npm install --save-dev gh-pages

# 3. En package.json, agregar:
#    "deploy": "vite build && gh-pages -d dist"

# 4. Ejecutar
npm run deploy
```

El enlace final sería:
```
https://raul7389.github.io/mi-orden/
```

---

## Estado de implementación

| Componente              | Estado        |
|-------------------------|---------------|
| `lore.js`               | ✅ Completo   |
| `arcane.css`            | ✅ Completo   |
| `useCodex.js`           | ✅ Completo   |
| `ArcaneNavigation.jsx`  | ✅ Completo   |
| `StudyCodex.jsx`        | ✅ Completo   |
| `App.jsx`               | ✅ Completo   |
| Resto de paneles        | 🔲 Pendiente  |

Los paneles pendientes siguen exactamente el mismo patrón de `StudyCodex.jsx`: reciben `{ codex }` como prop, usan `codex.state` para leer y las acciones de `useCodex` para escribir.

---

*Ordo Mentis Aureae — La mente domada forja la realidad · El carácter es el destino*
