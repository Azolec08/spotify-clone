"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const onClick = () => {
    // onCLick function later to implement
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center  gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="cursor-pointer text-neutral-400 hover
          hover:text-white transition
        "
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs</div>
    </div>
  );
};

export default Library;
