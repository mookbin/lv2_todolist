import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(params.id))
  );

  return (
    <>
      <div>{`ID: ${todo.id}`}</div>
      <h2>{todo.title}</h2>
      <div>{todo.content}</div>
    </>
  );
}

export default Detail;
