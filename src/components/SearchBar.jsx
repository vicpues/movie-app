import React from "react";
// ICONS
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="bg-[#3B54D4] py-7 px-9 flex gap-3 justify-between items-center">
      <div className="flex gap-3 basis-1/2">
        <span className="text-zinc-300">
          <CiSearch size="1.4rem" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-zinc-300 font-normal text-[md]"
          spellCheck={false}
        />
      </div>
      <div>
        <span className="cursor-pointer text-zinc-300"><FaRegMoon size="1.2rem" /></span>
      </div>
    </div>
  );
};

export default SearchBar;
