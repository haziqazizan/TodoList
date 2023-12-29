import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEdited: false },
      ]);
    }

    console.log(todos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-[500px] min-h-[200px] bg-blue-900 p-4 rounded-md items-center justify-center">
        <p className="text-white text-center text-2xl font-bold mb-6">
          Get Things Done!
        </p>
        <div className="mt-2 ">
          <form
            className="flex flex-row justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="what is the task today?"
              className="p-2 rounded-l-md font-semibold"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className=" bg-blue-300 rounded-r-md p-2">
              Add Task
            </button>
          </form>
          <div className="flex flex-col gap-4 items-center justify-center mt-4 ">
            {todos.map((todo, index) => (
              <TodoList task={todo} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
