import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return (
    <main className="w-full">
      <div className="flex flex-row flex-wrap gap-4">
        {images.map((image) => {
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
    </main>
  );
}
