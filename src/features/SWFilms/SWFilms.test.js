import React from "react";
import { mount } from "enzyme";
import SWFilms from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("SWFilms", () => {
  describe("default render", () => {
    it("should render two titles", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <SWFilms />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      expect(wrapper.find(".SWFilm__item").length).toBe(2);
    });
  });
});
