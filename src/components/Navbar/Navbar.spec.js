import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./index";

describe("show Navbar", () => {
  it("should be able to render the Navbar", () => {
    const { debug } = render(<Navbar />);
    debug();
  });
});
