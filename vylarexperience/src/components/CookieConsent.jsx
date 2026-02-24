import { useState } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem("cookieConsent"));

  const handleAcceptAll = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
  };

  const handleAcceptNecessary = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-6 flex justify-between items-center shadow-lg">
      <p className="text-sm">
        We use cookies to improve your experience. By continuing to use this site, you accept our <a href="/cookie-policy" className="underline">cookie policy</a>.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAcceptAll}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all"
        >
          Accept All
        </button>
        <button
          onClick={handleAcceptNecessary}
          className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition-all"
        >
          Only Necessary
        </button>
      </div>
    </div>
  );
}