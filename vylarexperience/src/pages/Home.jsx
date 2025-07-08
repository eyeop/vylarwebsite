export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen px-4">
        {/* <h1 className="text-2xl text-center text-white pt-3 pb-6">On a Race</h1> */}
        <div className="w-full max-w-xs pt-8">
          <iframe
            className="rounded-lg w-full h-[352px]"
            src="https://open.spotify.com/embed/track/409t1DwzMqrBxP54uzAGK1?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen text-black py-3">
        {/* <h1 className="text-2xl mb-4">Discover Vylar</h1> */}
      </div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 pr-4">
        <a
          href="https://instagram.com/vylarexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/792/PNG/512/INSTAGRAM_icon-icons.com_65535.png"
            alt="Instagram"
            className="w-10 h-10 hover:scale-110 transition"
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
            className="w-10 h-10 hover:scale-110 transition"
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
            className="w-10 h-10 hover:scale-110 transition"
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
