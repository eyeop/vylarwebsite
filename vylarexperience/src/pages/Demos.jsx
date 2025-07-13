import React from "react";
import demo1 from "../audio/2025_06_07Feelings_Progress.wav";
import demo2 from "../audio/2025_06_30_BOMH_75bpm_Amaj.mp3";
import demo3 from "../audio/2025_07_13_WildestDemo.mp3";
import comforzoneDemo from "../audio/2025_05_25_ComfortZone2.wav";
import forgetDemo from "../audio/2025_03_17_Forget_Demo.mp3";
import friendGirlDemo from "../audio/2025_01_19_FriendGirlDemo.mp3";

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
        <h2 className="text-xl font-semibold mb-2">Comfort Zone</h2>
        <audio src={comforzoneDemo} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Forget</h2>
        <audio src={forgetDemo} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">A Bit Of My</h2>
        <audio src={demo2} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Friend Girl</h2>
        <audio src={friendGirlDemo} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div>
      {/* <div className="mb-8 bg-white/80 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Feelings</h2>
        <audio src={demo1} controls className="w-full mt-2 rounded">
          Your browser does not support the audio element.
        </audio>
      </div> */}
    </div>
  );
}
