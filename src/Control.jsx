import React from "react";

function Controls({
  isPlaying,
  playPause,
  nextSong,
  prevSong,
  volume,
  changeVolume,
  progress,
  changeProgress,
  duration
}) {
  return (
    <div>
      <button onClick={prevSong}>Previous</button>
      <button onClick={playPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={nextSong}>Next</button>

      <br /><br />

      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={changeProgress}
      />

      <br /><br />

      Volume:
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={changeVolume}
      />
    </div>
  );
}

export default Controls;