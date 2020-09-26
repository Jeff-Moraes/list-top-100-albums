import React from "react";

import { Container } from "./styles";

export default function SearchAlbum() {
  return (
    <Container>
      <label htmlFor="albumNameInput">Album name</label>
      <input type="text" name="albumNameInput" id="albumNameInput" />
      <button type="submit">search</button>
    </Container>
  );
}
