export default function Stream() {
  return (
    <div className="flex flex-col items-center min-h-screen text-black py-3 m-0 md:mt-10 md:ml-25 -rotate-1 md:-rotate-6">
      {/* <h1 className="text-2xl mb-4">Discover Vylar</h1> */}

      {/* Social Media Links */}
      <div className="grid grid-cols-4 lg:grid-cols-8 md:grid-cols-8 gap-6">
        <a
          href="https://open.spotify.com/artist/35sXFmHyRW5bM8WkMni1RG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/836/PNG/512/Spotify_icon-icons.com_66783.png"
            alt="Spotify"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://music.apple.com/artist/<APPLE_MUSIC_ARTIST_ID>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/2389/PNG/512/apple_music_logo_icon_145488.png"
            alt="Apple Music"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://music.youtube.com/channel/<YOUTUBE_MUSIC_CHANNEL_ID>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/4040/PNG/512/youtube_music_logo_icon_256785.png"
            alt="YouTube Music"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://music.amazon.com/artists/B0C1TD5CKB/vylar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/836/PNG/512/Amazon_icon-icons.com_66787.png"
            alt="Amazon Music"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://www.deezer.com/artist/<DEEZER_ARTIST_ID>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/2389/PNG/512/deezer_logo_icon_145348.png"
            alt="Deezer"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://tidal.com/browse/artist/<TIDAL_ARTIST_ID>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/2389/PNG/512/tidal_logo_icon_144803.png"
            alt="Tidal"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://soundcloud.com/vylarofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/791/PNG/512/soundcloud_icon-icons.com_65496.png"
            alt="SoundCloud"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://vylar.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/512/PNG/512/bandcamp_icon-icons.com_50945.png"
            alt="Bandcamp"
            className="w-10 h-10 hover:scale-110 transition"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
      </div>
    </div>
  );
}
