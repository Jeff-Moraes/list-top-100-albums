import React from "react";
import { render } from "@testing-library/react";
import SearchAlbum from "./index";

describe("show SearchAlbum", () => {
  it("should be able to render the SearchAlbum", () => {
    const { debug } = render(<SearchAlbum />);
    debug();
  });
});
