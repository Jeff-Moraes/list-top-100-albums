import React from "react";

export default function AlbumCard({ album }) {
  return (
    <div>
      <img
        src={album["im:image"][2].label}
        alt={"album" + album["im:name"].label}
      />
      <p>{album["im:name"].label}</p>
    </div>
  );
}
