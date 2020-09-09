import app from "./index.js";
import { initialState as swapi } from "app/SwapiModule";

const combinedState = {
  swapi,
};

describe("app", () => {
  describe("initialState", () => {
    it("should load the initial state", async () => {
      const state = await app.getState();
      expect(JSON.stringify(state)).toBe(JSON.stringify(combinedState));
    });
  });
});
