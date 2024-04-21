import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="w-full">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
