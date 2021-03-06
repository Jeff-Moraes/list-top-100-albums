import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export default function AlbumCard({ album, showAlbumDetails, handleFavorite }) {
  return (
    <Container>
      <img
        src={album["im:image"][2].label}
        alt={"album" + album["im:name"].label}
      />
      <div className="cardInfos">
        <h1>{album["im:name"].label}</h1>
        <p className="artistName">{album["im:artist"].label}</p>

        <div className="detailsButtonContainer">
          <button
            type="button"
            onClick={() => showAlbumDetails(album.id.attributes["im:id"])}
          >
            {album.showDetails ? "hide details" : "show details"}
          </button>
          <FontAwesomeIcon
            className="HeartIcon"
            icon={faHeart}
            color={album.isFavorite ? "#e8505b" : "#ffdecf"}
            onClick={() => handleFavorite(album.id.attributes["im:id"])}
          />
        </div>

        {album.showDetails && (
          <div className="detailsContainer">
            <p>
              category: <strong> {album.category.attributes.label}</strong>
            </p>
            <p>
              price: <strong> {album["im:price"].label}</strong>
            </p>
            <p>
              release date:{" "}
              <strong> {album["im:releaseDate"].attributes.label}</strong>
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
