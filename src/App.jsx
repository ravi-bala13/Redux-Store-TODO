import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <TodoInput />
      <TodoList /> */}
    </div>
  );
}

export default App;
