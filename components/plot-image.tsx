import { ImagesData } from "@/public/data";
import Image from "next/image";

type ImageDataProps = (typeof ImagesData)[number];

function PlotImage({data}: any) {
  return (
    <div>
      <Image
        src={data.source}
        alt={data.name}
        width={data.width}
        height={data.height}
      ></Image>
    </div>
  );
}

export default PlotImage;
