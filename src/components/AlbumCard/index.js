import React from "react";

import { Container } from "./styles";

export default function AlbumCard({ album }) {
  // console.log(album);
  return (
    <Container>
      <img
        src={album["im:image"][2].label}
        alt={"album" + album["im:name"].label}
      />
      <div className="cardInfos">
        <h1>{album["im:name"].label}</h1>
        <p className="artistName">{album["im:artist"].label}</p>
      </div>
    </Container>
  );
}
