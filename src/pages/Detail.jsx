import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Buttonstyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 10px;
  width: 100px;
  height: 35px;
  cursor: pointer;
`;

const Todobox = styled.div`
  margin-left: 10px;
  border: 4px solid teal;
  border-radius: 12px;
  width: 600px;
  height: 400px;
  padding-bottom: 20px;
  padding-left: 20px;
`;

const Boxlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 1000px;
`;

const Toptitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 5px;
`;

function Detail() {
  const params = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(params.id))
  );
  const navigate = useNavigate();
  return (
    <Boxlist>
      <Todobox>
        <Toptitle>
          <div>{`ID: ${todo.id}`}</div>
          <Buttonstyle
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Buttonstyle>
        </Toptitle>
        <h2>{todo.title}</h2>
        <div>{todo.content}</div>
      </Todobox>
    </Boxlist>
  );
}

export default Detail;
