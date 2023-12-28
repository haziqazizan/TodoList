import React from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export const TodoList = ({ task }) => {
  return (
    <div className="flex flex-row  font-semibold  justify-between w-[350px] items-center text-lg text-white p-2 bg-blue-300 rounded-md">
      <p className="">{task.task}</p>
      <div className=" gap-2 flex flex-row">
        <HiOutlinePencilAlt  className="bg-green-500 w-8 h-8 rounded-full p-2"/>
        <HiOutlineTrash className=" bg-red-500 w-8 h-8 p-2 rounded-full"/>
      </div>
    </div>
  );
};
