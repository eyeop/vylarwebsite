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
    <div className="fixed inset-x-0 bottom-0 w-full bg-black bg-opacity-80 text-white p-4 sm:p-6 shadow-lg z-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm leading-snug">
          We use cookies to improve your experience. By continuing to use this site, you accept our{" "}
          <a href="/cookie-policy" className="underline">
            cookie policy
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
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
    </div>
  );
}