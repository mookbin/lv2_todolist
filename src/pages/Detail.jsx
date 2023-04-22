// // import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function Detail() {
//   const params = useParams();
//   const todo = useSelector((state) =>
//     // state.todos.find((todo) => todo.id === id)
//   );

//   const foundTodo = todo.find((item) => {
//     return item.id === parseInt(params.id);
//   });

//   return (
//     <>
//       <div>{`ID: ${foundTodo.id}`}</div>
//       <h2>{foundTodo.title}</h2>
//       <div>{foundTodo.content}</div>
//     </>
//   );
// }

// export default Detail;
