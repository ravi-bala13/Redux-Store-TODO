import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO } from "./actionTypes";

const initState = {
  todos: loadData("todos") || [],
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updatedTodo = [...state.todos, payload];

      saveData("todos", updatedTodo);
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    default:
      return state;
  }
};
