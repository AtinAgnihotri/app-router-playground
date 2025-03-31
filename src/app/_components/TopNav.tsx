"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Uploader } from "./Uploader";
import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="text-lg font-bold">Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint={"imageUploader"}
            onUploadError={(error: Error) => {
              // Do something with the error.
              //   console.log(error)
              console.log("Upload Error:", error.cause, error.message, error.name);
              alert(`ERROR! ${error.message}`);
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
