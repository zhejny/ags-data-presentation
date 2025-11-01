import Image from "next/image";
import { PlotData } from "@/public/data";
import Poem from "@/components/poem";

export default function Home() {
  return (
    <main>
      <header>
        <h1>A GREEN STREAM (2018)</h1>
        <h2>Compositional Approach and Algorithm Visualization</h2>
      </header>
      <section>
        <p>
          <i>A Green Stream</i> is an algorithmic composition for flute,
          piano, and live electronics. It was my first attempt to create fully
          generative music. Its content was determined using probability
          functions that govern the evolution of various musical parameters over
          time. These include note density, instrument register, articulation,
          and pitch class. This page visualizes several such functions and
          describes how the interpolation of each parameter contributes to the
          central vision of the piece.
        </p>
        <br/>
        <section>
          <a className="score" href="assets/ags_score.pdf" target="_blank">
            <u>View Score</u>
          </a>
          <audio src="assets/ags_audio.mp3" controls></audio>
          <p>
            <i>
              Performed 13 April 2018 by Margaret Lancaster (flute), Rory Cowal
              (piano), and Zachary Hejny (electronics)
            </i>
          </p>
        </section>
        <br />
        <Poem />
        <p>
          My goal was to engineer a sonic texture that behaves like flowing
          water. The sound of water has no rhythm, or at least, not conventional
          musical rhythm. It slows and flurries, rises and folds; splashes and
          sprays emerge out of the confluence of things like temperature,
          humidity, volume, mineral content, viscosity, etc., but a stream’s
          basic flow is never interrupted.
        </p>
        <p>
          Music often progresses through time at a certain tempo or speed, but
          in trying to imitate water, I found it more appropriate to base my
          music on speed’s inverse – density. The notation (open link above) is
          not organized with a classical time signature or meter. Individual
          notes do not have stems or beams indicating how long they should last.
          Instead, I divided the score into five-second measures and instructed
          performers to space their notes as evenly as possible within each
          measure. This means that the “speed” at any moment is determined by
          the number of notes in a given measure, the inverse of the local
          density. It is the counterpoint between interpolations of density in
          the flute, piano, and electronics parts that primarily define the
          structure of <i>A Green Stream</i>.
        </p>
        <p>
          The live electronics part uses a custom sample-playback system I
          designed and implemented in SuperCollider. It records flute and piano
          sounds at certain early moments during the performance and splices
          them into small grains, which it then streams back through four
          loudspeakers surrounding the audience. The electronics add another
          layer to the flowing movement of this music. It envelops the listener
          in the musical world and creates a subtle surrealism as sounds from
          the recent past return to accompany the present moment. Circulation.
        </p>
      </section>
      <section>
        {PlotData.map((data, index) => (
          <div className="plot" key={index}>
            <div className="plot-text">{data.text}</div>
            <div className="plot-image">
              <Image
                src={data.imgSource}
                alt={data.name}
                width={data.width}
                height={data.height}
              ></Image>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
