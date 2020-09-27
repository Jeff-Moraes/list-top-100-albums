import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export default function SearchAlbum({
  albumsCategories = [],
  handleSubmitForm,
  albumNameFromInput,
  setAlbumNameFromInput,
  setSelectedCategory,
  showFavoritiesOnly,
}) {
  return (
    <Container onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="albumNameInput"
        placeholder="Search by album name"
        value={albumNameFromInput}
        onChange={(event) => setAlbumNameFromInput(event.target.value)}
      />
      <div>
        <label htmlFor="albumCategory">Search by category</label>
        <select
          name="albumCategory"
          id="albumCategory"
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">all</option>
          {albumsCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Search</button>
      <button type="button" onClick={showFavoritiesOnly}>
        <FontAwesomeIcon icon={faHeart} />
        Favorities
      </button>
    </Container>
  );
}
