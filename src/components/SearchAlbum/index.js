import React from "react";

import { Container } from "./styles";

export default function SearchAlbum({
  albumsCategories,
  handleSubmitForm,
  albumNameFromInput,
  setAlbumNameFromInput,
  setSelectedCategory,
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
      <button type="submit">search</button>
    </Container>
  );
}
