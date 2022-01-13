import axios from "axios";
import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login } from "../components/Login";
import { loginFailure, loginRequest, loginSuccess } from "../Redux/auth/action";

function Loginpage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );

  const handleLogin = ({ email, password }) => {
    // console.log("password:", password);
    // console.log("email:", email);
    const requestAction = loginRequest();
    dispatch(requestAction);

    // axios
    //   .post("https://reqres.in/api/login", {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     console.log("res:", res);
    //     const successAction = loginSuccess(res.data.token);
    //     dispatch(successAction);
    //   })
    //   .catch((err) => {
    //     console.log("err:", err);
    //     const failureAction = loginFailure(err.message);
    //     dispatch(failureAction);
    //   });

    if (email === "admin" && password === "admin") {
      const action = loginSuccess("fakeToken");
      // console.log("action:", action);
      dispatch(action);
    } else {
      const action = loginFailure("Wrong credential");
      // console.log("action:", action);
      dispatch(action);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export { Loginpage };
