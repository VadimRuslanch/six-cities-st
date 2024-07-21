import {AxiosInstance} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {CardCity} from "../types/types";
import {APIRoute} from "../const";


export const fetchPlaceAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('fetchPlace',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<CardCity>(APIRoute.Favorites)
  })
