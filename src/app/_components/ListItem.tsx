"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa6";

interface ListItemProps {
  image: string;
  href: string;
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  //add authentication before push
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4
  bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4
  "
    >
      <div className="relative min-h-[64px] min-w-[64px] ">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="absolute flex items-center justify-center transition p-4 bg-green-500 opacity-0
      right-5 group-hover:opacity-100 hover:scale-110 rounded-full
      "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
