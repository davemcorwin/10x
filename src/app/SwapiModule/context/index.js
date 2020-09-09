/* istanbul ignore file */
import * as swapi from "./swapi";
import * as test from "./test";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = swapi;
}

export default context;
