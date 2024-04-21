import React from "react";
import { db } from "~/server/db";

const Images = async () => {
  const imagesd = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {imagesd.map((image) => {
        return (
          <div className="h-44 w-72 p-4" key={image.id}>
            <img
              src={image.url?.replace(
                "idPlaceHolder",
                Math.floor(Math.random() * 200).toString(),
              )}
              alt="image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
