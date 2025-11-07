import React from "react";
import TodoApp from "./components/TodoApp";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <h1 className="text-center font-serif font-semibold text-gray-500 mb-4">
        Todo List App
      </h1>
      <TodoApp />
      <ToastContainer />
    </div>
  );
};

export default App;
