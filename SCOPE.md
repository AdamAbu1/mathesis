# Mathesis — scope (founding document)

Sibling app to Philosophia (~/Desktop/philosophy). An interactive history of
mathematical *ideas* — theory and explanation, never computation. The success
criterion, in the owner's words: **"change the way I look at the world and help
me understand math on a more fundamental level."** Every entry is judged against
that sentence.

Owner decisions (2026-07-21): people + first-class ideas · fork Philosophia's
skeleton · new blackboard visual identity · global roster from day one · named
Mathesis (mathesis universalis — Descartes/Leibniz's universal science of order).

## The two atoms

Philosophy's natural atom is the thinker; math's is the **idea**. Mathesis has
both, cross-linked:

**People** (~48) live on the globe exactly as in Philosophia: birthplace point,
lifespan, influence arcs, portrait, persona chat. Schema unchanged
(`id, name, born, died, era, school→tradition, blurb, line, influences` +
details `{bio, ideas, works, legacy}`).

**Ideas** (~24) are first-class entries with their own schema:

```
{ id, name, year,            // approximate year of emergence (for the time lens)
  place,                     // where it emerged, when meaningful (zero → India)
  parents: [ideaId],         // the idea genealogy — proof → axiomatics → non-Euclidean → incompleteness
  people: [personId],        // who made it (reverse links computed, like `influenced`)
  spark,                     // the problem/crisis that forced it
  move,                      // the idea itself, in plain language
  world,                     // REQUIRED: how it changes the way you see everything
  line }                     // signature one-liner
```

`world` is the load-bearing field. If an idea entry can't say what it does to
your view of reality, it doesn't ship.

## Views

1. **The globe** — ported from Philosophia (canvas, d3-geo, time lens,
   constellation mode, itineraries) with people as chalk points, influence arcs
   as chalk strokes.
2. **The idea web** — the new view, and the heart of the app: ideas as nodes in
   a genealogy graph (parents → children), drawn as a chalk diagram. Selecting
   an idea highlights its ancestor/descendant chains and its people on the globe.
   Implementation note: this is constellation mode's sibling — reuse its
   edge-drawing machinery over the ideas graph rather than building a new renderer.
3. **Entries** — inline below the globe (owner precedent: no pop-out drawer).
   People entries as in Philosophia; idea entries render spark → move → world
   with people chips and parent/child idea chips that jump the web.

## Eras (time-lens bands, overlap allowed)

| id  | name                     | span        |
|-----|--------------------------|-------------|
| ori | Origins                  | −2000..−600 |
| gre | The Greek Miracle        | −600..415   |
| eas | The Eastern Millennium   | 200..1450   |
| isl | The House of Wisdom      | 780..1300   |
| ren | Renaissance              | 1170..1640  |
| rev | The Scientific Revolution| 1600..1730  |
| enl | The Age of Euler         | 1700..1830  |
| rig | The Age of Rigor         | 1800..1900  |
| fou | Crisis & Foundations     | 1880..1940  |
| mod | The Modern Age           | 1930..2026  |

## Draft roster (~48 firm + bench)

- **Origins**: Ahmes (the first named mathematician — Rhind papyrus).
  Babylonian place-value has no surviving name; the *idea* entry carries it.
- **Greek**: Thales, Pythagoras, Zeno of Elea, Euclid, Archimedes,
  Eratosthenes, Hypatia
- **Eastern**: Liu Hui, Aryabhata, Brahmagupta, Madhava
- **Islamic**: Al-Khwarizmi, Ibn al-Haytham, Omar Khayyam
- **Renaissance**: Fibonacci, Cardano, Viète, Napier
- **Revolution**: Descartes, Fermat, Pascal, Newton, Leibniz
- **Age of Euler**: Euler, Laplace, Fourier, Sophie Germain
- **Age of Rigor**: Gauss, Cauchy, Abel, Galois, Lobachevsky, Riemann, Cantor,
  Boole, Kovalevskaya, Poincaré
- **Foundations**: Hilbert, Noether, Ramanujan, Gödel
- **Modern**: Turing, von Neumann, Kolmogorov, Shannon, Grothendieck,
  Mandelbrot, Wiles, Mirzakhani

Count: 47. **Bench** (owner may swap in/out): Eudoxus, Diophantus,
Zu Chongzhi, Bhaskara II, al-Tusi, Galileo, Lagrange, Dedekind, Erdős, Conway.
Overlaps with Philosophia (Pythagoras, Hypatia, Descartes, Pascal, Leibniz) are
fine — different app, different portrait style, different emphasis.

## Draft idea ledger (~24)

counting · place-value & zero · proof · the axiomatic method · the irrational ·
the infinite · algebra · symbolic thought · the coordinate plane · chance ·
the calculus · the limit · the impossible number (complex) · the parallel
postulate falls · curved space · symmetry (groups) · structure (abstraction) ·
sets · logic as calculation · incompleteness · the machine (computability) ·
the primes · shape without size (topology) · the frequency domain (Fourier) ·
chaos · information · **the unreasonable effectiveness** (capstone node — math
and reality; the essay the whole app builds toward)

That's 27 listed; trim to ~24 in the content pass. Genealogy edges are curated
during writing, kept acyclic (test-enforced).

## Journeys (itinerary machinery, renamed)

1. **The Story of Zero** — Babylon → Brahmagupta → al-Khwarizmi → Fibonacci → Europe
2. **The Death of Certainty** — Euclid → Khayyam → Lobachevsky → Riemann → Hilbert → Gödel → Turing
3. **Taming Infinity** — Zeno → Archimedes → Madhava → Newton/Leibniz → Cauchy → Cantor
4. **The Language of Nature** — Pythagoras → Descartes → Newton → Fourier → Noether
5. **A History of Chance** — Cardano → Pascal/Fermat → Laplace → Kolmogorov → Shannon

## Visual identity — the blackboard

Full re-theme, no engraved-paper carryover:

- **Ground**: deep slate (green-black), chalk-dust grain, faint eraser smudges.
- **Ink**: chalk white for primary strokes/text; dusty classroom accents
  (yellow, rose, pale blue) used sparingly — e.g., idea-web edges by lineage.
- **Line quality**: hand-drawn — slight jitter/rounded caps on canvas strokes so
  the globe reads as a teacher's chalk drawing of the Earth. Influence arcs =
  chalk strokes; dashed = drew from, solid = shaped (grammar unchanged).
- **Type**: chalk handwriting face for headings/labels ONLY (bundled, not CDN);
  long-form body text in a clean readable serif, chalk-white. Readability of
  essays beats theme purity — owner rule.
- **Portraits**: regenerate the full set as white-chalk sketch on slate
  (nano_banana_pro, 3:4). Template:
  > White chalk sketch portrait of {NAME} ({DATES}), {one-line physical
  > descriptor}. Bust-length, three-quarter view. Hand-drawn chalk strokes on a
  > dark slate blackboard, visible chalk dust and light smudging, confident
  > single-line work, minimal shading. No text, no caption, no border.
- **Formulas are artifacts, not exercises**: shown as chalk-styled objects and
  explained in prose (e.g., e^iπ + 1 = 0 as a thing to *look at*). No KaTeX in
  v1 unless prose genuinely fails; decide during content pass.

## Carried over from Philosophia (unchanged architecture)

- Static site, no backend, BYOK Anthropic key in localStorage — don't add a proxy.
- **Ask Mathesis** agent: guide mode (retrieval over people + ideas), persona
  chat, symposium (Newton v Leibniz on the calculus priority dispute is the
  flagship), broadsheet publish. Guide medallion: allegorical "Lady Mathesis"
  chalk portrait.
- Voice pipeline (SpeechRecognition → sentence-streamed TTS, ElevenLabs BYOK
  optional), living portraits (kling on chalk portraits — verify style holds
  before batch), commonplace book, daily line, search, Vitest schema tests,
  GitHub Pages deploy (new public repo, milestone M5).

## Non-goals (owner law)

- **No quiz / test / assessment mechanics** — inherited verbatim from
  Philosophia. Knowledge expansion, not assessment.
- **No computation**: no calculators, graphing playgrounds, problem sets,
  drills, or step-by-step derivations. The agent explains concepts and history;
  it never assigns or checks exercises — enforced in its system prompt.
- No accounts, no backend, no auto-posting.

## Milestones

- **M0** — this document, committed. ✅ Code gated on owner sign-off.
- **M1** — blackboard mockup (static, one screen: slate + chalk globe + one
  person entry + one idea card) → owner approves the look before re-theming.
- **M2** — fork skeleton, strip philosophy content, re-theme, data model for
  people + ideas, roster on globe, idea web view, tests green.
- **M3** — content pass: all person entries, all idea essays (spark/move/world),
  journeys, portraits + emblems generated.
- **M4** — Ask Mathesis (guide/persona/symposium), voice, codex, daily line.
- **M5** — deploy (new GitHub Pages repo), phone install manifest.

## Open questions for the owner

1. Roster/bench swaps? (Galileo in? Erdős in?)
2. Idea ledger cuts to reach ~24 — anything above feel skippable, anything missing?
3. "Lady Mathesis" as the guide persona, or a historical guide (e.g., Hypatia)?
