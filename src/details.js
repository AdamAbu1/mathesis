// Long-form content per mathematician, merged into MATHEMATICIANS in data.js.
// Shape: { bio, ideas: [{title, text}], works: [string], legacy }
// M2 seed pass: compact but real. The M3 content pass deepens these.
export const DETAILS = {
  ahmes: {
    bio: 'A scribe of the Second Intermediate Period, Ahmes copied — and signed — a roll of 84 worked problems: bread-sharing, pyramid slopes, areas of fields, all in unit fractions. The roll he copied was already two centuries old; the mathematics was civic infrastructure.',
    ideas: [
      { title: 'Mathematics as administration', text: 'Egyptian reckoning existed to run a river kingdom — granaries, taxes, floods, pyramids. Number begins not as speculation but as the technology of living together.' },
      { title: 'The recipe, before the proof', text: 'The papyrus teaches by worked example: do it thus, and thus. What it never does is say why. The gap between recipe and reason is exactly what the Greeks will open.' },
    ],
    works: ['Rhind Mathematical Papyrus (c. 1550 BCE, copying a text two centuries older)'],
    legacy: 'The first mathematician with a name — and the baseline against which the invention of proof can be measured.',
  },
  thales: {
    bio: 'Merchant, engineer, and the first of the Seven Sages, Thales measured pyramids by their shadows, predicted the eclipse of 585 BCE by tradition, and is credited with the first geometric proofs — among them, that a circle is bisected by its diameter.',
    ideas: [
      { title: 'The proof', text: 'To show a fact holds for every circle — not this circle, drawn in this sand — is a new kind of claim about the world. Knowledge with a warranty: the single most consequential invention in this atlas.' },
      { title: 'Geometry leaves the field', text: 'Egyptian rope-stretchers measured actual land. Thales made the triangle an object of thought — and theorems about it, eternal.' },
    ],
    works: ['No writings survive — theorems credited by later tradition'],
    legacy: 'Every theorem since is downstream of the idea that mathematical statements can be proved rather than merely checked.',
  },
  pythagoras: {
    bio: 'Born on Samos, Pythagoras founded at Croton a community — part school, part cult, open to women — sworn to secrecy and to number. Whether he proved “his” theorem is doubtful; that his school made number a metaphysics is not.',
    ideas: [
      { title: 'Number as the nature of things', text: 'Halve a string and it sounds the octave: harmony is ratio. If music is number, perhaps everything is — the founding faith of mathematical physics, stated as religion.' },
      { title: 'The hypotenuse and the crisis', text: 'The theorem bearing his name contains its own bomb: the diagonal of a unit square is √2, and √2 is no ratio at all. The school allegedly drowned Hippasus for saying so — the first crisis of foundations.' },
    ],
    works: ['No writings — doctrines transmitted by his school'],
    legacy: 'The conviction that reality is mathematical runs from Croton through Galileo to every equation of modern physics.',
  },
  zeno: {
    bio: 'Parmenides’ student at Elea, Zeno wrote a book of paradoxes defending the thesis that motion and plurality are illusions. Aristotle preserved four; twenty-four centuries of mathematics have been paying them off.',
    ideas: [
      { title: 'Achilles and the tortoise', text: 'To catch the tortoise, Achilles must first halve the gap, then halve it again — infinitely many tasks in finite time. The paradox dissolves only when infinite series are allowed to have finite sums: the limit, twenty-two centuries early.' },
      { title: 'The arrow', text: 'At each instant the arrow occupies exactly its own length — so when does it move? The question of what happens “at an instant” is the question the derivative was invented to answer.' },
    ],
    works: ['Paradoxes (known through Aristotle)'],
    legacy: 'The infinite entered mathematics as a wound; calculus and the continuum are its slow healing.',
  },
  euclid: {
    bio: 'Of Euclid the man we know almost nothing — he taught at Alexandria under the first Ptolemy. Of Euclid the book: thirteen chapters running from “a point is that which has no part” to the five regular solids, each step resting on five postulates and nothing else.',
    ideas: [
      { title: 'The axiomatic method', text: 'State your assumptions once, openly, and derive everything from them alone. Truth becomes architecture: the Elements is certainty organized as a building, and every axiomatic system since is its descendant.' },
      { title: 'The fifth postulate', text: 'Four postulates are one-liners; the fifth — the parallel postulate — reads like a theorem that lost its proof. Two thousand years of attempts to prove it end with the discovery that it is a choice.' },
      { title: 'Infinitude of primes', text: 'Suppose the primes run out; multiply them all, add one. The result’s prime factors are new. Four lines, and the integers are shown to hold an inexhaustible supply of atoms.' },
    ],
    works: ['Elements (13 books)', 'Optics', 'Data'],
    legacy: 'The most influential textbook ever written — the template of rigor for Newton, Spinoza, Hilbert, and the American Declaration of Independence alike.',
  },
  archimedes: {
    bio: 'Son of an astronomer of Syracuse, Archimedes computed as no one would again for eighteen centuries: exhausting the circle between polygons, weighing the parabola on an imagined balance, bounding π between 3 10/71 and 3 1/7. He died at his diagrams in the Roman sack he had held off with machines.',
    ideas: [
      { title: 'The method of exhaustion', text: 'Trap a curved figure between straight-edged ones that close in without end. The circle’s area is caught, rigorously, by things that are not circles — the limit in all but name.' },
      { title: 'The mechanical method', text: 'His secret, recovered in a palimpsest in 1906: discover by imagining figures as physical things on a balance, then prove properly afterwards. Intuition and rigor as two strokes of one engine.' },
    ],
    works: ['On the Sphere and Cylinder', 'The Method', 'The Sand Reckoner'],
    legacy: 'The high-water mark of ancient mathematics; when Newton and Leibniz built the calculus, they were finishing his sentences.',
  },
  eratosthenes: {
    bio: 'Chief librarian of Alexandria, nicknamed “Beta” — second-best at everything — Eratosthenes heard that at noon in Syene the sun lit the bottom of a well, measured its angle at Alexandria the same hour, and computed the Earth’s circumference to within a few percent.',
    ideas: [
      { title: 'Measuring the unmeasurable', text: 'The Earth cannot be paced out — but an angle, a distance, and a proportion deliver it anyway. Mathematics as a lever: measure what you can reach, deduce what you cannot.' },
      { title: 'The sieve', text: 'List the numbers; strike every second after 2, every third after 3. What survives are the primes — an algorithm, mechanical and mindless, two millennia before machines to run it.' },
    ],
    works: ['On the Measurement of the Earth (lost, transmitted by Cleomedes)'],
    legacy: 'The founding demonstration that the cosmos itself is within reach of a stick, a shadow, and an argument.',
  },
  hypatia: {
    bio: 'Daughter of the mathematician Theon of Alexandria, Hypatia surpassed him, teaching mathematics and Neoplatonist philosophy to pagan and Christian students alike. In 415 a Christian mob pulled her from her chariot and killed her; the Alexandrian school never recovered.',
    ideas: [
      { title: 'The keeper of the canon', text: 'Her editions and commentaries — on Euclid’s tradition, Apollonius’ conics, Diophantus’ arithmetic — are part of why those texts survived at all. Transmission is not passive: what reaches the future is what someone chose to teach.' },
      { title: 'Mathematics at the end of a world', text: 'She computed astronomical tables while the institutions around her burned. Her death marks the closing of one mathematical civilization — and the baton passing east, to India and Baghdad.' },
    ],
    works: ['Commentaries on Diophantus and Apollonius (lost)', 'Edition of Ptolemy’s astronomical tables, with Theon'],
    legacy: 'The end of the Greek chapter and a permanent lesson: mathematical knowledge survives only where someone is left to teach it.',
  },
  liuhui: {
    bio: 'Working in the Wei kingdom around 263 CE, Liu Hui annotated the centuries-old Nine Chapters on the Mathematical Art — and where the classic gave rules, he gave reasons, dissecting figures and bounding the circle with polygons of 96, then 3,072 sides.',
    ideas: [
      { title: 'Proof, independently', text: 'His out-in dissections justify the Pythagorean rule; his polygon bounds justify π ≈ 3.1416. Deductive justification arose in China on its own terms — proof is a human move, not a Greek possession.' },
      { title: 'Exhaustion, eastern', text: '“The finer the cutting, the smaller the loss” — his own words for the limit idea, stated as method. Cut without end and the curved is captured by the straight.' },
    ],
    works: ['Commentary on the Nine Chapters (263)', 'Haidao Suanjing (Sea Island Manual)'],
    legacy: 'China’s greatest ancient mathematician, and the proof that mathematical reasoning has more than one birthplace.',
  },
  aryabhata: {
    bio: 'Writing at Kusumapura near the Ganges at age 23, Aryabhata compressed astronomy and mathematics into 121 verses: sine tables, the place-value system in word-numerals, π as 3.1416 “approaching” the true value, and a rotating Earth.',
    ideas: [
      { title: 'Position is power', text: 'His verses assume digits whose meaning depends on where they stand — the place-value idea that makes arithmetic scale. Rome, lacking it, could build aqueducts but not divide easily.' },
      { title: 'The heavens computed', text: 'Eclipses as shadows, planetary periods as cycles, the sky as something to calculate rather than consult. Indian astronomy made mathematics the instrument of cosmology.' },
    ],
    works: ['Aryabhatiya (499)'],
    legacy: 'The fountainhead of classical Indian mathematics — Brahmagupta, Bhaskara, and ultimately Baghdad drink from it.',
  },
  brahmagupta: {
    bio: 'Head of the observatory at Ujjain, Brahmagupta wrote the Brahmasphutasiddhanta in 628: the first text to treat zero as a number with arithmetic of its own, and debts (negatives) as calculable — with rules like “a debt times a debt is a fortune.”',
    ideas: [
      { title: 'Zero, promoted', text: 'A placeholder mark becomes a citizen: a − a = 0, a + 0 = a, a × 0 = 0. Once nothing is a number, the number line is whole — and equations can say “nothing remains,” which is what solving means.' },
      { title: 'The forbidden quotient', text: 'He faltered exactly where mathematics still draws its line: 0 ÷ 0 he left as itself. The honest failure marks the spot where limits, not arithmetic, would be needed.' },
    ],
    works: ['Brahmasphutasiddhanta (628)'],
    legacy: 'Zero and the negatives entered world mathematics here; Baghdad translated him within a century, and Europe got its numerals third-hand.',
  },
  madhava: {
    bio: 'Founder of the Kerala school at Sangamagrama, Madhava expanded π, the sine, and the arctangent as infinite series around 1400 — with error terms — anticipating results credited to Gregory, Newton, and Leibniz by more than two centuries.',
    ideas: [
      { title: 'Summing the unending', text: 'π/4 = 1 − 1/3 + 1/5 − ⋯: an exact value reached only by a sum that never ends. The infinite stops being a paradox and becomes an instrument.' },
      { title: 'The school as a vessel', text: 'His own writings are lost; his results survive in his students’ students, credited scrupulously to him. The Kerala lineage kept the flame for two centuries — but the world did not learn of it until the 1830s. Discovery is not enough; transmission decides.' },
    ],
    works: ['No works survive — series preserved and attributed by the Kerala school'],
    legacy: 'The calculus’s core move — the infinite series — worked out in Kerala while Europe slept; a standing correction to every purely European history of the subject.',
  },
  alkhwarizmi: {
    bio: 'A scholar at al-Ma’mun’s House of Wisdom in Baghdad, al-Khwarizmi wrote the compendium on al-jabr (restoration) and al-muqabala (balancing) — solving quadratics by completing the square, in words, for inheritances and dowries — and the arithmetic that carried Indian numerals into Arabic and then Latin.',
    ideas: [
      { title: 'Algebra as its own science', text: 'Not this problem or that, but the unknown as such, with named operations for isolating it. The subject stops being a bag of puzzles and becomes a discipline with a method.' },
      { title: 'The algorithm', text: 'His Latinized name became the word for it: a procedure so explicit that following it requires no understanding. Twelve centuries later, that idea runs the world.' },
    ],
    works: ['The Compendious Book on Calculation by Restoration and Balancing (c. 820)', 'On the Hindu Art of Reckoning'],
    legacy: '“Algebra” and “algorithm” are both his words — the discipline and the procedure, Baghdad’s twin gifts.',
  },
  alhaytham: {
    bio: 'Basra-born, Ibn al-Haytham reportedly feigned madness to escape engineering the Nile for an impatient caliph, and spent his Cairo confinement writing the Book of Optics: vision as geometry, tested by experiment — plus the summation formulas that measure paraboloids.',
    ideas: [
      { title: 'Geometry meets experiment', text: 'Light travels in lines; images invert in the camera obscura; refraction bends by rule. Hypotheses stated mathematically and then tested — the experimental method with geometry as its language.' },
      { title: 'Summing powers', text: 'To find the volume of a paraboloid he summed fourth powers — inventing the integration-adjacent formulas Europe would need centuries later for the calculus.' },
    ],
    works: ['Book of Optics (Kitab al-Manazir, c. 1015)', 'On the Measurement of the Paraboloid'],
    legacy: 'A founder of the experimental method — proof that the mathematization of nature was underway in Cairo while Europe’s lights were low.',
  },
  khayyam: {
    bio: 'Astronomer to the Seljuk court at Isfahan, Khayyam measured the year to eleven decimal places’ worth of calendar, classified and solved cubic equations by intersecting conics, and worried productively about Euclid’s parallel postulate. The Rubaiyat made him immortal twice.',
    ideas: [
      { title: 'Cubics by conics', text: 'Where algebra’s formulas failed, geometry answered: a cubic’s root is where a circle crosses a parabola. Algebra and geometry as one subject wearing two costumes — Descartes’ dictionary, drafted early.' },
      { title: 'Doubting the parallels', text: 'His quadrilateral — two right angles at the base, equal sides — forced the question: are the top angles right, acute, or obtuse? He could not prove them right. The acute case, patiently developed, IS non-Euclidean geometry; he was holding it and called it error.' },
    ],
    works: ['Treatise on Demonstration of Problems of Algebra (1070)', 'Rubaiyat'],
    legacy: 'The poet who nearly broke Euclid’s fifth postulate eight centuries early — geometry’s road not taken, taken at last by Lobachevsky.',
  },
  fibonacci: {
    bio: 'Leonardo of Pisa learned Hindu-Arabic reckoning in Béjaïa, where his father kept a trading post, and in 1202 wrote Liber Abaci to convert Europe: place-value numerals, fraction arithmetic, bookkeeping, and one throwaway puzzle about immortal rabbits.',
    ideas: [
      { title: 'The numerals land in Europe', text: 'Merchants adopted what scholars resisted: nine figures and a zero beat Roman letters at every sum. Arithmetic literacy — the quiet infrastructure of banking, navigation, and science — dates from this book.' },
      { title: 'The rabbit sequence', text: '1, 1, 2, 3, 5, 8 — each the sum of the last two. A toy that turned out to grow in sunflower heads, pinecones, and the golden ratio’s shadow; simple rules breeding unreasonable pattern.' },
    ],
    works: ['Liber Abaci (1202)', 'Liber Quadratorum (1225)'],
    legacy: 'Europe counts the way it counts because a Pisan merchant’s son wrote a persuasive textbook.',
  },
  cardano: {
    bio: 'Illegitimate, gambling-addicted, twice jailed, and the most famous physician in Europe, Cardano published in Ars Magna the cubic and quartic solutions — partly others’ work, honestly credited if bitterly disputed — and met square roots of negative numbers on the way.',
    ideas: [
      { title: 'The impossible number, used', text: 'Solving x(10−x)=40 demands 5 ± √(−15). “Putting aside the mental tortures,” he multiplied them anyway — and the arithmetic worked. Usefulness arrived centuries before legitimacy.' },
      { title: 'Chance made calculable', text: 'His book on dice — written for a gambler’s survival — counted outcomes and equated fairness with equal cases: the first sustained attempt to make luck an object of calculation.' },
    ],
    works: ['Ars Magna (1545)', 'Liber de Ludo Aleae (published 1663)'],
    legacy: 'The Ars Magna is algebra’s declaration of independence from geometry — and the complex numbers’ awkward birth certificate.',
  },
  viete: {
    bio: 'Lawyer, royal counselor, and breaker of Spanish ciphers for Henri IV, Viète wrote analysis with a new instrument: letters. Vowels for unknowns, consonants for knowns — so that for the first time one could write not a problem but the form of every problem.',
    ideas: [
      { title: 'The literal calculus', text: 'ax² + bx = c is not one equation but all of them. Notation that quantifies over problems lets mathematics prove theorems about equations in general — thought accelerated by typography.' },
      { title: 'Analysis restored', text: 'He saw himself reviving the ancients’ hidden method of discovery — assume the answer, name it, compute backwards. The modern habit of calling algebra “analysis” starts with his manifesto.' },
    ],
    works: ['In Artem Analyticem Isagoge (1591)'],
    legacy: 'Symbolic algebra — the notation in which Descartes, Newton, and everyone since has thought.',
  },
  napier: {
    bio: 'The eighth laird of Merchiston spent twenty years computing the tables that made him famous: logarithms, published in 1614, turning every multiplication into an addition. Kepler dedicated a book to him in gratitude; Briggs travelled north just to look at him.',
    ideas: [
      { title: 'Multiplication tamed', text: 'Map numbers to exponents and products become sums, roots become divisions. The hard operations collapse into easy ones — the first great example of solving by transforming the problem’s space.' },
      { title: 'Calculation as bottleneck', text: 'Astronomy in 1600 was drowning in arithmetic; logarithms, Laplace said, doubled the life of the astronomer. Tools that speed calculation change what science can attempt.' },
    ],
    works: ['Mirifici Logarithmorum Canonis Descriptio (1614)'],
    legacy: 'Three and a half centuries of slide rules, and the logarithm itself — the scale on which earthquakes, sound, and information are still measured.',
  },
  galileo: {
    bio: 'A lutenist’s son who turned a Dutch spyglass to the sky and a water-clock on a rolling ball. The telescope made him famous and the Inquisition made him a prisoner; his deeper act was quieter — insisting that the fall of a stone is a law written in number.',
    ideas: [
      { title: 'Nature speaks mathematics', text: 'Roll a ball down a ramp and the distances grow as the odd numbers — 1, 3, 5, 7 — the square law hiding inside plain falling. The claim that the physical world obeys number at bottom is the founding bet of modern science.' },
      { title: 'Galileo’s paradox', text: 'Every number has a square, so squares match numbers one-to-one — yet almost no numbers are squares. He concluded infinite collections defy comparison; Cantor took the same pairing and built the sizes of infinity from it.' },
    ],
    works: ['Dialogue Concerning the Two Chief World Systems (1632)', 'Two New Sciences (1638)'],
    legacy: 'Physics as mathematized experiment begins here; so does the modern meaning of “law of nature.”',
  },
  descartes: {
    bio: 'Soldier, gentleman of leisure, and philosopher of methodical doubt, Descartes appended La Géométrie to the Discourse in 1637: geometry done by equations on coordinates, curves classified by degree — a dictionary between shape and symbol.',
    ideas: [
      { title: 'The coordinate dictionary', text: 'A point is a pair of numbers; a curve, an equation; intersection, simultaneous solution. Every geometric question becomes algebraic and vice versa — two ancient subjects revealed as one.' },
      { title: 'Method over genius', text: 'His larger claim: right method makes discovery systematic. The Géométrie was offered as proof — solve by translating into the symbolic realm where rules do the work.' },
    ],
    works: ['La Géométrie (1637)'],
    legacy: 'The plane every graph is drawn on bears his name; the calculus is written in his dictionary.',
  },
  fermat: {
    bio: 'A magistrate at Toulouse who published almost nothing, Fermat did mathematics in letters and margins: maxima and tangents before calculus, coordinates independently of Descartes, probability jointly with Pascal, and number theory virtually alone — capped by the marginal note of 1637.',
    ideas: [
      { title: 'The margin', text: '“No cube is a sum of two cubes, nor any higher power likewise — I have a marvelous proof this margin is too narrow to contain.” Whether he had one is doubtful; that the claim organized 358 years of mathematics is not.' },
      { title: 'Adequality', text: 'To find a maximum, compare f(x) with f(x+e), treat e as vanishingly small, discard its traces. The derivative’s ghost, walking thirty years before Newton was born.' },
    ],
    works: ['Observations on Diophantus (posthumous, 1670)', 'Wrote almost nothing for print — the work lives in letters and margins'],
    legacy: 'Modern number theory’s founder — and proof that a question can be more generative than its answer.',
  },
  pascal: {
    bio: 'A prodigy whose father tried to keep mathematics from him, Pascal produced a theorem on conics at sixteen, a working calculating machine at nineteen, and — in the 1654 letters with Fermat over the Chevalier de Méré’s dice — the foundations of probability. That November he had a mystical night and largely left mathematics for God.',
    ideas: [
      { title: 'The geometry of chance', text: 'Interrupt a fair game: how to split the stakes? Count the equally possible futures. Expectation — value weighted by likelihood — turns fortune itself into a computable quantity.' },
      { title: 'The arithmetical triangle', text: 'The table of combinations, mined for identities by induction — a proof technique he made explicit. The triangle bears his name in the West; China and Persia knew it centuries earlier.' },
    ],
    works: ['Traité du triangle arithmétique (1654)', 'Pensées (posthumous)'],
    legacy: 'Probability begins as a correspondence between friends — and ends as the mathematics of every uncertain thing.',
  },
  newton: {
    bio: 'Born fatherless on Christmas day at Woolsthorpe, Newton spent the plague years 1665–66 inventing fluxions, dispersing white light, and intuiting universal gravitation — then sat on much of it for decades. The Principia (1687) derived the system of the world from three laws and one force.',
    ideas: [
      { title: 'The calculus of motion', text: 'The fluxion — the instantaneous rate at which a quantity flows — answers Zeno at last: motion at an instant is a limit, and it computes. Change itself becomes an operand.' },
      { title: 'One law, apple to Moon', text: 'The same inverse-square pull explains the falling apple, the Moon’s orbit, the tides, and the comets’ returns. Unification by mathematics: the sky and the ground obey one equation.' },
    ],
    works: ['Philosophiæ Naturalis Principia Mathematica (1687)', 'Opticks (1704)'],
    legacy: 'The Principia is the founding proof that Galileo’s bet pays: the world, derived from axioms like geometry.',
  },
  leibniz: {
    bio: 'Diplomat, historian, librarian, and philosopher of the best of all possible worlds, Leibniz built the calculus a second time — publishing first, in 1684, with the dx, dy, and ∫ we still use — and dreamed of a characteristica universalis in which all reasoning would be calculation.',
    ideas: [
      { title: 'Notation as engine', text: 'His symbols carry the method inside them: d(uv) = u dv + v du almost computes itself. Good notation is compressed thought — his outlived Newton’s dots because it thinks along with you.' },
      { title: 'Let us calculate', text: 'Disputes end, he proposed, when arguments are written in symbols and settled by computation. Three centuries early, this is the program of mathematical logic — and of the machines that now run it.' },
    ],
    works: ['Nova Methodus pro Maximis et Minimis (1684)', 'De Arte Combinatoria (1666)'],
    legacy: 'The calculus as we write it, and the dream — through Boole to Turing — of reasoning done by machine.',
  },
  euler: {
    bio: 'Son of a Basel pastor, student of Johann Bernoulli, court mathematician at St Petersburg and Berlin, Euler wrote a third of the century’s mathematics — 850 works — through the loss of one eye, then both. He calculated, his eulogist said, as men breathe.',
    ideas: [
      { title: 'Analysis unified', text: 'e^ix = cos x + i sin x: growth, rotation, and oscillation revealed as one phenomenon. At x = π it collapses to e^iπ + 1 = 0 — five fundamental constants in one identity, the most famous equation in mathematics.' },
      { title: 'The bridges of Königsberg', text: 'Can one walk crossing each bridge once? Euler saw the city as dots and links — no distances, only connection. Graph theory and topology begin with the insight that shape sometimes doesn’t matter.' },
    ],
    works: ['Introductio in Analysin Infinitorum (1748)', 'Letters to a German Princess (1768–72)'],
    legacy: 'The notation, the identities, the methods — modern mathematics speaks Euler the way Europe once spoke Latin.',
  },
  laplace: {
    bio: 'A Norman farmer’s son who rose through every French regime — mathematician, minister, marquis — Laplace spent decades proving the solar system stable, needing, as he told Napoleon, no hypothesis of divine adjustment. His probability treatise made chance a branch of analysis.',
    ideas: [
      { title: 'The demon', text: 'To an intellect knowing every particle’s position and force, “nothing would be uncertain; the future, like the past, present before its eyes.” Determinism stated at full strength — the claim chaos theory would spend a century qualifying.' },
      { title: 'Probability as refined common sense', text: 'Ignorance, quantified: probability measures what we don’t know, and updates as we learn. Inverse probability — reasoning from effects to causes — is Bayesian inference in all but name.' },
    ],
    works: ['Mécanique Céleste (1799–1825)', 'Théorie Analytique des Probabilités (1812)'],
    legacy: 'Celestial mechanics completed, probability founded — and determinism given its sharpest, most haunting formulation.',
  },
  fourier: {
    bio: 'Orphaned son of a tailor, revolutionary, Napoleon’s governor in Egypt, and prefect of Isère, Fourier claimed in his theory of heat that any function decomposes into sines and cosines. The claim scandalized Lagrange, was not quite true as stated — and changed mathematics twice: once by its power, once by the rigor needed to fix it.',
    ideas: [
      { title: 'Everything is waves', text: 'Any signal — heat, sound, light, price — splits into pure frequencies. Every phenomenon has two faces, time and spectrum, and hard problems in one are easy in the other.' },
      { title: 'The scandal of generality', text: 'What IS a function, if a jagged, arbitrary curve has a series? The fights his claim started — about convergence, continuity, integration — forced analysis to grow up; Cantor’s sets began in Fourier-series debris.' },
    ],
    works: ['Théorie Analytique de la Chaleur (1822)'],
    legacy: 'The frequency domain — how your phone, your ears, and quantum mechanics all process the world.',
  },
  germain: {
    bio: 'Confined to the house during the Terror, Sophie Germain taught herself mathematics from her father’s library — through Newton in Latin — then smuggled work to Lagrange and Gauss under a man’s name. Her theorem on Fermat’s equation was the first general result toward the Last Theorem; her elasticity work won the Academy’s grand prize.',
    ideas: [
      { title: 'The first crack in Fermat’s wall', text: 'For a class of primes now bearing her name, she proved Case I of the Last Theorem for all of them at once — the first attack on infinitely many exponents together, when others fought one at a time.' },
      { title: 'Working under the name', text: '“M. Le Blanc” got answers where Sophie Germain would have gotten silence. When Gauss learned the truth, he wrote that a woman surmounting such obstacles must have “the most noble courage.” The mathematics was identical; only the doors were different.' },
    ],
    works: ['Recherches sur la théorie des surfaces élastiques (1821)', 'Wrote to Gauss as “M. Le Blanc” — the letters survive'],
    legacy: 'Sophie Germain primes and the standing proof that the obstacles were never mathematical.',
  },
  gauss: {
    bio: 'A bricklayer’s son whose teacher set the class to summing 1 to 100 and got the answer in seconds, Gauss wrote the Disquisitiones at 21, computed Ceres’ orbit from three observations, ran Göttingen’s observatory, and confided non-Euclidean geometry only to his diary, fearing “the clamor of the Boeotians.”',
    ideas: [
      { title: 'Congruence', text: 'Arithmetic modulo n — clock arithmetic, made systematic. Number theory acquires structure: residues, reciprocity, the golden theorem he proved six different ways.' },
      { title: 'Intrinsic curvature', text: 'His Theorema Egregium: a surface’s curvature is measurable from within, by its inhabitants, without reference to outside space. The premise of Riemann — and of curved spacetime — in one “remarkable theorem.”' },
    ],
    works: ['Disquisitiones Arithmeticae (1801)', 'General Investigations of Curved Surfaces (1827)'],
    legacy: 'The standard against which mathematicians measure — his private notebooks alone would found reputations.',
  },
  cauchy: {
    bio: 'Royalist, devout, prolific to the point of jamming the Academy’s printers, Cauchy re-founded analysis in his Polytechnique lectures: limit, continuity, convergence, and the integral defined; complex function theory conjured nearly alone. Students complained; the subject never went back.',
    ideas: [
      { title: 'The limit, defined', text: 'A sequence converges when its terms eventually stay as close to the target as anyone demands. The infinite tamed by quantifiers — calculus finally answers Zeno in full sentences.' },
      { title: 'Rigor as conscience', text: 'Divergent series had been used freely when they worked; Cauchy ruled them out until justified. Mathematics is not what computes but what is proved — the modern standard of the subject.' },
    ],
    works: ['Cours d’Analyse (1821)'],
    legacy: 'Analysis stands on his definitions; “Cauchy sequence” is the phrase for taking the infinite responsibly.',
  },
  abel: {
    bio: 'Raised poor in rural Norway, Abel proved at 21 what three centuries had sought: no formula in radicals solves the general quintic. He traveled Europe unrecognized, left his great memoir with Cauchy (who mislaid it), and died of tuberculosis at 26 — two days before word arrived of a professorship in Berlin.',
    ideas: [
      { title: 'Impossibility as theorem', text: 'The quintic has no formula — not undiscovered, nonexistent, and provably so. Showing that something cannot be done is itself a discovery, and often the deeper one.' },
      { title: 'Inverting the problem', text: 'Where others studied elliptic integrals, Abel studied their inverses — and a rigid subject bloomed into doubly periodic functions. Sometimes the fruitful object is the one you get by asking the question backwards.' },
    ],
    works: ['Memoir on algebraic equations (1824)', 'Recherches sur les fonctions elliptiques (1827)'],
    legacy: 'The abelian group, the Abel Prize, and impossibility proofs as a genre — a short life priced into the subject’s deepest structures.',
  },
  galois: {
    bio: 'Twice refused by the École Polytechnique, twice jailed as a republican firebrand, Galois wrote his theory in papers the Academy lost or returned — and, the night before a duel at twenty, in a letter begging Jacobi or Gauss to judge “the importance of the theorems.” He was shot at dawn and died the next day.',
    ideas: [
      { title: 'The group of an equation', text: 'To each equation, attach the group of symmetries shuffling its roots while preserving their relations. Solvability by radicals is readable from that group’s structure — the answer lives not in the formula but in the symmetry.' },
      { title: 'Structure as subject', text: '“Jump above calculations: group the operations.” The move from computing with things to studying the system of operations itself is the founding act of modern algebra.' },
    ],
    works: ['Mémoire on the solvability of equations (1831, published 1846)', 'The last letter to Chevalier (1832)'],
    legacy: 'Group theory — the mathematics of symmetry itself, the spine of modern algebra and of physics’ deepest laws.',
  },
  lobachevsky: {
    bio: 'Professor and rector at Kazan on the Volga’s edge, Lobachevsky did openly what Gauss did in a drawer: assumed the parallel postulate false and developed the consequences into a complete geometry — publishing in 1829 to mockery he did not outlive.',
    ideas: [
      { title: 'Geometry, plural', text: 'Through a point, let infinitely many lines miss a given line: no contradiction follows — only a new world, with angle-sums under 180° and triangles capped in size. Euclid describes A geometry, not THE geometry.' },
      { title: 'Which geometry is ours?', text: 'He proposed measuring stellar triangles to test space itself — geometry as empirical question. Eighty years later Einstein answered: matter curves it, and Euclid loses by a hair near the sun.' },
    ],
    works: ['On the Principles of Geometry (1829)', 'Pangeometry (1855)'],
    legacy: 'The Copernicus of geometry — after him, axioms are choices, and mathematics is free to build any consistent world.',
  },
  riemann: {
    bio: 'A pastor’s shy son, Riemann qualified at Göttingen with a lecture Gauss chose and praised — “On the Hypotheses which Lie at the Bases of Geometry” — then transformed analysis, number theory, and geometry in barely fifteen years before tuberculosis took him at 39.',
    ideas: [
      { title: 'The manifold', text: 'Space as a collection of points with a rule for distance that may vary place to place — flat here, curved there, any dimension. Sixty years on the shelf until general relativity found its geometry waiting.' },
      { title: 'The hypothesis', text: 'His eight-page paper on primes tied their count to the zeros of the zeta function — and remarked, in passing, that those zeros seem to lie on one line. The remark is mathematics’ most wanted theorem.' },
    ],
    works: ['On the Hypotheses which Lie at the Bases of Geometry (1854)', 'On the Number of Primes Less Than a Given Magnitude (1859)'],
    legacy: 'Riemannian geometry, Riemann surfaces, the Riemann hypothesis — the deepest shelf in the library, mostly written before 40.',
  },
  cantor: {
    bio: 'Born in St Petersburg, professor at provincial Halle, Cantor asked how one infinite set compares to another — and answered with pairings: the rationals count like the integers, the reals provably do not. Kronecker called it corruption of youth; Cantor’s depressions darkened; the mathematics stood.',
    ideas: [
      { title: 'Sizes of infinity', text: 'The diagonal argument: list the reals and build one that differs from the nth in its nth digit — the list was never complete. Infinity comes in ranks, ℵ₀ and beyond, and the tower does not stop.' },
      { title: 'Set theory as foundation', text: 'Number, function, space — all rebuilt from the single notion of collection. And at the foundation, paradox: the set of all sets breaks the naive idea, forcing the axioms Hilbert and Gödel would fight over.' },
    ],
    works: ['On a Property of the Collection of All Real Algebraic Numbers (1874)', 'Contributions to the Founding of the Theory of Transfinite Numbers (1895–97)'],
    legacy: '“No one shall expel us,” said Hilbert, “from the paradise Cantor created” — the transfinite is now mathematics’ home address.',
  },
  boole: {
    bio: 'A Lincoln cobbler’s son, self-taught, schoolmaster at 16 to support his family, and finally professor at Cork, Boole wrote reasoning as algebra: x for a class, xy for both, 1−x for not-x — with x² = x the special law of thought.',
    ideas: [
      { title: 'Logic becomes algebra', text: 'Syllogisms compute like equations; validity is a calculation. Two millennia after Aristotle catalogued inference, Boole made it arithmetic — Leibniz’s “let us calculate,” delivered.' },
      { title: 'The two-valued world', text: 'Everything in his algebra is 0 or 1, nothing or everything. A century later Shannon noticed switches agree — and the whole digital world runs on the algebra of a Victorian schoolmaster.' },
    ],
    works: ['The Laws of Thought (1854)'],
    legacy: 'Every circuit, every query, every if-statement executes Boole.',
  },
  kovalevskaya: {
    bio: 'Nursery walls papered with her father’s old calculus notes; a marriage of convenience to escape Russia; private study under Weierstrass, who had no precedent for her — Kovalevskaya became Europe’s first woman professor of mathematics at Stockholm and won the Prix Bordin for the rotation of a solid body.',
    ideas: [
      { title: 'The Cauchy–Kovalevskaya theorem', text: 'For analytic partial differential equations, solutions exist and are unique — the foundational guarantee under mathematical physics: the equations describing the world are well-posed.' },
      { title: 'The Kovalevskaya top', text: 'Beyond the two classical solvable spinning tops she found the third — and last — via deep analysis, where symmetry gives out. Prized precisely because integrable cases are rare: most motion is wilder than the textbooks.' },
    ],
    works: ['On the Rotation of a Solid Body about a Fixed Point (1889)', 'A Russian Childhood (memoir)'],
    legacy: 'A theorem at the base of PDE theory, and the first professorship that proved the lecture hall had no sex.',
  },
  poincare: {
    bio: 'An engineer by training who wrote mathematics faster than he could revise it, Poincaré created algebraic topology in Analysis Situs, halfway found special relativity, wrote bestsellers on scientific method — and in a corrected prize essay on the three-body problem discovered orbits of unforecastable tangle.',
    ideas: [
      { title: 'Qualitative dynamics', text: 'When equations can’t be solved, study the shape of all solutions at once — stability, periodicity, recurrence. Understanding without formulas: the modern theory of dynamical systems.' },
      { title: 'Sensitive dependence', text: 'In the three-body tangle, unmeasurably small differences now compound into utterly different futures. Determinism survives; prediction does not. Chaos, named seventy years before its christening.' },
    ],
    works: ['Analysis Situs (1895)', 'Science and Hypothesis (1902)'],
    legacy: 'Topology, chaos, and the conjecture that took a century — the last mathematician at home in all of it.',
  },
  hilbert: {
    bio: 'From Königsberg like its bridges, Hilbert led Göttingen to the summit of mathematics: axioms for geometry surpassing Euclid’s, twenty-three problems posed to the new century in Paris, and the program — mathematics proved consistent by finitary means. He kept Noether over objections: “this is not a bathhouse.”',
    ideas: [
      { title: 'The axiomatic turn', text: 'Points, lines, planes could as well be “tables, chairs, beer mugs” — what matters is the relations the axioms impose. Mathematics is the science of formal structure, interpreted afterwards.' },
      { title: 'The program and its end', text: 'Formalize all mathematics; prove the formalism consistent. The dream organized a generation — and its refutation by Gödel organized the next. Great programs are fertile even in failure.' },
    ],
    works: ['Grundlagen der Geometrie (1899)', 'Mathematical Problems (1900 address)'],
    legacy: 'Hilbert spaces, Hilbert problems, Hilbert’s program — the architecture and the agenda of twentieth-century mathematics.',
  },
  noether: {
    bio: 'Daughter of an Erlangen mathematician, Noether lectured for years under Hilbert’s name because Göttingen would not appoint a woman, reorganized algebra around chain conditions and ideals in the 1920s, and — expelled by the Nazi laws in 1933 — taught her last two years at Bryn Mawr.',
    ideas: [
      { title: 'Noether’s theorem', text: 'Every continuous symmetry of nature’s laws begets a conserved quantity: time-shift symmetry IS conservation of energy; rotational symmetry IS angular momentum. The deepest fact known about why physics has laws at all.' },
      { title: 'Begriffliche Mathematik', text: 'Conceptual mathematics: prove by finding the right abstract structure, not by calculating. Her rings and ideals rebuilt algebra so that the theorems, as her students said, prove themselves.' },
    ],
    works: ['Invariante Variationsprobleme (1918)', 'Idealtheorie in Ringbereichen (1921)'],
    legacy: 'Modern abstract algebra is her house style, and physics’ conservation laws are her theorem’s children.',
  },
  ramanujan: {
    bio: 'A Kumbakonam clerk who flunked college twice for neglecting every subject but one, Ramanujan filled notebooks with thousands of identities in a private notation, mailed nine pages to Hardy in 1913 — and produced, in seven Cambridge years, partitions, mock theta functions, and taxicab 1729 before dying at 32.',
    ideas: [
      { title: 'Formulas from elsewhere', text: 'His series for 1/π converge implausibly fast and power computation today; his mock theta functions took ninety years to understand. Where proofs were missing, the results were almost always right — intuition as an instrument science still cannot explain.' },
      { title: 'The partition function', text: 'With Hardy he counted the ways a number splits into parts — exactly, by the circle method, from analysis. Additive number theory’s founding triumph, and the template for a century of asymptotics.' },
    ],
    works: ['Collected Papers (1927)', 'The Lost Notebook (found 1976)'],
    legacy: 'The notebooks are still yielding theorems a century on — mathematics’ standing reminder of how little we understand discovery.',
  },
  godel: {
    bio: 'Vienna Circle’s quiet listener, Gödel proved completeness for logic at 23 and incompleteness for arithmetic at 25 — sentences that encode “I am unprovable.” He starved himself to death at Princeton in 1978, trusting no food his wife had not tasted, Einstein’s walking companion to the end.',
    ideas: [
      { title: 'Incompleteness', text: 'Any consistent formal system containing arithmetic leaves truths unprovable — including its own consistency. The theorem is exact, not mystical: formal certainty has a boundary, drawn from inside.' },
      { title: 'Arithmetization', text: 'The trick: number the statements, so that logic talks about itself in arithmetic. Self-reference made rigorous — the same loop Turing would run through machines and Cantor through diagonals.' },
    ],
    works: ['On Formally Undecidable Propositions (1931)'],
    legacy: 'The limit theorem of formal thought — every philosophy of mathematics since is a response.',
  },
  turing: {
    bio: 'A Cambridge fellow at 22, Turing answered Hilbert’s decision problem in 1936 by inventing a paper machine — tape, head, states — and proving some questions no machine settles. At Bletchley his bombes broke Enigma; after the war he designed computers, asked “can machines think?”, and was chemically castrated by the state he had saved. He died of cyanide at 41.',
    ideas: [
      { title: 'The universal machine', text: 'One machine, fed descriptions of others, imitates them all — computation is a substrate-independent notion, and “program” and “data” are the same stuff. Every computer is this theorem, built.' },
      { title: 'Undecidability', text: 'No procedure decides, for all programs, halting. Diagonalization again — Cantor’s and Gödel’s loop, now with consequences you can ship: there are questions your laptop provably cannot answer, no matter the upgrade.' },
    ],
    works: ['On Computable Numbers (1936)', 'Computing Machinery and Intelligence (1950)'],
    legacy: 'Defined computation, helped win the war, framed machine intelligence — the century’s pivot, treated unforgivably.',
  },
  vonneumann: {
    bio: 'A Budapest banker’s son who did division in his head at six in classical Greek, von Neumann axiomatized sets at 22 and quantum mechanics by 28, co-invented game theory, shaped the atomic bomb’s mathematics, and wrote the report that fixed the architecture of virtually every computer since.',
    ideas: [
      { title: 'The stored program', text: 'Keep instructions in the same memory as data — programs that read, write, and become programs. The von Neumann architecture is why software exists as a thing in the world.' },
      { title: 'Games and automata', text: 'Minimax made conflict calculable; self-reproducing automata made life itself look computable. His late question — how complexity grows from simple parts — is still the frontier.' },
    ],
    works: ['Mathematical Foundations of Quantum Mechanics (1932)', 'Theory of Games and Economic Behavior (1944, with Morgenstern)'],
    legacy: 'The architecture in your pocket, the game theory in your markets, the automata in your simulations.',
  },
  kolmogorov: {
    bio: 'Orphaned at birth in Tambov, Kolmogorov wrote history papers as a student until deciding mathematics offered surer proof, then gave probability its axioms in sixty pages in 1933 — and spent five decades ranging over turbulence, dynamics, complexity, and the schooling of gifted children.',
    ideas: [
      { title: 'Probability axiomatized', text: 'Events are sets; probability is measure; independence is a product. Chance, the least lawful thing there is, turns out to need only three axioms — and centuries of paradox evaporate.' },
      { title: 'Complexity as length', text: 'The complexity of a string is the length of its shortest description. Randomness defined: what cannot be compressed — a bridge between probability, information, and computation.' },
    ],
    works: ['Foundations of the Theory of Probability (1933)'],
    legacy: 'All of modern probability — finance, physics, statistics, machine learning — stands on his sixty pages.',
  },
  erdos: {
    bio: 'A Budapest prodigy who lost his sisters to scarlet fever days before his birth, Erdős gave away what he earned, carried his life in two suitcases, and worked eighteen-hour days on amphetamines and espresso across five hundred collaborators’ guest rooms. “My brain is open.”',
    ideas: [
      { title: 'The Book', text: 'God keeps a book, he said, of the perfect proofs. The highest praise was not “true” but “from The Book” — mathematics as an aesthetic order that proofs approximate, discovered rather than made.' },
      { title: 'The probabilistic method', text: 'To prove a structure exists, show a random one works with positive probability — existence without construction. Chance, wielded as a proof technique: one of combinatorics’ sharpest tools.' },
    ],
    works: ['~1,500 papers with 511 collaborators'],
    legacy: 'The Erdős number measures distance from him in the collaboration graph — mathematics mapped as one connected conversation.',
  },
  shannon: {
    bio: 'A Michigan tinkerer who juggled on a unicycle through Bell Labs’ halls, Shannon showed in his master’s thesis that relay circuits compute Boolean algebra, and in 1948 defined information itself — entropy, redundancy, channel capacity — then spent later years building chess machines, a flame-throwing trumpet, and Theseus the maze mouse.',
    ideas: [
      { title: 'The bit', text: 'Information is surprise, measured in binary choices. A message’s meaning is irrelevant to its size — a heresy that made text, sound, and image one substance and every channel comparable.' },
      { title: 'Capacity', text: 'Every noisy channel has a hard rate limit — and below it, error-free transmission is possible with clever coding. The theorem that guarantees your call connects, your files survive, your probes phone home from Neptune.' },
    ],
    works: ['A Symbolic Analysis of Relay and Switching Circuits (1937)', 'A Mathematical Theory of Communication (1948)'],
    legacy: 'The information age is named after his quantity — one paper, one science, one civilization’s substrate.',
  },
  grothendieck: {
    bio: 'Born to anarchist parents, interned as a child in Vichy camps, Grothendieck rebuilt algebraic geometry at IHÉS through the 1960s — schemes, topoi, étale cohomology — working twelve-hour days for a decade. In 1970 he resigned over military funding, and by 1991 had vanished into the Pyrenees, refusing all contact.',
    ideas: [
      { title: 'The relative point of view', text: 'Study not objects but families of objects varying over a base — properties become properties of the family. A reorganization so thorough that entire theories became corollaries.' },
      { title: 'The rising sea', text: 'His metaphor for method: do not crack the nut with a hammer; let understanding rise like the sea until the problem is submerged, softened, open. Generality not as luxury but as the true solvent.' },
    ],
    works: ['Éléments de Géométrie Algébrique (1960–67)', 'Récoltes et Semailles (memoir)'],
    legacy: 'Modern algebraic geometry is his cathedral — Wiles’ proof of Fermat walks through it.',
  },
  mandelbrot: {
    bio: 'A Warsaw-born refugee schooled irregularly across occupied France, Mandelbrot spent thirty-five years at IBM chasing a hunch through cotton prices, telephone noise, and coastlines: roughness has structure. In 1980, plotting a simple iteration, he saw the set that bears his name.',
    ideas: [
      { title: 'Fractional dimension', text: 'A coastline is more than a line, less than a plane — dimension 1.25, say. Self-similarity at every scale is nature’s default texture, and it is measurable.' },
      { title: 'Simple rules, infinite coastline', text: 'z → z² + c, iterated: from one line of algebra, the most intricate object mathematics had ever displayed. Complexity is not built from complexity — it condenses out of iteration.' },
    ],
    works: ['The Fractal Geometry of Nature (1982)'],
    legacy: 'Gave roughness its geometry — clouds, markets, lungs, and coastlines now have mathematics of their own.',
  },
  conway: {
    bio: 'A Liverpool prodigy who could recite π to a thousand places, Conway held court at Cambridge then Princeton amid games, puzzles, and props — and resented that the Game of Life, doodled on a Go board in 1970, eclipsed his sporadic groups, knot invariants, and the surreal numbers.',
    ideas: [
      { title: 'The Game of Life', text: 'Three rules on a grid: birth, survival, death. From them — gliders, oscillators, self-copying patterns, and full universal computation. Emergence made visible: laws do not resemble what they generate.' },
      { title: 'Surreal numbers', text: 'Analyzing endgames in Go, he found numbers born of two sets pressing on a boundary — capturing all reals, every infinity, every infinitesimal, in one construction. Games contained an arithmetic bigger than the continuum.' },
    ],
    works: ['On Numbers and Games (1976)', 'The Book of Numbers (1996, with Guy)'],
    legacy: 'Proof that play is a research method — and that three rules suffice for a universe.',
  },
  wiles: {
    bio: 'At ten, in a Cambridge library, Wiles met Fermat’s claim and never put it down. From 1986 he worked seven years in his attic in secret, announced the proof in 1993 — “I think I’ll stop here” — then repaired its gap through a public, agonizing year, closing 358 years of history in 1995.',
    ideas: [
      { title: 'The modularity bridge', text: 'He proved enough of the Taniyama–Shimura conjecture — every elliptic curve is modular — to make a Fermat counterexample impossible: it would build a curve too strange to be modular. The margin note fell as a corollary of a bridge between worlds.' },
      { title: 'The long game', text: 'Seven years of silence, one collapse, one repair: proof as endurance. His description of research — groping through dark rooms until you find the light switch — is the honest phenomenology of discovery.' },
    ],
    works: ['Modular Elliptic Curves and Fermat’s Last Theorem (1995)'],
    legacy: 'The margin is finally wide enough — and the tools built to fill it now power arithmetic geometry.',
  },
  mirzakhani: {
    bio: 'A Tehran schoolgirl who wanted to be a novelist until Olympiad gold changed her mind, Mirzakhani counted closed geodesics on hyperbolic surfaces and measured the moduli spaces of all possible geometries, drawing on vast floor-spread sheets. The 2014 Fields Medal made her its first woman laureate; cancer took her at 40.',
    ideas: [
      { title: 'Counting the uncountable curves', text: 'Her thesis tied the count of simple closed geodesics to volumes of moduli space — three landmark results, one dissertation. Curves on one surface, understood by weighing the space of all surfaces.' },
      { title: 'Slow mathematics', text: '“Months or years, to see the beauty” — she worked by drawing, patiently, at the pace of intuition. Her example: depth over speed, in a subject that pretends to be a race.' },
    ],
    works: ['Simple Geodesics and Weil–Petersson Volumes (2007)'],
    legacy: 'Moduli spaces mapped, a medal’s door opened — and a model of how genius can be quiet, patient, and drawn by hand.',
  },
}
