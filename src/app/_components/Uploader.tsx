

"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export const Uploader = () => {
    const router = useRouter()

    return <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
        //   alert("Upload Completed");
          router.refresh()
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
        //   console.log(error)
          console.log(error.cause)
          alert(`ERROR! ${error.message}`);
        }}
      />
}