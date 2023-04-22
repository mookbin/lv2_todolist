import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { addTodo, completeTodo, removeTodo } from "../redux/modules/todos";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: title,
        content: content,
        isDone: false,
      })
    );
    setTitle("");
    setContent("");
  };
  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div>
        <span>My Todo List</span> <span>React</span>
      </div>
      <div>
        <div>
          <span>
            제목 &nbsp; <input value={title} onChange={handleTitleChange} />
          </span>
          <span>
            내용 &nbsp; <input value={content} onChange={handleContentChange} />
          </span>
        </div>
        <button onClick={handleAddTodo}>추가하기</button>
      </div>
      <h2>Working..🔥</h2>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <Link to={`/detail/${todo.id}`}>상세보기</Link>
            <button onClick={() => handleCompleteTodo(todo.id)}>완료</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
          </div>
        ))}
      <h2>Done..!🎉</h2>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <Link to={`/detail/${todo.id}`}>상세보기</Link>
            <button onClick={() => handleCompleteTodo(todo.id)}>취소</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
          </div>
        ))}
    </>
  );
}

export default Home;
