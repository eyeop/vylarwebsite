import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stream from "./pages/Stream";
import Footer from "./components/Footer";

import layingDownBgImage from "./img/IMG_5683.JPG";
import darkBgImage from "./img/2024_IMG_5685.JPG";

function App() {
  const location = useLocation();

  const isStreamPage = location.pathname === "/stream";
  const isContactPage = location.pathname === "/contact";
  const backgroundStyle = {
    backgroundImage: `url(${isContactPage ? darkBgImage : layingDownBgImage})`,
    filter: isStreamPage ? "brightness(1.2)" : "brightness(1)",
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat fixed inset-0 -z-10"
      style={backgroundStyle}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        {/* <Route path="/tour" element={<div>Tour</div>} /> */}
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
