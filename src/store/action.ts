import {createAction} from "@reduxjs/toolkit";

export const changeCity = createAction("changeCity", (value)=>{
  return {
    payload: value,
  }
});

export const setPlaceCity = createAction("setPlaceCity", (value)=>{
  return {
    payload: value,
  }
});
