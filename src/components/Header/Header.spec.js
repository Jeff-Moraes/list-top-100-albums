import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("show Header", () => {
  it("should be able to render the Header", () => {
    const { debug } = render(<Header />);
    debug();
  });
});
