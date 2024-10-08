export const PlotData = [
  {
    imgSource: "assets/images/densities.png",
    name: "Instrument Densities",
    width: 640,
    height: 480,
    text: (
      <>
        <p>
          The most important parameter to consider in creating a flowing texture
          is the interpolation of individual instruments’ densities. I wanted to
          give the physical impression of a stream in which the water moves
          faster and slow, and rises and falls in gradual degrees over time. I
          did not want to burden the performers by giving them in-ear click
          tracks or another to tool to ensure smooth interpolations of playing
          speed. Instead, I approximated this control by directing the
          performers to space whatever notes appeared in a five-second measure
          as evenly as possible. I wasn’t concerned how accurately they spaced
          these notes, because I wasn’t concerned with creating specific
          polyrhythmic relationships between the parts. I believe I found a
          sweet spot of control, and that the borders between each five-second
          time division are mostly imperceptible.
          <br />
          <br />I determined the piece would have a structural climax at a point
          two-thirds through its entire duration (around measure 61 in the score
          for this version), and I characterized this climax by engineering
          interpolated parameters to reach extremities in their range at this
          moment. The density parameter characterizes this climax most by
          creating an extreme relationship between the two instruments. The
          piano reaches its maximum density when the flute reaches it lowest
          density (as shown in the curve).
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
        The next important factor creating the intended physical impression of a
        flowing stream was how each instrument traversed its various registers.
        The standard concert piano spans seven full octaves (and change) while
        the orchestral flute spans a relatively limited three octaves (depending
        on the player’s skill). To help distinguish the structural climax of the
        piece described above, I interpolated the registers to create the
        highest space between the instruments, just as the densities reach their
        extreme also.
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
        After mapping out these interpolations of density and register, I
        created similar systems to determine certain individual characteristics
        that distinguish the instruments from one another. One of the biggest
        features of the piano that sets it apart from the flute is its ability
        to perform multiple pitches at once. I drew the following curve to
        determine the probability that a given note would also generate a chord.
        This simple curve decreases the probability a chord will occur until the
        structural climax, in which the probability becomes zero. This choice
        was practical as well as aesthetic and helped to relieve the player from
        having to punch out chords when their density had reached its fastest
        state. The pitches of these chords were determined by the same algorithm
        that determined the horizontal flow of pitches (explained below in the
        description of the final curve).
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
        Each time the algorithm generates a chord, the following curves were
        used to determine the spacing of those chords. The bottom curve (drawn
        as a solid turquoise line) is the same as the piano register curve from
        above and represents the base register on which chord notes are stacked.
        The top curve (dashed yellow line) then represents the potential spacing
        of the chord above the base register. At the beginning of the piece, the
        two lines are identical, meaning that any chords generated are written
        within the same octave. At the structural climax (two-thirds of the
        duration), the chord range reaches its widest spacing just as the piano
        reaches its fastest density. This effect can be seen in the score
        (around measure 61) where the left hand of the piano performs fast notes
        in its lowest octaves, and whatever chords are generated appear in the
        highest octave, spaced the entire range of the piano.
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
        One feature that distinguishes the flute from the piano is its ability
        to produce different sound effects by means of articulation. I chose
        four common articulations to color each note in A Green Stream: long
        pitched notes, breath sounds (that obscure the pitch), pitched staccato
        notes, and key clicks produced by hammering on the keys with the fingers
        without blowing into the instrument. The four curves shown below
        determine the probability that each articulation will be chosen at a
        given moment. While performing the electronics patch, knowledge of when
        certain articulations would pop out of the texture allowed me to target
        those areas for sampled material. The most visible example is the
        probability to generate key clicks (drawn as a green dotted-dashed
        line), which peaks at a particular moment one-third of way through the
        piece. I specifically sampled the flute at that moment during the
        performance so that I could use the key click sound at moments during
        the rest of the piece.
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
        The horizontal arrangement of pitches was determined by an algorithm
        that combines two factors. The first is a general curve determining the
        probability that a certain pitch class could be chosen at any moment
        (shown in the graph below). The other factor was the proximity to the
        previous time a given pitch class was chosen. Each time a certain pitch
        class is chosen the probability that will be chosen next becomes zero.
        Each time the pitch class is not chosen its probability to be chosen
        increases by a certain factor. This factor overwrites the probabilities
        shown in the curve to ensure that there are never repeated notes
        generated in the piece. This was important because I felt repeated notes
        might interrupt the feeling of flow or at least create a different
        sensation.
      </p>
    ),
  },
];
