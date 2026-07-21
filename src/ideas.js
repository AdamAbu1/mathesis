// The idea ledger: first-class entries for the great mathematical ideas.
// Schema (SCOPE.md): id, name, year (approximate emergence, for the time
// lens), place (where it emerged, when meaningful), parents (idea genealogy,
// acyclic — test-enforced), people (roster ids, reverse-linked), and the
// essay: spark (the crisis that forced it), move (the idea in plain
// language), world (REQUIRED — how it changes the way you see everything),
// line (signature one-liner). web: [x, y] hand-curated position on the
// idea-web canvas (0–100 × 0–60), roughly chronological left to right.
// M2 seed pass: compact but real. The M3 content pass deepens these.

export const IDEAS = [
  {
    id: 'counting', name: 'Counting', year: -3000, place: null, parents: [],
    people: ['ahmes'], web: [4, 26],
    line: 'One sheep, one pebble.',
    spark: 'Herds to tally, grain to store, taxes to levy — and memory too small to hold them.',
    move: 'Match things against tokens, one for one, and the tokens against words in a fixed order. Number is born as the thing that is left when you forget what you were counting.',
    world: 'Counting is humanity’s first abstraction — the discovery that seven goats, seven days, and seven stars share something that is none of them. Every mathematics that follows is an elaboration of that act of forgetting.',
  },
  {
    id: 'zero', name: 'Place-value & zero', year: 628, place: 'Ujjain', parents: ['counting'],
    people: ['aryabhata', 'brahmagupta', 'alkhwarizmi', 'fibonacci'], web: [20, 10],
    line: 'Nothing, promoted to number.',
    spark: 'Position-based numerals need a mark for an empty column — and then someone must decide whether the mark is a number or a hole.',
    move: 'Brahmagupta gave the mark laws: a − a = 0, a + 0 = a, a × 0 = 0. Zero joins the citizenry; negatives follow as debts. Arithmetic becomes closed, mechanical, and infinitely scalable.',
    world: 'That “nothing” can be operated on is one of civilization’s strangest and most productive thoughts. Every ledger, algorithm, and computer word is built on a symbol for absence — the empty column that runs the world.',
  },
  {
    id: 'proof', name: 'Proof', year: -550, place: 'Miletus', parents: [],
    people: ['thales', 'pythagoras', 'liuhui'], web: [11, 38],
    line: 'True for every triangle, or not mathematics.',
    spark: 'Recipes worked — fields got measured, pyramids built. But a recipe checked a thousand times can still fail on the thousand-and-first.',
    move: 'Derive the claim from things already granted, by steps no one can refuse. Then it holds not for the cases you tried but for every case there could ever be.',
    world: 'Proof is the only method humans have found for being certain of anything universal. Once you have tasted knowledge with a warranty, every other kind — authority, custom, induction — feels provisional. It is the closest thing thought has to a superpower.',
  },
  {
    id: 'axiom', name: 'The axiomatic method', year: -300, place: 'Alexandria', parents: ['proof'],
    people: ['euclid', 'hilbert'], web: [20, 52],
    line: 'State your assumptions; derive the rest.',
    spark: 'Proofs chain backwards — each fact resting on earlier facts. Either the chain regresses forever, or it must be anchored somewhere, openly.',
    move: 'Euclid anchored all of geometry on five postulates and derived four hundred theorems. Certainty becomes architecture: foundations declared, everything above them load-bearing and inspectable.',
    world: 'The axiomatic method is honesty as a system: here is what I assume, here is what follows. Constitutions, legal codes, and scientific theories all imitate it — and its deepest lesson came late: change the assumptions, and new worlds, equally rigorous, appear.',
  },
  {
    id: 'irrational', name: 'The irrational', year: -450, place: 'Croton', parents: ['proof'],
    people: ['pythagoras'], web: [17, 44],
    line: 'The diagonal fits no ruler.',
    spark: 'The Pythagorean creed: everything is whole numbers and their ratios. Then someone asked about the diagonal of a square with side one.',
    move: 'Suppose √2 = p/q in lowest terms; then p² = 2q², so p is even, so q is even — contradiction. No ratio measures the diagonal. Proof, the school’s own weapon, slays its central doctrine.',
    world: 'The first crisis of foundations: reality outruns the numbers you believed in, and honest reasoning forces the admission. Mathematics grows by such humiliations — the “irrational” is not the unreasonable but the truth your current language cannot say.',
  },
  {
    id: 'infinity', name: 'The infinite', year: -450, place: 'Elea', parents: ['irrational'],
    people: ['zeno', 'galileo', 'cantor'], web: [26, 40],
    line: 'Some infinities are bigger than others.',
    spark: 'Zeno weaponized it: infinitely many half-gaps between Achilles and the tortoise. Galileo found the squares pairing off with all the numbers and shelved the scandal.',
    move: 'Cantor made the pairing the definition: two sets are equal in size when they match one to one. The integers match the fractions — but provably cannot match the points of a line. Infinity comes in sizes, and the ladder of them never ends.',
    world: 'The infinite is where intuition dies and method proves itself: a realm no one has seen, mapped with more precision than geography. That the human mind can grade infinities is the strongest evidence of how far past experience reason reaches.',
  },
  {
    id: 'algebra', name: 'Algebra', year: 820, place: 'Baghdad', parents: ['zero'],
    people: ['alkhwarizmi', 'khayyam', 'cardano'], web: [31, 16],
    line: 'Name the unknown and hunt it.',
    spark: 'Inheritances, dowries, land splits — problems where the answer is entangled in its own conditions and must be fished out.',
    move: 'Treat the unknown as a thing — a “root” — with operations for isolating it: restore (al-jabr), balance (al-muqabala). The problem class, not the problem, becomes the object, and solving becomes a discipline.',
    world: 'Algebra is the habit of reasoning about what you don’t yet know as if you held it — the template for every model in science and finance. Once unknowns have names, the future, the invisible, and the hypothetical all become calculable.',
  },
  {
    id: 'vanishing', name: 'The vanishing point', year: 1420, place: 'Florence', parents: [],
    people: [], web: [37, 56],
    line: 'Parallel lines meet at the horizon.',
    spark: 'How do you paint depth onto a flat wall? Brunelleschi stood at the cathedral door with a painted panel and a mirror and showed there is an exact geometric answer.',
    move: 'Every family of parallel edges aims at one point in the picture; the horizon is the line collecting those points. Add them to the plane and you get a geometry with no parallels at all — perspective made rigorous, by Desargues, as projective geometry.',
    world: 'The first crack in the belief that Euclid’s is THE geometry — opened not by mathematicians but by painters. And the discovery runs on your own hardware: stand between rails and watch them touch. You are seeing your visual system do projective geometry in real time.',
  },
  {
    id: 'symbol', name: 'Symbolic thought', year: 1591, place: null, parents: ['algebra'],
    people: ['viete', 'descartes', 'leibniz'], web: [43, 12],
    line: 'Write the form of every problem at once.',
    spark: 'Algebra in words — “the thing, multiplied by itself, added to ten of the thing” — drowns in its own prose by the third step.',
    move: 'Viète: letters for unknowns AND knowns, so ax² + bx = c states every quadratic at once. Leibniz: choose symbols that carry the method inside them, so the notation computes alongside you.',
    world: 'Good notation is cognition outsourced to paper — thoughts too heavy for a head become finger-work. Everything from physics to programming is downstream of the discovery that the right symbols think with you.',
  },
  {
    id: 'coordinates', name: 'The coordinate plane', year: 1637, place: null, parents: ['symbol'],
    people: ['descartes', 'fermat'], web: [48, 30],
    line: 'Every curve an equation.',
    spark: 'Two mature sciences, geometry and algebra, sat side by side speaking different languages — shape versus symbol.',
    move: 'Lay two axes; a point becomes a pair of numbers, a curve becomes an equation, intersection becomes simultaneous solution. A full dictionary between the visual and the symbolic.',
    world: 'Every graph you have ever read uses this dictionary — data as position, relationship as shape. It is so absorbed into thinking that we forget it was invented: the idea that anything varying can be drawn, and anything drawn can be calculated.',
  },
  {
    id: 'chance', name: 'Chance', year: 1654, place: null, parents: ['counting'],
    people: ['cardano', 'fermat', 'pascal', 'laplace', 'kolmogorov'], web: [46, 4],
    line: 'Count the futures.',
    spark: 'A gambler’s dispute: the game is interrupted mid-match — how should the stakes be split? Fortune seemed, by definition, beyond calculation.',
    move: 'Pascal and Fermat: enumerate the equally possible continuations and weigh each outcome by its share. Expectation is born; Kolmogorov later grounds it all in three axioms — probability as measure.',
    world: 'The single most practical idea in this atlas: uncertainty itself became a quantity. Insurance, medicine, physics, forecasting, machine learning — modernity is the civilization that learned to calculate with what it does not know.',
  },
  {
    id: 'calculus', name: 'The calculus', year: 1665, place: null, parents: ['coordinates', 'infinity'],
    people: ['madhava', 'newton', 'leibniz', 'euler'], web: [54, 34],
    line: 'Motion, caught at an instant.',
    spark: 'Zeno’s arrow, still hanging: what is speed AT an instant? And curves — how steep here, how much area under, exactly?',
    move: 'Chase the ratio of vanishing differences; sum infinitely many vanishing slices. Derivative and integral, secretly inverse to each other — change and accumulation, unified in one machine.',
    world: 'The calculus is the mathematics of anything that flows — planets, populations, prices, currents. It converted “the world changes” from lament into equations, and every dynamical law of physics since has been written in it.',
  },
  {
    id: 'limit', name: 'The limit', year: 1821, place: null, parents: ['calculus', 'infinity'],
    people: ['archimedes', 'cauchy'], web: [60, 42],
    line: 'As close as anyone demands.',
    spark: 'The calculus worked magnificently — on infinitesimals no one could define. Bishop Berkeley’s taunt stood: “ghosts of departed quantities.”',
    move: 'Cauchy: a limit is not a mystical arrival but a challenge met — the terms eventually stay as close to the target as any critic demands. The infinite becomes a figure of speech for a finite, checkable game.',
    world: 'The limit shows how to keep the power of an idea while expelling its ghosts — rigor as renovation rather than demolition. It answers Zeno in full, and it is the standard for what mathematics means by “exact” about the endless.',
  },
  {
    id: 'impossible', name: 'The impossible number', year: 1545, place: null, parents: ['algebra'],
    people: ['cardano', 'euler', 'gauss'], web: [40, 26],
    line: '√−1 works before it exists.',
    spark: 'Cardano’s cubic formula sometimes routes REAL answers through square roots of negatives — the impossible as a stepping stone to the true.',
    move: 'Calculate anyway. Three centuries of guilty use later, the “imaginary” unit gets a home: a plane where multiplying by i is a quarter-turn. Euler harnesses it — e^iπ + 1 = 0 — and analysis doubles its reach.',
    world: 'The deepest lesson in mathematical courage: an object can earn existence by usefulness before anyone can say what it is. Today alternating current, quantum amplitudes, and signal processing all run on the number that was a scandal.',
  },
  {
    id: 'noneuclid', name: 'The parallel postulate falls', year: 1829, place: 'Kazan', parents: ['axiom', 'vanishing'],
    people: ['khayyam', 'lobachevsky', 'gauss'], web: [60, 56],
    line: 'Euclid’s is a geometry, not the geometry.',
    spark: 'Two thousand years of trying to prove the fifth postulate from the other four — every “proof” smuggling it back in disguise.',
    move: 'Assume it false and build: through a point, many lines miss a given line. No contradiction comes — only a coherent world of thin triangles and diverging parallels. The postulate was never a truth; it was a choice.',
    world: 'The most philosophical result in this atlas: even geometry — certainty’s stronghold — describes A world, not THE world. Axioms are commitments, not observations. Every relativism and every liberation in modern thought has this theorem somewhere in its ancestry.',
  },
  {
    id: 'curvedspace', name: 'Curved space', year: 1854, place: 'Göttingen', parents: ['noneuclid', 'coordinates'],
    people: ['gauss', 'riemann'], web: [68, 52],
    line: 'Space bends; geometry is physics.',
    spark: 'If geometry is a choice, which geometry does our universe make? Gauss’s theorem whispered: curvature can be measured from inside.',
    move: 'Riemann: space is a manifold with a distance rule that may vary point to point — curvature as a local, intrinsic quantity, in any dimension. Sixty years later Einstein finds the geometry waiting: matter tells space how to curve.',
    world: 'You live inside this idea: GPS corrects for it daily. Space is not the stage of physics but an actor — and the shortest path between truths, like between points, may be curved.',
  },
  {
    id: 'symmetry', name: 'Symmetry & groups', year: 1832, place: 'Paris', parents: ['algebra'],
    people: ['galois', 'abel', 'noether'], web: [64, 14],
    line: 'The operations form a world of their own.',
    spark: 'Why do some equations yield formulas and others — the quintic — provably none? The answer was not in the coefficients.',
    move: 'Galois: study the shufflings of the roots that preserve all their relations. These operations compose, invert, and close — a group. Solvability is a property of that group’s architecture, not of any formula.',
    world: 'Symmetry became a THING — measurable, comparable, classifiable — and turned out to be nature’s bookkeeping: Noether proved every symmetry of physical law conserves a quantity. When physicists seek deeper laws, they are hunting bigger symmetries. Beauty, made technical, became fundamental.',
  },
  {
    id: 'structure', name: 'Structure', year: 1921, place: 'Göttingen', parents: ['symmetry', 'axiom'],
    people: ['noether', 'hilbert', 'grothendieck'], web: [74, 18],
    line: 'Study the pattern, not the things.',
    spark: 'Number systems, polynomial rings, symmetry groups, transformations — the same theorems kept getting proved separately in each.',
    move: 'Noether: prove them once, about any system satisfying the axioms — rings, ideals, modules. Grothendieck pushes further: understand an object entirely by its relationships to all others. Mathematics becomes the science of pattern as such.',
    world: 'The signature move of the modern mind: rise until your problem becomes an instance, and the general theorem does the work. Category-thinking now organizes physics, computation, and linguistics — the same shape, wherever it occurs, is the same knowledge.',
  },
  {
    id: 'sets', name: 'Sets', year: 1874, place: 'Halle', parents: ['infinity'],
    people: ['cantor', 'vonneumann'], web: [70, 38],
    line: 'Everything, built from collections.',
    spark: 'Analysis kept tripping over “collections” of points; Cantor’s infinities needed a home; mathematics wanted one foundation under all its buildings.',
    move: 'Take “set” as primitive. Numbers, functions, spaces — all constructible from nested collections, starting from the empty set alone. Then Russell’s paradox (the set of sets not containing themselves) forces careful axioms: naive collecting is inconsistent.',
    world: 'Mathematics discovered it could rebuild everything from nothing — literally from ∅ — and also that its foundation stones must be laid with legal care. The dream of one universal language of structure, and the paradoxes at its edge, both live here.',
  },
  {
    id: 'logic', name: 'Logic as calculation', year: 1854, place: 'Cork', parents: ['proof', 'symbol'],
    people: ['leibniz', 'boole', 'hilbert'], web: [58, 6],
    line: 'Reasoning becomes arithmetic.',
    spark: 'Leibniz’s dream — disputes settled by “let us calculate” — waited two centuries for someone to build the calculus of reasoning itself.',
    move: 'Boole: classes and propositions obey an algebra where x² = x; deduction is equation-solving. Frege and Hilbert extend it to quantifiers and formal systems: proof itself becomes a mathematical object.',
    world: 'Once reasoning is calculation, machines can do it — every circuit and program descends from this identification. And once proof is an object, mathematics can prove theorems about what proof can never do. The mind studying its own instrument: the strangest loop in science.',
  },
  {
    id: 'incompleteness', name: 'Incompleteness', year: 1931, place: 'Vienna', parents: ['logic', 'sets', 'axiom'],
    people: ['godel', 'hilbert'], web: [80, 8],
    line: 'Truth outruns proof.',
    spark: 'Hilbert’s program: formalize mathematics, prove it consistent by safe finite means, and certainty is secured forever.',
    move: 'Gödel numbers the statements so arithmetic can talk about itself, then constructs a sentence saying “I am not provable.” If the system is consistent, the sentence is true — and unprovable. And no such system can prove its own consistency.',
    world: 'The exactly-drawn boundary of formal certainty: any system rich enough to count contains truths it cannot reach. Delivered not as mysticism but as theorem — the honest terms on which all rigorous knowledge operates, and proof that mathematics can know its own limits.',
  },
  {
    id: 'machine', name: 'The machine', year: 1936, place: 'Cambridge', parents: ['incompleteness', 'logic'],
    people: ['turing', 'vonneumann'], web: [87, 12],
    line: 'Whatever can be described can be computed — and no more.',
    spark: 'Hilbert’s last stand: is there at least a mechanical procedure to decide every mathematical question? First, someone had to say what “mechanical” means.',
    move: 'Turing: a tape, a head, a table of states — and one universal machine that runs every other, given its description. “Computable” is now exact; the halting problem shows the exactness has holes; von Neumann builds the architecture.',
    world: 'The idea you are using right now. Computation is substrate-independent — silicon, brass, or neurons — so the machine is less an invention than a discovery about description itself. Its provable blind spots are the calculus of what no software, ever, can do.',
  },
  {
    id: 'primes', name: 'The primes', year: -300, place: 'Alexandria', parents: ['counting', 'proof'],
    people: ['euclid', 'eratosthenes', 'riemann', 'ramanujan', 'erdos'], web: [17, 22],
    line: 'The atoms of arithmetic keep their secret.',
    spark: 'Every number factors into primes, uniquely — the atoms of arithmetic. But the atoms arrive without pattern: 2, 3, 5, 7, 11 … who ordered these?',
    move: 'Euclid: they never end (four lines). Eratosthenes: sieve them. Riemann: their count is governed, exactly, by the zeros of one complex function — order beneath the noise, conjectured to lie all on one line.',
    world: 'The purest case of mathematics as exploration: objects nobody designed, patterns nobody chose, resisting the best minds for 23 centuries — while quietly encrypting every message you send. The Riemann Hypothesis is the mountain the subject still climbs.',
  },
  {
    id: 'topology', name: 'Shape without size', year: 1895, place: null, parents: ['curvedspace'],
    people: ['euler', 'poincare', 'mirzakhani'], web: [76, 46],
    line: 'The coffee cup is the doughnut.',
    spark: 'Königsberg’s stroll (Euler, 1736): the bridges puzzle needs no distances at all — only what connects to what. What kind of geometry is that?',
    move: 'Study properties that survive any stretching without tearing: connectedness, holes, boundaries. Poincaré builds the machinery — invariants that tell a sphere from a torus no matter how deformed.',
    world: 'Topology finds what is essential by ignoring everything negotiable — the skeleton under every shape. Networks, knots in DNA, phases of matter, the possible shapes of the universe: wherever “how is it connected?” matters more than “how big?”, this is the geometry in charge.',
  },
  {
    id: 'frequency', name: 'The frequency domain', year: 1822, place: 'Paris', parents: ['calculus'],
    people: ['fourier'], web: [62, 26],
    line: 'Every signal is a chord.',
    spark: 'Heat spreading through iron obeys an equation nobody could solve for arbitrary starting temperatures.',
    move: 'Fourier: write ANY profile as a sum of sines and cosines; each pure wave evolves simply; add them back up. The claim outran its proof by decades — and forced analysis to define its terms.',
    world: 'Reality has two descriptions — moment by moment, or frequency by frequency — and problems impossible in one are trivial in the other. Your ear performs this transform mechanically; your phone, numerically, thousands of times a second. Perspective-switching as an exact science.',
  },
  {
    id: 'chaos', name: 'Chaos', year: 1890, place: null, parents: ['calculus', 'chance'],
    people: ['poincare', 'mandelbrot', 'kolmogorov'], web: [78, 32],
    line: 'Determined, yet unpredictable.',
    spark: 'Laplace’s demon promised: perfect laws plus perfect knowledge equals perfect prediction. Poincaré, competing for a prize, checked with three bodies.',
    move: 'In the tangle he found orbits where unmeasurably small differences compound exponentially — determinism without predictability. Mandelbrot adds the geometry: the tangles are fractal, self-similar at every scale.',
    world: 'Why weather forecasts die at two weeks while eclipses are known to the second: lawfulness and forecastability come apart. Chaos rewrites what science can promise — understanding the system, without ever predicting the path.',
  },
  {
    id: 'information', name: 'Information', year: 1948, place: 'Bell Labs', parents: ['chance', 'machine'],
    people: ['shannon', 'kolmogorov'], web: [91, 24],
    line: 'Surprise, measured in bits.',
    spark: 'Engineers spoke of “amount of information” in a cable with no unit, no theorem, no idea whether noise set a hard limit.',
    move: 'Shannon: information is reduction of uncertainty, measured in binary answers — bits. Meaning is irrelevant to quantity; every channel has an exact capacity, and coding can approach it error-free.',
    world: 'Text, sound, image, DNA — one substance, one unit. The insight that information is physical yet meaning-free is why a single device in your pocket carries all media at once. Arguably the newest fundamental quantity science has, alongside energy and mass.',
  },
  {
    id: 'effectiveness', name: 'The unreasonable effectiveness', year: 1960, place: null,
    parents: ['curvedspace', 'symmetry', 'information'],
    people: ['pythagoras', 'galileo', 'newton', 'noether'], web: [96, 38],
    line: 'Why does the universe do math?',
    spark: 'Wigner’s 1960 essay put the accumulated miracle plainly: concepts invented for beauty — complex numbers, curved spaces, group theory — keep turning out to BE the physics, decades early.',
    move: 'This entry is the atlas’s capstone question, not a theorem. Candidate answers: we select the problems math fits (survivorship); minds evolved from the world’s regularities (naturalism); mathematics is the structure of any possible world (Platonism). None is settled.',
    world: 'Either the universe is deeply mathematical, or mathematics is deeply human, or the distinction fails somewhere interesting. Whichever it is, the fact remains the strangest in this atlas: marks on slate, made for their own beauty, keep predicting what the telescopes then see. Sit with that.',
  },
]

export const ideaById = Object.fromEntries(IDEAS.map(i => [i.id, i]))

// Reverse links: children of each idea (computed, like `influenced`).
export const ideaChildren = Object.fromEntries(
  IDEAS.map(i => [i.id, IDEAS.filter(j => j.parents.includes(i.id)).map(j => j.id)]),
)

// Genealogy edges as [parent, child] pairs, for the web view.
export const ideaEdges = IDEAS.flatMap(i => i.parents.map(p => [p, i.id]))

// True when the parents graph has no cycle (test-enforced invariant).
export function ideasAcyclic() {
  const seen = new Set()
  const stack = new Set()
  const visit = id => {
    if (stack.has(id)) return false
    if (seen.has(id)) return true
    seen.add(id)
    stack.add(id)
    const ok = (ideaById[id]?.parents ?? []).every(visit)
    stack.delete(id)
    return ok
  }
  return IDEAS.every(i => visit(i.id))
}
