import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const token = loadData("token");

const intiState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false,
};

export const authReducer = (state = intiState, { type, payload }) => {
  // console.log("payload:", payload);
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case LOGIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
