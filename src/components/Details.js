import React, { useContext } from "react";
import { TodoContext } from "./Todos";

function Details() {
  const data = useContext(TodoContext);
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
