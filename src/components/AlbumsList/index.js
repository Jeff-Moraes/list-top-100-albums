import React, { useState, useEffect } from "react";
import axios from "axios";

import AlbumCard from "../AlbumCard";
import SearchAlbum from "../SearchAlbum";

export default function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  const loadAlbums = async () => {
    const albumsFromiTunesAPI = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    setAlbums(albumsFromiTunesAPI.data.feed.entry);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div>
      <SearchAlbum />
      {albums.map((album) => (
        <AlbumCard album={album} key={album.id.attributes["im:id"]} />
      ))}
    </div>
  );
}
