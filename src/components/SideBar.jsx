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
  const item = useSelector((state) => state.ListSearch);
  const dispatch = useDispatch();
  const itemSearch = (name) => {
    dispatch(setItem(name));
  }

  return (
    <div className="w-[15%]">
      <Header />
      <div className="sidebar bg-[#1A1E23]">
        <div className="pt-16 text-white flex flex-col gap-2">
          <div className={`flex items-center gap-2 cursor-pointer  ${item === "trending" && "bg-black text-[#2448C7]"} p-4 px-6`} onClick={() => itemSearch("trending")}>
            <IoHomeOutline size="1.2rem" />
            <p className="text-lg">Trending</p>
          </div>
          <div className={`flex items-center gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7] ${item === "discover" && "bg-black text-[#2448C7]"}`} onClick={() => itemSearch("discover")}>
            <IoWalletOutline size="1.2rem" />
            <p className="text-lg">Discover</p>
          </div>
          <div className={`flex items-center gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7] ${item === "upcoming" && "bg-black text-[#2448C7]"}`} onClick={() => itemSearch("upcoming")}>
            <FiCoffee size="1.2rem" />
            <p className="text-lg">Upcoming</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer p-4 px-6 hover:text-[#2448C7]">
            <FaRegHeart size="1.2rem" />
            <p className="text-lg">Favorite</p>
          </div>
        </div>
        <div className="p-6 text-zinc-400">
          <h4 className="font-semibold uppercase">Genre</h4>
          <div className="mt-4 flex flex-col gap-2">
          <a href="#">Action</a>
          <a href="#">Documentary</a>
          <a href="#">Comedy</a>
          <a href="#">Horror</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
