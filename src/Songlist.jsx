import React from "react";

function SongList({ songs, selectSong }) {
  return (
    <div>
      <h3>Song List</h3>
      {songs.map((song, index) => (
        <p key={index} onClick={() => selectSong(index)}>
          {song.title}
        </p>
      ))}
    </div>
  );
}

export default SongList;