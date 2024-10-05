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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
          molestiae maiores? Exercitationem nesciunt esse repellendus vel!
          Aspernatur sunt, earum natus nam fugiat sed odit! Id minima a
          consequatur quae dicta mollitia esse modi quidem ratione animi officia
          quibusdam adipisci in error commodi illum, rem accusamus. Quo dolor
          quaerat nesciunt vitae?
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam
          porro at dolor excepturi. Adipisci suscipit a, ipsum quia doloremque
          dolorem totam repudiandae? Illo dolore totam blanditiis repudiandae
          porro aliquam, ea nisi rem assumenda maiores cumque sequi esse quo
          voluptatum dicta natus eos? Odio excepturi facere soluta architecto
          dolores aperiam quaerat quas distinctio error quia accusamus est
          numquam modi mollitia asperiores dolorum, dicta temporibus voluptas at
          doloribus minus, recusandae esse delectus! Animi similique delectus
          ratione harum, modi molestias ipsum, nam earum eum atque illo
          praesentium obcaecati quo fuga placeat? Provident dicta aliquid
          praesentium beatae nam perferendis reiciendis laboriosam quia
          possimus.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          facere consequatur dolore, ab ullam dignissimos ad et beatae provident
          vero architecto. Culpa, laborum earum quam explicabo corrupti enim
          cum. Quas?
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
        <p className="pb-[2rem]">
          <i>
            Performed 13 April 2018 by Margaret Lancaster (flute), Rory Cowal
            (piano), and Zachary Hejny (electronics)
          </i>
        </p>
      </section>
      <section>
        {PlotData.map((data, index) => (
          <div key={index}>
            <div className="plot-text">{data.text}</div>
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
