import React, { useEffect, useReducer, useRef } from "react";
import data from "../data";
import Details from "./Details";
import styled from "styled-components";

export const TodoContext = React.createContext();
//need provider, and consumer

function Todos() {
  const todo = data;

  return (
    <Wrapper>
      <TodoContext.Provider value={todo}>
        <div className="todo-list">
          <h2>Todos</h2>

          <Details></Details>
        </div>
      </TodoContext.Provider>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: #06283d;
  padding: 2rem 0;
  max-width: 90vw;
  margin: auto;
  text-align: center;
  background-color: #fff;
  margin-top: 5rem;
  border-radius: 5px;

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
