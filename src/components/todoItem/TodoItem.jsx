import React from "react";
import { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [textDecoration, setTextDecoration] = useState(false);

  return (
    <div className="todoItem">
      <div className="top">
        <span
          className={textDecoration ? "checked" : "unchecked"}
          onClick={() => setTextDecoration(!textDecoration)}
        >
          {props.item}
        </span>
        <span>{props.date}</span>
        <span>
          <span>
            <button onClick={props.clickEdit}>Edit</button>
          </span>
          <span>
            <button onClick={props.clickRemove}>Remove</button>
          </span>
        </span>
      </div>
      
    </div>
  );
}

export default TodoItem;
