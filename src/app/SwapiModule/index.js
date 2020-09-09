import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import context from "./context";

export const initialState = {
  filmList: {
    data: [],
    pending: false,
    error: null,
  },
  currentFilm: {
    data: {},
    pending: false,
    error: null,
  },
};

export const getFilmList = createAsyncThunk(
  "swapi/getFilmList",
  async (props = {}) => await context.getFilms({ format: props.format })
);

export const getCurrentFilm = createAsyncThunk(
  "swapi/getCurrentFilm",
  async (props = {}) => await context.getFilmById({ id: props.id })
);

const slice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getFilmList.pending]: (state, action) => ({
      ...state,
      filmList: { ...initialState.filmList, pending: true },
    }),
    [getFilmList.fulfilled]: (state, action) => ({
      ...state,
      filmList: { ...initialState.filmList, data: action.payload },
    }),
    [getFilmList.rejected]: (state, action) => ({
      ...state,
      filmList: { ...initialState.filmList, error: action.error },
    }),
    [getCurrentFilm.pending]: (state, action) => ({
      ...state,
      currentFilm: { ...initialState.currentFilm, pending: true },
    }),
    [getCurrentFilm.fulfilled]: (state, action) => {
      return {
        ...state,
        currentFilm: { ...initialState.currentFilm, data: action.payload },
      };
    },
    [getCurrentFilm.rejected]: (state, action) => ({
      ...state,
      currentFilm: { ...initialState.currentFilm, error: action.error },
    }),
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
