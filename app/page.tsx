import { PlotData } from "@/public/data";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <h1>A GREEN STREAM (2018)</h1>
        <h2>Compositional Approach and Algorithm Visualization</h2>
      </header>
      <section>
        <p className="text">
          A Green Stream (2018) is an algorithmic composition for flute, piano,
          and a live electronics sampling system built using SuperCollider. It
          is my first attempt to create music in which all the material is
          chosen by probabilistic functions governing individual musical
          parameters. This page visualizes the more important parametric
          evolutions that structure A Green Stream.
        </p>
        <p className="text">
          My goal composing this piece was to engineer textures free of
          conventional musical rhythm. I wanted to design a system to produce
          smooth streams of notes in which coloristic features would emerge
          “naturally” through confluences embedded in the contrapuntal
          relationships between interpolated musical parameters. The score (see
          link below) does not use a time signature, any stems, or beaming to
          indicate rhythm. Instead, each measure is prescribed to last roughly
          five seconds, and whatever noteheads drawn are meant to be evenly
          spaced within those five seconds. When preparing to premiere the
          piece, the performers and I decided to use coordinated metronomes set
          to 12 beats-per-minute to dictate the passing of each measure. These
          were placed on our music stands with the volume off, leaving just a
          visual blip to indicate the downbeat of each measure. This freed the
          performers from the responsibility of coordinating the passing of each
          measure (or worse forcing us to use a conductor), and allowed the
          instrumentalists especially to interpret the material confidently,
          allowing the passing transformations of density, register, and
          articulation to flow freely.
        </p>
        <p className="text">
          The electronics part adds another texture to the ‘stream’ and creates
          a subtle surrealism when sounds sampled during earlier moments in the
          piece returned to accompany the musicians later. There are no effects
          added to the sampled sounds. The patch cuts the recorded material into
          short snippets and plays it back in random orders at certain speeds
          and densities. These sounds are also panned throughout four
          loudspeakers surrounding the audience.
        </p>
        <p className="text">
          The following score and performance recording are from a 96-measure
          version of the piece.
        </p>
      </section>
      <section>
        <a href="assets/ags_score.pdf" target="_blank">
          View Score
        </a>
        <audio
          src="assets/ags_audio.mp3"
          controls
          className="pb-[0.5rem]"
        ></audio>
        <p className="text pb-[2rem]">
          <i>
            Performed 13 April 2018 by Margaret Lancaster (flute), Rory Cowal
            (piano), and Zachary Hejny (electronics)
          </i>
        </p>
      </section>
      <section>
        {PlotData.map((data, index) => (
          <div key={index}>
            <p className="text">{data.text}</p>
            <div className="plot-image" key={index}>
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
    </>
  );
}
