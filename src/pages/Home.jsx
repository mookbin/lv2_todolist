import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addTodo, completeTodo, removeTodo } from "../redux/modules/todos";

const Toptitle = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  font-size: 18px;
  padding: 15px;
`;

const Inputbox = styled.div`
  background-color: #eee;
  margin: 20px 10px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  border-radius: 10px;
`;
const Inputstyle = styled.input`
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
`;

const Addbuttonstyle = styled.button`
  margin-left: 185px;
  width: 150px;
  padding: 10px;
  background-color: #008080;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Boxlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Todobox = styled.div`
  margin-left: 10px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const Buttonset = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
`;

const H2st = styled.h2`
  padding-left: 20px;
`;

const Buttonstyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 10px;
  width: 150px;
  height: 35px;
  cursor: pointer;
`;

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
    const maxId = Date.now() + Math.floor(Math.random() * 100);
    dispatch(
      addTodo({
        id: maxId,
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
      <Toptitle>
        <span>My Todo List</span> <span>React</span>
      </Toptitle>
      <Inputbox>
        <div>
          <span>
            제목 &nbsp;{" "}
            <Inputstyle value={title} onChange={handleTitleChange} />
          </span>
          <span>
            내용 &nbsp;{" "}
            <Inputstyle value={content} onChange={handleContentChange} />
          </span>
        </div>
        <Addbuttonstyle onClick={handleAddTodo}>추가하기</Addbuttonstyle>
      </Inputbox>
      <H2st>Working..🔥</H2st>
      <Boxlist>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todobox key={todo.id}>
              <Link to={`/detail/${todo.id}`}>상세보기</Link>
              <h2>{todo.title}</h2>
              <span>{todo.content}</span>
              <Buttonset>
                <Buttonstyle
                  bordercolor="green"
                  onClick={() => handleCompleteTodo(todo.id)}
                >
                  완료
                </Buttonstyle>
                <Buttonstyle
                  bordercolor="red"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  삭제
                </Buttonstyle>
              </Buttonset>
            </Todobox>
          ))}
      </Boxlist>
      <H2st>Done..!🎉</H2st>
      <Boxlist>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todobox key={todo.id}>
              <Link bordercolor="gray" to={`/detail/${todo.id}`}>
                상세보기
              </Link>
              <h2>{todo.title}</h2>
              <span>{todo.content}</span>
              <Buttonset>
                <Buttonstyle
                  bordercolor="green"
                  onClick={() => handleCompleteTodo(todo.id)}
                >
                  취소
                </Buttonstyle>

                <Buttonstyle
                  bordercolor="red"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  삭제
                </Buttonstyle>
              </Buttonset>
            </Todobox>
          ))}
      </Boxlist>
    </>
  );
}

export default Home;
