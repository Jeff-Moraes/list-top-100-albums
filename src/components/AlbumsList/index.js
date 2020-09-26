import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  const loadAlbums = async () => {
    const albumsFromiTunesAPI = await axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    console.log(albumsFromiTunesAPI.data.feed.entry, "albumsFromiTunesAPI");
    setAlbums(albumsFromiTunesAPI.data.feed.entry);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div>
      <h1>AlbumsList</h1>
    </div>
  );
}
