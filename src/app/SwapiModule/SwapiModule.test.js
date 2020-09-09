import { configureStore } from "@reduxjs/toolkit";
import reducer, {
  initialState,
  getFilmList,
  getCurrentFilm,
  reset,
} from "app/SwapiModule";

const store = configureStore({ reducer });

describe("SwapiModule", () => {
  describe("initialState", () => {
    it("should load the initial state", async () => {
      const state = await store.getState();
      expect(JSON.stringify(state)).toBe(JSON.stringify(initialState));
    });
  });
  describe(".getFilmList", () => {
    beforeEach(async () => store.dispatch(reset()));
    it("should load a list of films", async () => {
      await store.dispatch(getFilmList());
      const data = store.getState();
      expect(data.filmList.data.length).toBe(2);
    });
    it("should load an error", async () => {
      await store.dispatch(getFilmList({ format: "error" }));
      const data = store.getState();
      expect(data.filmList.error.message).toBe("Invalid Format");
    });
  });
  describe(".getCurrentFilm", () => {
    beforeEach(async () => store.dispatch(reset()));

    it("should load a films", async () => {
      await store.dispatch(getCurrentFilm({ id: 1 }));
      const data = store.getState();
      expect(data.currentFilm.data.title).toBe("A New Hope");
    });
    it("should load an error when no id is passed", async () => {
      await store.dispatch(getCurrentFilm());
      const data = store.getState();
      expect(data.currentFilm.error.message).toBe("Invalid Id");
    });
  });
});
