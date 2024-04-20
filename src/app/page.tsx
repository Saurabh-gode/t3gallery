import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const mockImages = [
    { id: 0, url: `https://picsum.photos/id/1/300/180` },
    {
      id: 1,
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/300/180`,
    },
    {
      id: 2,
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/300/180`,
    },
    {
      id: 3,
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/300/180`,
    },
    {
      id: 4,
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 200).toString()}/300/180`,
    },
  ];

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="w-full">
      <div className="flex flex-row flex-wrap gap-4">
        {posts.map((post, index) => {
          return <div key={post.id}>{post.name}</div>;
        })}
        {mockImages.map((image) => {
          return (
            <div className="h-44 w-72 p-4" key={image.id}>
              <img src={image.url} alt="image" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
