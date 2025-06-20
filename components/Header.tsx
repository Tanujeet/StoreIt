import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.action";
import { useState } from "react";
import { getFileType } from "@/lib/utils";

const Header = () => {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
            <p>Upload</p>
          </Button>
          {files.length > 0 && (
            <ul className="uploader-preview-list">
              <h4 className="h4 text-light-100">Uploading</h4>
              {files.map((files, index) => {
                const { type, extension } = getFileType(files.name);
              })}
            </ul>
          )}
        </form>
      </div>
    </header>
  );
};

export default Header;
