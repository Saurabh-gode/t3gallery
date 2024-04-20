import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function TopNav() {
  return (
    <nav className="items-corner flex w-full justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default TopNav;
