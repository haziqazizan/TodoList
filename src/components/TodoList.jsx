import React from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export const TodoList = ({ task, toggleCompleted, deleteTodo }) => {
  return (
    <div className="flex flex-row font-semibold justify-between w-[350px] items-center text-lg text-white p-2 rounded-md bg-blue-300">
      <p
        onClick={() => toggleCompleted(task.id)}
        className={task.completed ? " line-through" : ""}
      >
        {task.task}
      </p>
      <div className=" gap-2 flex flex-row">
        <HiOutlineTrash
          className=" bg-red-500 w-8 h-8 p-2 rounded-full cursor-pointer "
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
