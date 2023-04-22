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
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case COMPLETE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
export default todos;
