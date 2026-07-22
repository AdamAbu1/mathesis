# Mathesis — a history of mathematical ideas

Personal learning app, sibling of Philosophia (~/Desktop/philosophy): chalk-on-
slate atlas of 53 mathematicians AND 28 first-class ideas, cross-linked. The
mission test for all content (SCOPE.md, owner-signed): **"change the way I look
at the world and help me understand math on a more fundamental level."**
Theory and explanation only — never computation.

## Product rules (owner decisions)
- **No quiz / test / assessment mechanics** — inherited from Philosophia, verbatim.
- **No computation**: no calculators, drills, problem sets, or step-by-step
  derivations anywhere — including the agent (enforced in its system prompt).
  Formulas are artifacts to look at, explained in words.
- Ideas are first-class: every idea entry is spark → move → **world**, and
  `world` (what it does to how you see reality) is load-bearing — test-enforced
  minimum length. An idea that can't answer it doesn't ship.
- Entry renders inline below the view (no pop-out drawer — sibling precedent).
- Roster is 53 (scope doc miscounted 50 at sign-off; nothing was trimmed
  without owner say). No bench: near-misses live in SCOPE.md's
  carried-in-essays ledger.

## Structure (delta from Philosophia — see its CLAUDE.md for the base machinery)
- `src/data.js` — 10 eras (−2000..2026), 53 figures (blurb, line, influences,
  tradition: egypt/greek/china/india/islam/west), PLACES, MacTutor+Wikipedia
  links. `MATHEMATICIANS` replaces `PHILOSOPHERS` everywhere.
- `src/ideas.js` — NEW: the 28-idea ledger {id, name, year, place, parents,
  people, spark, move, world, line, web:[x,y]} + computed ideaChildren,
  ideaEdges, ideasAcyclic(). Genealogy is curated and acyclic (test-enforced);
  `web` positions are hand-laid (0–100 × 0–60), min spacing test-enforced.
- `src/IdeaWeb.jsx` — NEW view: SVG chalk genealogy graph (28 nodes — SVG is
  fine at this scale, no canvas needed). Selection lights ancestry yellow,
  descent blue, dims the rest. Far-edge labels anchor start/end to avoid clip.
- `src/App.jsx` — selection is {kind: 'person'|'idea', id}; view toggle
  THE WORLD ⇄ THE WEB OF IDEAS. Selecting a person forces globe, an idea
  forces web. `smartSelect(id)` resolves chips across both atlases — codex,
  agent, and search all route through it.
- `src/DetailPanel.jsx` — two modes: person (portrait w/ chalk placeholder
  until M3, bio/ideas/works/legacy, influence edges, lifeline) and idea
  (spark/move/world with colored caps, people + parent/child chips).
- `src/Globe.jsx` — Philosophia's canvas globe, chalk-themed: INK=chalk,
  PAPER=slate, slate ocean tile + chalk-stipple land, rose connection rings,
  yellow journey routes, Chalkduster labels. Same interaction contracts
  (3px click threshold, NO pointer capture, event-driven draw()).
- `src/agent.js` — "Ask Mathesis": guide persona is Lady Mathesis; BYOK
  (localStorage key mathesis.apiKey), same three modes. Ideas ride in
  retrieval (serializeIdea; contextIds matches idea names per-word) and in the
  [[id]] marker protocol — chips resolve via chipName() across both atlases.
  Default symposium: Newton v Leibniz. Both laws in SHARED_RULES.
- `src/itineraries.js` — 5 journeys (zero, certainty, infinity, language of
  nature, chance). Bar toggle reads "journeys".
- `src/voice.js` — casting updated: FEMALE_IDS = hypatia/germain/kovalevskaya/
  noether/mirzakhani (NB: John Conway ≠ Philosophia's Anne Conway), AGE_PREF
  keyed on the 10 math eras, accents on the new tradition ids.
- `src/styles.css` — blackboard theme. Variable NAMES kept from Philosophia
  (--ink IS chalk, --paper IS slate) so component rules read unchanged.
  Chalk font for headings/labels only; body text stays serif (owner rule).
  Chalk-dust grain via body::after SVG noise.
- `mockups/blackboard.html` — M1 identity mockup (owner-approved look).

## Content status
- M2 (done): all 53 figure entries + 72 annotated influence edges + all 28
  idea essays written compact-but-real. Don't ship lorem, ever.
- M3 assets (done): 53 chalk portraits + Lady Mathesis medallion
  (portraits/mathesis.jpg) + 53 thumbs + 10 era emblems, generated via
  nano_banana_pro (white chalk on slate, 3:4). Full-res PNG originals live
  OUTSIDE the repo in ~/Desktop/Mathesis-portrait-originals (don't recommit).
  Both asset tests un-skipped and green. NOTE: Erdős/Mirzakhani/Wiles portraits
  are era-archetype likenesses, not named individuals — the model refused the
  named-likeness prompts (recent real people); reword as archetype if regenerating.
- M3 remaining: WORK_LINKS curation + link verification, and optional content
  deepening of the compact entries.
- M4: living chalk portraits + voice register; M5: deploy to
  https://github.com/AdamAbu1/mathesis (Pages), icons, bundled chalk webfont
  (Chalkduster is macOS-only — phones need a bundled font).

## Commands
- `npm run dev` (vite; .claude/launch.json has autoPort — 5173 often held by
  the Philosophia session) · `npm test` (vitest, 126 tests — keep green) ·
  `npm run build`

## Known quirks
- Claude Code Browser pane: rAF suspended when hidden AND screenshots can
  return stale/blank frames even after re-fronting. Verify via DOM/JS checks
  (get_page_text, dispatched events) — the app code is correct; don't "fix" it.
  Idle spin / play sweep / fly-to tween only animate in a real browser.
- Globe medallions at zoom ≥3 draw empty chalk circles until M3 thumbs exist
  (thumbFor 404s are silent). Era emblem <img> hides itself onError until M3.
