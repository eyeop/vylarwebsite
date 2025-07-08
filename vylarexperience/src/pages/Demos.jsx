import React from "react";
import demo1 from "../audio/2025_06_30_BOMH_75bpm_Amaj.mp3";
import demo2 from "../audio/2025_06_07Feelings_Progress.wav";

const demoTracks = [
  { title: "Demo 1", url: demo1 },
  { title: "Demo 2", url: demo2 },
  // Add more demos as needed
];

export default function Demos() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>Demo Player</h1>
      <ul>
        {demoTracks.map((track) => (
          <li key={track.url} style={{ marginBottom: 24 }}>
            <div>{track.title}</div>
            <audio
              src={track.url}
              controls
              style={{ width: "100%", marginTop: 8 }}
            >
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
