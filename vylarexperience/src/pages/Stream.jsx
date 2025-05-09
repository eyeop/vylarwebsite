export default function Stream() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">Stream Vylar</h1>
      <div className="w-full max-w-md">
        <iframe
          src="https://open.spotify.com/embed/track/<YOUR_TRACK_ID>"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
