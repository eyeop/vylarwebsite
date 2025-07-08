import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Stream", to: "/stream" },
    // { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-transparent">
      <div className="flex justify-center items-center text-4xl text-black pt-10 pb-1 font-semibold">
        <Link to="/">Vylar</Link>
      </div>
      <nav className="w-full">
        <ul className="flex justify-center space-x-4 py-4 text-black">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`px-4 py-2 rounded-md transition-all duration-200 ease-in-out
                  ${
                    location.pathname === item.to
                      ? "bg-black text-gray-200"
                      : "hover:bg-black hover:text-gray-200 active:scale-95"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
