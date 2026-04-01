export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center px-4">
        {/* <h1 className="text-2xl text-center text-white pt-3 pb-6">On a Race</h1> */}
        <div className="w-full max-w-[17.5rem] pt-8 sm:max-w-xs">
          <iframe
            className="rounded-lg w-full h-[200px] sm:h-[352px]"
            title="Vylar featured track"
            src="https://open.spotify.com/embed/track/409t1DwzMqrBxP54uzAGK1?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full max-w-[17.5rem] pt-4 sm:max-w-md">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            title="Vylar live playlist"
            src="https://open.spotify.com/embed/playlist/3MMdNjsZvmpE7BdVGsJYhi?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center text-black py-3">
        {/* <h1 className="text-2xl mb-4">Discover Vylar</h1> */}
      </div>
      <div className="fixed right-2 top-1/2 flex -translate-y-1/2 flex-col space-y-3 sm:right-0 sm:space-y-4 sm:pr-4">
        <a
          href="https://instagram.com/vylarexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/792/PNG/512/INSTAGRAM_icon-icons.com_65535.png"
            alt="Instagram"
            className="h-7 w-7 transition hover:scale-110 active:scale-80 sm:h-10 sm:w-10"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://www.youtube.com/@VylarYoutube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/836/PNG/512/Youtube_icon-icons.com_66802.png"
            alt="YouTube"
            className="h-7 w-7 transition hover:scale-110 active:scale-80 sm:h-10 sm:w-10"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
        <a
          href="https://tiktok.com/@vylarexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/2389/PNG/512/tiktok_logo_icon_144802.png"
            alt="TikTok"
            className="h-7 w-7 transition hover:scale-110 active:scale-80 sm:h-10 sm:w-10"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(87%)",
            }}
          />
        </a>
      </div>
    </>
  );
}
