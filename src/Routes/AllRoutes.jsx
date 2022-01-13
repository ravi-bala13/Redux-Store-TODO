import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Loginpage } from "./LoginPage";

function AllRoutes() {
  return (
    <>
      <div>
        <Link to={"/"} style={{ margin: "20px" }}>
          Tasks
        </Link>
        <Link to={"/login"} element={<Loginpage />}>
          Login
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/" element={<h3>error</h3>}></Route>
      </Routes>
    </>
  );
}

export { AllRoutes };
