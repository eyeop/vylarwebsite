import React from "react";
import demo1 from "../audio/2025_06_07Feelings_Progress.wav";
import demo2 from "../audio/2025_06_30_BOMH_75bpm_Amaj.mp3";
import demo3 from "../audio/2025_07_13_WildestDemo.mp3";
import comforzoneDemo from "../audio/2025_05_25_ComfortZone2.wav";
import forgetDemo from "../audio/2025_03_17_Forget_Demo.mp3";
import friendGirlDemo from "../audio/2025_01_19_FriendGirlDemo.mp3";
import "../index.css";

export default function Demos() {
  const demos = [
    { title: "Wildest", src: demo3 },
    { title: "Comfort Zone", src: comforzoneDemo },
    { title: "Forget", src: forgetDemo },
    { title: "A Bit Of My", src: demo2 },
    { title: "Friend Girl", src: friendGirlDemo },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start pt-8"
      style={{ backgroundImage: "url('/src/img/background.jpg')" }}
    >
      <div className="bg-black/70 w-full py-6 px-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Demo Tracks</h1>
        <p className="text-lg">Experience the latest demos from Vylar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-6xl mt-4">
        {demos.map((demo, index) => (
          <div
            key={index}
            className="bg-black/50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              {demo.title}
            </h2>
            <audio
              src={demo.src}
              controls
              className="w-full"
              style={{ background: "none", borderRadius: "0" }}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Reference Songs</h2>
        <div className="flex justify-center">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2icjo7ICbV3pt90CzG20PV?utm_source=generator"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
