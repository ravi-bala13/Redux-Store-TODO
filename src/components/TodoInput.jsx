import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todos/action";
import { nanoid } from "nanoid";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: nanoid(3),
    };

    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
