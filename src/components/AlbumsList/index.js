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

  const filterAlbums = () => {
    let filteredAlbumsArr = albums.filter((album) => {
      album.showDetails = false;
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
  };

  const handleSubmitForm = (event) => {
    event && event.preventDefault();
    filterAlbums();
    setAlbumNameFromInput("");
  };

  const handleFavorite = (albumId) => {
    let updatedAlbumsArr = albums.map((album) => {
      if (album.id.attributes["im:id"] === albumId) {
        album.isFavorite = !album.isFavorite;
      }
      return album;
    });
    setAlbums(updatedAlbumsArr);
    filterAlbums();
  };

  const showFavoritiesOnly = () => {
    let onlyFavoriteAlbums = albums.filter((album) => album.isFavorite);
    setFilteredAlbums(onlyFavoriteAlbums);
  };

  const showAlbumDetails = (albumId) => {
    let updatedAlbumsArr = filteredAlbums.map((album) => {
      if (album.id.attributes["im:id"] === albumId) {
        album.showDetails = !album.showDetails;
      }
      return album;
    });
    setFilteredAlbums(updatedAlbumsArr);
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
        showFavoritiesOnly={showFavoritiesOnly}
      />
      {filteredAlbums.map((album) => (
        <AlbumCard
          album={album}
          key={album.id.attributes["im:id"]}
          showAlbumDetails={showAlbumDetails}
          handleFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}
