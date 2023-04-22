// import React from "react";
// import { v4 as uuidv4 } from "uuid";

//액션타입 정의 action value
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

//액션 생성자 함수 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const completeTodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};

// initial state

const initialState = [
  { id: 1, title: "1번", content: "1번 내용", isDone: false },
  { id: 2, title: "2번", content: "2번 내용", isDone: true },
];

// 리듀서 state들을 바꾼다

const todos = (state = initialState, action) => {
  //state는 현재 상태를 나타내는 배열
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    //액션 생성자 함수에서 전달받은 payload = 새로운 할 일 목록을 나타내는 객체(title,content,isDone )
    // action.payload에 할당돼서 새로운 할 일 목록 추가할 때 참조된다
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    // 여기서의 payload는 삭제하려는 할일 목록의 id값.

    case COMPLETE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          // 여기서의 payload는 완료상태로 변경하려는 할일 목록의 id값.
          //item은 현재 반복중인 할 일 항목 객체임

          return { ...item, isDone: !item.isDone };
          //isDone 속성 값을 반전시켜 업데이트
          //변경된 할일 항목 객체는 새로운 배열에 포함, 안된건, 그대로 유지
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
export default todos;
