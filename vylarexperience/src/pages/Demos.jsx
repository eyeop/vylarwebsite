import { useRef, useState } from "react";
import demo2 from "../audio/2025_06_30_BOMH_75bpm_Amaj.mp3";
import demo3 from "../audio/2025_07_13_WildestDemo.mp3";
import comforzoneDemo from "../audio/2025_05_25_ComfortZone2.wav";
import forgetDemo from "../audio/2025_03_17_Forget_Demo.mp3";
import friendGirlDemo from "../audio/2025_01_19_FriendGirlDemo.mp3";
import "../index.css";

const demos = [
  { title: "Wildest", src: demo3 },
  { title: "Comfort Zone", src: comforzoneDemo },
  { title: "Forget", src: forgetDemo },
  { title: "A Bit Of My", src: demo2 },
  { title: "Friend Girl", src: friendGirlDemo },
];

function formatTime(time) {
  if (!Number.isFinite(time)) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default function Demos() {
  const audioRefs = useRef([]);
  const [playerState, setPlayerState] = useState(() =>
    demos.map(() => ({
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    })),
  );

  const updateTrackState = (index, updates) => {
    setPlayerState((currentState) =>
      currentState.map((track, trackIndex) =>
        trackIndex === index ? { ...track, ...updates } : track,
      ),
    );
  };

  const pauseOtherTracks = (activeIndex) => {
    audioRefs.current.forEach((audio, index) => {
      if (index !== activeIndex && audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  const togglePlayback = async (index) => {
    const audio = audioRefs.current[index];

    if (!audio) {
      return;
    }

    if (audio.paused) {
      pauseOtherTracks(index);

      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to start demo playback.", error);
      }

      return;
    }

    audio.pause();
  };

  const handleSeek = (index, nextTime) => {
    const audio = audioRefs.current[index];

    if (!audio) {
      return;
    }

    audio.currentTime = nextTime;
    updateTrackState(index, { currentTime: nextTime });
  };

  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-16 text-black">
      <div className="w-full max-w-3xl rounded-3xl bg-black/60 px-6 py-8 text-center text-gray-100 shadow-xl backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-300">Studio</p>
        <h1 className="mt-3 text-4xl font-semibold">Demo Tracks</h1>
        <p className="mt-4 text-base text-gray-200 sm:text-lg">
          Experience the latest demos from Vylar.
        </p>
      </div>

      <div className="mt-8 flex w-full max-w-3xl flex-col gap-3">
        {demos.map((demo, index) => {
          const track = playerState[index];
          const progressPercent = track.duration
            ? `${(track.currentTime / track.duration) * 100}%`
            : "0%";

          return (
            <article
              key={demo.title}
                    className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-gray-100 shadow-lg backdrop-blur-sm sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-5 sm:px-5"
            >
              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-400 sm:text-xs">
                  Demo
                </p>
                <h2 className="mt-1 truncate text-base font-semibold text-white sm:text-2xl">
                  {demo.title}
                </h2>
              </div>

              <div className="min-w-0">
                <audio
                  ref={(element) => {
                    audioRefs.current[index] = element;
                  }}
                  src={demo.src}
                  preload="metadata"
                  controlsList="nodownload noremoteplayback"
                  disableRemotePlayback
                  onContextMenu={(event) => event.preventDefault()}
                  onLoadedMetadata={(event) => {
                    updateTrackState(index, {
                      duration: event.currentTarget.duration,
                    });
                  }}
                  onTimeUpdate={(event) => {
                    updateTrackState(index, {
                      currentTime: event.currentTarget.currentTime,
                      duration: event.currentTarget.duration || track.duration,
                    });
                  }}
                  onPlay={() => {
                    setPlayerState((currentState) =>
                      currentState.map((currentTrack, trackIndex) => ({
                        ...currentTrack,
                        isPlaying: trackIndex === index,
                      })),
                    );
                  }}
                  onPause={() => {
                    updateTrackState(index, { isPlaying: false });
                  }}
                  onEnded={() => {
                    updateTrackState(index, { isPlaying: false });
                  }}
                  className="hidden"
                />

                <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/92 px-3 py-2 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => togglePlayback(index)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 active:scale-95"
                    aria-label={track.isPlaying ? `Pause ${demo.title}` : `Play ${demo.title}`}
                  >
                    {track.isPlaying ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-4 w-4 fill-current"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <input
                      type="range"
                      min="0"
                      max={track.duration || 0}
                      step="0.1"
                      value={Math.min(track.currentTime, track.duration || 0)}
                      onChange={(event) => handleSeek(index, Number(event.target.value))}
                      className="demo-slider h-2.5 w-full cursor-pointer"
                      style={{ "--demo-progress": progressPercent }}
                      aria-label={`Seek within ${demo.title}`}
                    />
                  </div>

                  <p className="w-28 shrink-0 whitespace-nowrap rounded-full bg-black/5 px-3 py-1 text-right text-[0.7rem] font-medium tabular-nums text-gray-700 sm:w-32 sm:text-sm">
                    {formatTime(track.currentTime)} / {formatTime(track.duration)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 w-full max-w-3xl rounded-2xl bg-white/70 px-6 py-6 shadow-lg backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-600">Reference Songs</p>
        <h2 className="mt-2 text-2xl font-semibold">Playlist</h2>
        <p className="mt-2 text-base text-gray-700">
          A few tracks that help shape the mood and direction of these demos.
        </p>
        <div className="mt-5 flex justify-center">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2icjo7ICbV3pt90CzG20PV?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
