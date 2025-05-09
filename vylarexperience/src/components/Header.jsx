import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-transparent">
      <div className="flex justify-center items-center text-4xl font-bold text-black pt-10 pb-1">
        <Link to="/">Vylar</Link>
      </div>
      <nav className="w-full">
        <ul className="flex justify-center space-x-4 py-4 text-black">
          <li>
            <Link
              to="/"
              className="hover:text-white hover:bg-gray-800 px-3 py-2 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/stream"
              className="hover:text-white hover:bg-gray-800 px-3 py-2 rounded"
            >
              Stream
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white hover:bg-gray-800 px-3 py-2 rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
