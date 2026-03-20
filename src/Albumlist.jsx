const AlbumList = ({ songs, selectSong }) => {
  return (
    <div>
      <h2>Album List</h2>

      {songs.map((song, index) => (
        <div
          key={song.id}
          className="song-item"
          onClick={() => selectSong(index)}
        >
          <strong>{song.title}</strong>
          <p>Singer: {song.singer}</p>
          <p>Album: {song.album}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;