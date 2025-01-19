import React, { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.png";
import { TiStar } from "react-icons/ti";
const Card = ({ content }) => {
  const [icon, setIcon] = useState([]);
  let img;
  if (content.poster_path === null) {
    img = placeholder;
  } else {
    img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  }
  // add popularity
  let stars;
  useEffect(() => {
    if (content.popularity >= 50) {
      stars = 5;
    } else if (content.popularity >= 30) {
      stars = 4;
    } else if (content.popularity >= 15) {
      stars = 3;
    } else if (content.popularity >= 5) {
      stars = 2;
    } else if (content.popularity > 0) {
      stars = 1;
    }
    const newIcon = [];
    for (let i = 0; i < stars; i++) {
      newIcon.push(
        <span key={i}>
          <TiStar />
        </span>
      );
    }
    setIcon(newIcon);
  }, []);

  return (
    <div className="m-card w-[22%] xl:w-[18%] hover:scale-105 transition duration-150 ease-out cursor-pointer">
      <img
        src={img}
        alt="poster"
        className="w-full h-[350px] xl:h-[400px] rounded-lg object-cover"
      />
      <div>
        <h3 className="mt-3 font-semibold text-lg leading-5 dark:text-zinc-300">
          {content.original_title}
        </h3>
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex gap-2">
            <h3 className="text-[#0929AD] text-sm dark:text-[#7792ff]">
              Relase Date:
            </h3>
            <p className="text-sm dark:text-zinc-400">
              {content.release_date.slice(0, 4)}
            </p>
          </div>
          <div className="flex text-[#0929AD] dark:text-[#7792ff]">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
