import React, { useState } from "react";
import Header from "./Header";
// ICONS
import { IoHomeOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
// states
import { useSelector, useDispatch } from "react-redux";
import { setItem } from "../Store/Features/ListSearch";
const SideBar = () => {
  const [isSideBar, setIsSideBar] = useState(true);
  const item = useSelector((state) => state.ListSearch);
  const dispatch = useDispatch();
  const itemSearch = (name) => {
    dispatch(setItem(name));
  };

  return (
    <nav className={`transition duration-150 ease-out`}>
      <Header isSideBar={isSideBar} setIsSideBar={setIsSideBar} />
      { isSideBar && <div className="sm:min-h-[calc(100vh-80px)] bg-[#1A1E23]">
        <div className="flex text-white justify-around sm:pt-16 gap-2 sm:flex-col ">
          <div className={`flex items-center h-16 gap-2 cursor-pointer hover:text-[#2448C7]  ${item === "trending" && "bg-black text-[#2448C7]"} p-4 px-6`} onClick={() => itemSearch("trending")}>
            <IoHomeOutline size={`1.6rem`} />
            {isSideBar && <p className="hidden text-lg sm:block">Trending</p>}
          </div>
          <div className={`flex items-center h-16 gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7] ${item === "discover" && "bg-black text-[#2448C7]"}`} onClick={() => itemSearch("trending")}>
            <IoWalletOutline size={`1.6rem`} />
            <p className="hidden text-lg sm:block">Discover</p>
          </div>
          <div className={`flex items-center h-16 gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7] ${item === "upcoming" && "bg-black text-[#2448C7]"}`} onClick={() => itemSearch("upcoming")}>
            <FiCoffee size={`1.6rem`} />
            <p className="hidden text-lg sm:block">Upcoming</p>
          </div>
          <div className="flex items-center h-16 gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7]">
            <FaRegHeart size={`1.6rem`} />
            <p className="hidden text-lg sm:block">Favorite</p>
          </div>
        </div>
        {
          isSideBar &&
        <div className="hidden p-6 text-zinc-400 sm:block">
          <h4 className="font-semibold uppercase">Genre</h4>
          <div className="mt-4 flex flex-col gap-2">
          <a href="#">Action</a>
          <a href="#">Documentary</a>
          <a href="#">Comedy</a>
          <a href="#">Horror</a>
          </div>
        </div>
        }
      </div>}
    </nav>
  );
};

export default SideBar;
