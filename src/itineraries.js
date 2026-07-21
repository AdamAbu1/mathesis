// Journeys: curated expeditions across the globe. Each stop carries one line
// of connecting narration shown in the journey bar on arrival — the globe
// flies, the entry opens, the line explains why you are here now.
export const ITINERARIES = [
  {
    id: 'story-of-zero',
    name: 'The Story of Zero',
    blurb: 'How nothing became a number — from the Nile to the Ganges to Baghdad to Pisa.',
    stops: [
      { id: 'ahmes', line: 'Egypt reckons mightily — fractions, areas, pyramids — with no zero anywhere. The world before nothing was a number.' },
      { id: 'aryabhata', line: 'On the Ganges, digits mean what their position says — and a position can stand empty.' },
      { id: 'brahmagupta', line: 'Ujjain, 628: the empty mark becomes a citizen. Zero gets rules — and negative numbers arrive as debts.' },
      { id: 'alkhwarizmi', line: 'Baghdad translates Brahmagupta; the House of Wisdom writes the arithmetic of the nine figures and the sign 0.' },
      { id: 'fibonacci', line: 'A Pisan merchant’s son sells Europe on the new numerals. The ledger, the bank, and the equation follow.' },
    ],
  },
  {
    id: 'death-of-certainty',
    name: 'The Death of Certainty',
    blurb: 'From the Elements to incompleteness — the long unravelling of absolute foundations.',
    stops: [
      { id: 'euclid', line: 'Alexandria: all of geometry from five postulates. Certainty has an architecture — but the fifth beam never looked straight.' },
      { id: 'khayyam', line: 'Nishapur probes the parallel postulate and holds the strange geometry in his hands — filing it under error.' },
      { id: 'lobachevsky', line: 'Kazan, 1829: assume the postulate false, and no contradiction comes. Euclid’s is A geometry, not THE geometry.' },
      { id: 'riemann', line: 'Göttingen: space itself becomes a hypothesis — curvature varying point to point, awaiting a physicist.' },
      { id: 'hilbert', line: 'If axioms are choices, secure the choosing: formalize everything, prove it consistent. We must know — we will know.' },
      { id: 'godel', line: 'Vienna, 1931: any such system contains truths it cannot prove. The program dies by its own standards of rigor.' },
      { id: 'turing', line: 'And the residue of the dream is a machine — deciding what it can, provably blind to the rest. Your computer is certainty’s epitaph.' },
    ],
  },
  {
    id: 'taming-infinity',
    name: 'Taming Infinity',
    blurb: 'Two and a half millennia of learning to calculate with the endless.',
    stops: [
      { id: 'zeno', line: 'Elea: Achilles chases the tortoise through infinitely many gaps. The infinite enters mathematics as a weapon against motion.' },
      { id: 'archimedes', line: 'Syracuse traps the circle between polygons — closing in without end, rigorously. The infinite, put to work.' },
      { id: 'madhava', line: 'Kerala, 1400: π written as a sum that never ends. The unending becomes an instrument of exactness.' },
      { id: 'newton', line: 'The plague years: motion at an instant computed at last. Zeno’s arrow gets its answer — the limit.' },
      { id: 'cauchy', line: 'Paris defines what the pioneers only trusted: convergence policed, the infinite domesticated by quantifiers.' },
      { id: 'cantor', line: 'Halle counts the infinite itself — and finds some infinities bigger than others. The tower has no top.' },
    ],
  },
  {
    id: 'language-of-nature',
    name: 'The Language of Nature',
    blurb: 'The bet that the world is written in mathematics — and how it kept paying.',
    stops: [
      { id: 'pythagoras', line: 'Croton: halve the string, hear the octave. Harmony is ratio — maybe everything is.' },
      { id: 'galileo', line: 'Pisa rolls a ball down a ramp; the distances grow as the odd numbers. The book of nature shows its alphabet.' },
      { id: 'descartes', line: 'Every curve an equation: the dictionary in which laws of nature can be written down.' },
      { id: 'newton', line: 'One inverse-square law derives apple, Moon, tide, and comet. The bet pays in full.' },
      { id: 'fourier', line: 'Heat, sound, light — any signal at all — decomposed into pure waves. Nature’s second alphabet: frequency.' },
      { id: 'noether', line: 'Göttingen closes the loop: why are there laws? Because nature has symmetries — and every symmetry conserves something.' },
    ],
  },
  {
    id: 'history-of-chance',
    name: 'A History of Chance',
    blurb: 'From dice tables to the mathematics of everything uncertain.',
    stops: [
      { id: 'cardano', line: 'A gambling physician counts the equally possible cases — luck’s first ledger, written for survival at the table.' },
      { id: 'fermat', line: 'Toulouse, 1654: letters about an interrupted game. Count the futures that could happen.' },
      { id: 'pascal', line: 'Paris answers: weigh each stake by its likelihood. Expectation — the value of an uncertain thing.' },
      { id: 'laplace', line: 'Chance as measured ignorance: probability is what a demon would not need. Inference from effects to causes begins.' },
      { id: 'kolmogorov', line: 'Moscow, 1933: three axioms and chance becomes measure. The least lawful thing gets laws.' },
      { id: 'shannon', line: 'Bell Labs weighs surprise itself — information in bits. Uncertainty is not the enemy of knowledge; it is its unit.' },
    ],
  },
]

export const itineraryById = Object.fromEntries(ITINERARIES.map(r => [r.id, r]))
