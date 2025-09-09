"use client";
import React, { useState } from "react";
import PlotImage from "./plot-image";
import { TestImagesData } from "@/public/data";
import PlotControls from "./plot-controls";

function Plot() {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <section>
      <PlotImage imageData={TestImagesData[currentImage]} />
      <PlotControls setCurrentImage={setCurrentImage} />
    </section>
  );
}

export default Plot;
