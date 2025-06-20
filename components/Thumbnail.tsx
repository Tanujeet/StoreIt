import { getFileIcon } from "@/lib/utils";
import Image from "next/image";

interface Props {
  type: string;
  extension: string;
  url: string;
}

const Thumbnail = ({ type, extension, url }: Props) => {
  const isImage = type === "image" && extension !== "svg";
  return (
    <figure>
      <Image
        src={isImage ? url : getFileIcon(extension, type)}
        alt="Thumbnail"
        width={100}
        height={100}
      />
    </figure>
  );
};

export default Thumbnail;
