import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import React from "react";
import { useLocation } from "react-router-dom";
import layingDownBgImage from "./img/IMG_5683.JPG";
import CookiePolicy from "./pages/CookiePolicy";

const Home = lazy(() => import("./pages/Home"));
const Stream = lazy(() => import("./pages/Stream"));
const Shows = lazy(() => import("./pages/Shows"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const location = useLocation();

  const backgroundStyle = {
    backgroundImage: `url(${layingDownBgImage})`,
    filter: "brightness(1)",
  };

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-black bg-cover bg-center bg-no-repeat"
        style={backgroundStyle}
        role="img"
        aria-label="Background image of laying down"
      />
      <div className="relative z-10 min-h-screen max-h-screen overflow-auto">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stream" element={<Stream />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/demos" element={<Navigate to="/" replace />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        {location.pathname !== "/cookie-policy" && <Footer />}
        {location.pathname !== "/cookie-policy" && <CookieConsent />}
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
