import React, { useState, useEffect } from "react";
import axios from "axios";

import AlbumCard from "../AlbumCard";
import SearchAlbum from "../SearchAlbum";

export default function AlbumsList() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState(albums);

  const [albumsCategories, setAlbumsCategories] = useState([]);
  const [albumNameFromInput, setAlbumNameFromInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getAlbumsCategories = (allAlbums) => {
    let allAlbumsCategoriesArr = allAlbums.map(
      (album) => album.category.attributes.label
    );
    let filteredAlbumsCategoriesArr = [...new Set(allAlbumsCategoriesArr)];
    return filteredAlbumsCategoriesArr;
  };

  const loadAlbums = async () => {
    const albumsFromItunesAPI = await axios.get(
      "https://Itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    setAlbums(albumsFromItunesAPI.data.feed.entry);
    setFilteredAlbums(albumsFromItunesAPI.data.feed.entry);

    let albumsCategories = getAlbumsCategories(
      albumsFromItunesAPI.data.feed.entry
    );
    setAlbumsCategories(albumsCategories);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    let filteredAlbumsArr = albums.filter((album) => {
      if (selectedCategory !== "all") {
        return (
          album["im:name"].label.toLowerCase().includes(albumNameFromInput) &&
          album.category.attributes.label === selectedCategory
        );
      } else {
        return album["im:name"].label
          .toLowerCase()
          .includes(albumNameFromInput);
      }
    });
    setFilteredAlbums(filteredAlbumsArr);
    setAlbumNameFromInput("");
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div>
      <SearchAlbum
        albumsCategories={albumsCategories}
        handleSubmitForm={handleSubmitForm}
        albumNameFromInput={albumNameFromInput}
        setAlbumNameFromInput={setAlbumNameFromInput}
        setSelectedCategory={setSelectedCategory}
      />
      {filteredAlbums.map((album) => (
        <AlbumCard album={album} key={album.id.attributes["im:id"]} />
      ))}
    </div>
  );
}
