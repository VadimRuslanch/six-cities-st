import {createAction} from "@reduxjs/toolkit";
import {CardCity} from "../types/types";
import {AuthorizationStatus} from "../const";

export const changeCity = createAction("changeCity", (value) => {
  return {
    payload: value,
  }
});

export const setPlaceCity = createAction("setPlaceCity", (value) => {
  return {
    payload: value,
  }
});

export const loadPlace = createAction<CardCity>('loadPlace');

export const requireAuthorization = createAction<AuthorizationStatus>("requireAuthorization");
