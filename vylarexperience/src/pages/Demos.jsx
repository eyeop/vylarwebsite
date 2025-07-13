import React from "react";
import demo1 from "../audio/2025_06_07Feelings_Progress.wav";
import demo2 from "../audio/2025_06_30_BOMH_75bpm_Amaj.mp3";
import demo3 from "../audio/2025_07_13_WildestDemo.mp3";
// ...add more imports as needed...

const demoTracks = [
  { title: "Demo 1", url: demo1 },
  { title: "Demo 2", url: demo2 },
  { title: "Demo 3", url: demo3 },
  // ...add more demos as needed...
];

export default function Demos() {
  return (
    <div className="max-w-sm mx-auto p-6">
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Wildest</h2>
        <audio src={demo3} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Feelings</h2>
        <audio src={demo1} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">A Bit Of My</h2>
        <audio src={demo2} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* ...add more demos as needed... */}
    </div>
  );
}
