export const PlotData = [
  {
    imgSource: "assets/images/densities.png",
    name: "Instrument Densities",
    width: 640,
    height: 480,
    text: (
      <>
        <p>
          The plot below represents the density (notes per measure) of each
          instrument over time. Each curve interpolates between 0 and 24 notes
          per five-second measure. The piece has a structural climax two-thirds
          of the way through its duration (around measure 61 in the score). This
          climax is characterized by an extreme disparity between the density of
          the flute (0) and that of the piano (24).
        </p>
      </>
    ),
  },
  {
    imgSource: "assets/images/registers.png",
    name: "Instrument Registers",
    width: 640,
    height: 480,
    text: (
      <p>
        The next plot visualizes how the flute and piano traverse their
        respective octave registers over time. The standard concert piano spans
        seven full octaves (and change) while the orchestral flute spans a
        relatively limited three octaves (depending on the player’s skill). The
        aggregate octave range between the instruments reaches an extreme at the
        piece’s structural climax. The piano plays in its lowest octave while
        the flute plays at its highest. This reinforces and colors the climax
        created by the extreme differences in density described above.
      </p>
    ),
  },
  {
    imgSource: "assets/images/chordProbability.png",
    name: "Chord Generation Probability",
    width: 640,
    height: 480,
    text: (
      <p>
        This curve represents the probability that a note event in the piano
        generates a chord, or a cluster of notes. It decreases the probability a
        chord will occur until the structural climax when it becomes 0%. This
        relieves the pianist from needing to punch out chords while playing at
        their fastest speed. It also reinforces the unique texture of the
        climax. The individual pitches of piano chords were determined by the
        same algorithm that determined the horizontal sequence of pitches
        (described in the final plot below).
      </p>
    ),
  },
  {
    imgSource: "assets/images/chordRange.png",
    name: "Piano Chord Range",
    width: 640,
    height: 480,
    text: (
      <p>
        Each time the algorithm generated a piano chord, the following curves
        were used to determine the octave spacing of that chord. The turquoise
        curve is identical to the earlier curve governing piano register and
        represents the base register on which chord notes were stacked. The
        dashed yellow curve represents the range of the chord above this base
        register. At the beginning of the piece, the two curves are identical,
        meaning that any chords generated are written within the same octave as
        the base note. Following the previous structural trend, the chord range
        reaches its widest possible spacing at the piece’s climax. The effect
        can be seen in measure 61 of the score where the left hand performs fast
        notes in the lowest octave, and the right hand punches out sparse chords
        at the other end of the instrument.
      </p>
    ),
  },
  {
    imgSource: "assets/images/articulations.png",
    name: "Flute Articulation Probabilities",
    width: 640,
    height: 480,
    text: (
      <p>
        The feature that most distinguishes the flute from the piano is its
        ability to produce diverse timbres by means of articulation. I chose
        four common articulations to color the various interpolations of flute
        density and register in <i>A Green Stream</i>: sustained pitches, breath
        sounds, pitched staccato, and key clicks (produced by hammering on the
        flute keys without blowing into the instrument). The four curves below
        represent the probability for each articulation to be chosen for a given
        note event. Notice that the probability for key clicks reaches 100% at a
        point that coincides with the flute’s maximum density, creating a
        secondary structural climax in the piece.
      </p>
    ),
  },
  {
    imgSource: "assets/images/pitchclassProbability.png",
    name: "Pitch Class Probabilities",
    width: 640,
    height: 480,
    text: (
      <p>
        Sequences of pitches were determined by an algorithm that factors
        together two probabilities: a general probability for each pitch class
        over time (visualized in the plot below) and a probability based on the
        proximity of identical pitch classes in a sequence. Each time a certain
        pitch class is chosen for a note event, its proximity probability drops
        to 0%. If a pitch class is not chosen during an event, its probability
        increases by a certain factor. This ensures that pitch classes are never
        repeated in subsequent note events and, more generally, that identical
        pitch classes are spread evenly throughout sequences of notes. This
        avoids giving any impressions of tonal hierarchy and creates a constant
        inflection of hue that reinforces the feeling of flow created by the
        interpolation of other parameters.
      </p>
    ),
  },
];
