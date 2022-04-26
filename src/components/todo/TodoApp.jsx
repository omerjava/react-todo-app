import React from "react";
import TodoItem from "../todoItem/TodoItem";
import { useState } from "react";
import "./TodoApp.css";
import "../todoItem/TodoItem.css";

function TodoForm() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [booleanEdit, setBooleanEdit] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");
  const [index, setIndex] = useState(0);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddButton = () => {
    if (userInput.length > 0) {
      setTodoList([...todoList, userInput]);
      setUserInput("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid input!");
    }
  };

  const handleEditInput = (event) => setEditInputValue(event.target.value);

  const handleUpdateButton = () => {
    if (editInputValue.length > 0) {
      setTodoList(() => {
        todoList[index] = editInputValue;
        return todoList;
      });
      setBooleanEdit(!booleanEdit);
      setErrorMessage("");
    } else {
      setErrorMessage("You can not update with empty input!");
    }
  };

  return (
    <div className="todoApp">
      <div className="add-todo-item">
        <h1>React Todo App</h1>
        <input
          type="text"
          name="addItem"
          id="addItem"
          value={userInput}
          onChange={handleUserInput}
          maxLength="90"
          placeholder="Enter your to do.."
        />
        <button className="btn" onClick={handleAddButton}>
          Add
        </button>
        <p className={errorMessage !== "" ? "error" : "no-error"}>
          {errorMessage}
        </p>
      </div>

      <div className={booleanEdit ? "edit" : "no-edit"}>
        <input
          type="text"
          value={editInputValue}
          onChange={handleEditInput}
          maxLength="90"
        />
        <button className="btn2" onClick={handleUpdateButton}>
          Update
        </button>
      </div>

      <div className="list">
        {todoList.map((element, index) => (
          <TodoItem
            key={index}
            item={element}
            clickEdit={() => {
              setBooleanEdit(!booleanEdit);
              setEditInputValue(element);
              setIndex(index);
            }}
            clickRemove={() =>
              setTodoList(todoList.filter((v) => v !== element))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TodoForm;
