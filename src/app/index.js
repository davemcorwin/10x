import { configureStore } from "@reduxjs/toolkit";
import swapi from "./SwapiModule";

export default configureStore({
  reducer: {
    swapi,
  },
});
