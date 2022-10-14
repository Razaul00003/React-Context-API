import React, { useEffect, useReducer, useRef } from "react";
import data from "../data";
import styled from "styled-components";

function Todos(props) {
  const reducer = (state, action) => {
    const newTodo = [...state.todo, action.payload];
    if (action.type === "ADD_ITEM") {
      console.log(newTodo);
      console.log(action.payload);
      return { ...state, todo: newTodo };
    }
    throw new Error("an error occured");
  };
  const initialState = {
    todo: [],
  };
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <Wrapper>
      <h2>Add to do</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <div className="todo-list">
        <h2>Todos</h2>
        <ul>
          {state.todo.map((todo, index) => (
            <li key={index}>
              <h2>{todo.title} </h2>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem 0;
  max-width: 90vw;
  margin: auto;
  text-align: center;
  background-color: #fff;
  margin-top: 5rem;
  border-radius: 5px;

  input {
    padding: 1rem;
    border: none;
    background-color: #eee;
    display: block;
    max-width: 80%;
    margin: auto;
    margin-bottom: 1rem;
  }
  button {
    padding: 5px 1rem;
    border: none;
    font-size: 1rem;
    background-color: red;
    color: white;
  }
  ul {
    list-style: none;
    text-align: left;
  }
  span {
    background-color: red;
    font-size: 1rem;
    padding: 2px;
  }
`;
export default Todos;
