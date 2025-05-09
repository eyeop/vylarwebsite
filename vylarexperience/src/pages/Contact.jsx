export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen text-black bg-transparent">
      <h1 className="text-4xl font-bold mb-8">Stream Vylar</h1>
      <ul className="flex flex-col space-y-4 w-3/4 max-w-md">
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  );
}
