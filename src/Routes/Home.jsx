import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <div>{token}</div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export { Home };
