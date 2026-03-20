import { useRef, useEffect, useState } from "react";

const Player = ({ songs, currentIndex, setCurrentIndex }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentIndex];

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  return (
    <div>
      <h3>🎧 Now Playing</h3>
      <h2>{currentSong.title}</h2>
      <p>🎤 {currentSong.singer}</p>
      <p>💿 {currentSong.album}</p>
  
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={nextSong}
      />
  
      <div>
        <button onClick={prevSong}>⏮</button>
        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={nextSong}>⏭</button>
      </div>
    </div>
  );
};

export default Player;