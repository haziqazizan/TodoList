import React, { useState } from "react";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  return (
    <div className="w-screen h-screen bg-blue-400 flex flex-col items-center justify-center relative">
      <TodoForm />
    </div>
  );
};
