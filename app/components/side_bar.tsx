import { BookmarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MyPopover from "./PopOver";

const SideBar = () => {
  return (
    <div className="h-screen w-60 bg-slate-50">
      <br />
      <div className=" text-center">
        <input
          className=" h-8 bg-slate-700 pl-2 rounded-xl"
          placeholder="search..."
          name="myInput"
        />
      </div>
      <br />
      <div className=" h-10 w-10">
        <div>
          <Popup
            trigger={
              <BookmarkIcon className="ml-2 text-black mb-2 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
            }
            position="right center"
          >
            <div className="text-black">Saved! ✨</div>
          </Popup>
        </div>
        <div>
          <StarIcon className="stroke-black ml-2 stroke-2 fill-none mb-2 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
        </div>
        <hr className=" border-neutral-500 w-60 border-2 mt-4" />
      </div>
      <ol className=" font-semibold pl-8 pt-16 list-decimal text-black">
        <p className="pl-16 font-bold">Task</p>
        <li className=" text-gray-400 line-through">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
        <li className=" text-xl mt-1 mb-1">must be done</li>
        <div className=" text-gray-300">
          <li>future task</li>
          <li>......</li>
          <li>......</li>
          <li>......</li>
          <li>......</li>
          <li>......</li>
          <li>......</li>
        </div>
      </ol>
    </div>
  );
};

export default SideBar;
