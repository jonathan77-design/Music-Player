import { useState } from "react";
import AlbumList from "./Albumlist";
import Player from "./Player";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);

    const newSongs = files.map((file, index) => ({
      id: index + Date.now(),
      title: file.name,
      singer: "User Upload",
      album: "User Album",
      src: URL.createObjectURL(file),
    }));

    setSongs((prev) => [...prev, ...newSongs]);
  };

  return (
    <div className="container">
      <h1>🎵 Music Player</h1>

      {/* Hidden Input */}
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleUpload}
        id="fileInput"
        style={{ display: "none" }}
      />

      {/* Add Song Button */}
      <button onClick={() => document.getElementById("fileInput").click()}>
        ➕ Add Song
      </button>

      {songs.length > 0 && (
        <div className="main">
          <div className="album">
            <AlbumList songs={songs} selectSong={setCurrentIndex} />
          </div>

          <div className="player">
            <Player
              songs={songs}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;