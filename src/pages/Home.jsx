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
  // 리덕스 스토어에서 필요한 상태 값 선택하기(리덕스 스토어의 상태 객체를 매개변수로 받아서
  //해당 상태 객체에서 필요한 값을 선택한다 )

  // 즉, 리덕스 스토어에서 todos배열을 선택해서 todos 변수에 할당한다는 뜻

  const dispatch = useDispatch();
  // 이 컴포넌트에서 액션을 디스패치하기 위함
  //리덕스 스토어의 상태 변경을 위해 액션 전달하는 역할

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleAddTodo = () => {
    const maxId = Date.now() + Math.floor(Math.random() * 100);
    //현재 시간을 밀리초 단위로 반환. 새로운 항목의 고유한 ID값으로 사용해야하기 때문에 겹치면 안됨
    dispatch(
      addTodo({
        id: maxId,
        title: title,
        content: content,
        isDone: false,
      })
      // todos 리듀서에서 처리돼서 state배열에 새 항목이 추가된다
      //새로운 할일 항목 정보들이 담겨있음
    );
    setTitle("");
    setContent("");
  };
  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };
  // 완료된 할 일 목록의 id 전달받음
  //id를 통해 완료된 항목을 업데이트

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  // 삭제된 할일 항목의 id값 전달받음
  //REMOVE_TODO action이 id값을 통해 삭제할 항목을 찾아서 해당 항목을 제외한 새로운 배열을 반환함

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
