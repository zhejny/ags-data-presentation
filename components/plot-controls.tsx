"use client";
import { ParameterCurves, ImagesData, TestImagesData } from "@/public/data";
import React, { useEffect, useState } from "react";

function PlotControls({ setCurrentImage }: any) {
  const [activeParameters, setActiveParameters] = useState("0000");
  useEffect(() => {
    updateImage(activeParameters);
  }, [activeParameters]);

  const updateImage = (imageKey: string) => {
    var imageIndex;
    for (var i = 0; i < TestImagesData.length; i++) {
      if (TestImagesData[i].key === imageKey) {
        imageIndex = i;
      }
    }
    setCurrentImage(imageIndex);
  };

  const handleCheckboxUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedParameters = "";
    for (var i = 0; i < activeParameters.length; i++) {
      const state = Number(activeParameters[i]);
      if (Number(event.target.value) == i) {
        updatedParameters = updatedParameters + ((state + 1) % 2);
      } else {
        updatedParameters = updatedParameters + state;
      }
    }
    setActiveParameters(updatedParameters);
  };

  return (
    <>
      {ParameterCurves.map((data, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              value={index}
              onChange={handleCheckboxUpdate}
              checked={activeParameters[index] === "1" ? true : false}
            />
            <span>{data.label}</span>
          </label>
        );
      })}
    </>
  );
}

export default PlotControls;
