import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const TopNav = () => {
    return (
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <div className="text-lg font-bold">Gallery</div>
        <div className="space-x-4">
         <SignedOut>
            <SignInButton/>
         </SignedOut>
         <SignedIn>
            <UserButton />
         </SignedIn>
        </div>
      </nav>
    );
  };