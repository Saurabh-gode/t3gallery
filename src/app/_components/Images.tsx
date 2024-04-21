import Image from "next/image";
import React from "react";
import { getMyImages } from "~/server/queries";

const Images = async () => {
  const imagesd = await getMyImages();
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {imagesd.map((image) => {
        return (
          <div className="h-44 w-72 p-4" key={image.id}>
            <Image
              src={image.url}
              width={300}
              height={180}
              style={{ objectFit: "contain" }}
              alt="image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
