import { useNavigate } from "react-router-dom";

export default function CookiePolicy() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white px-4 pt-6 pb-24 md:px-8 md:pt-10 md:pb-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Cookie Policy</h1>
      <p className="mb-4">
        This website uses cookies to enhance your experience. Cookies are small text files that are stored on your device to help us improve our services and provide a better user experience.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly. They enable basic functionalities like page navigation and access to secure areas of the website.</li>
        <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
        <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display ads that are relevant and engaging for the individual user.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
      <p className="mb-4">
        You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse or accept cookies, as well as delete cookies that have already been set.
      </p>
      <p>
        For more information about our use of cookies, please contact us at <a href="mailto:vylarbusiness@gmail.com" className="underline">vylarbusiness@gmail.com</a>.
      </p>
      <button
        onClick={handleClose}
        className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all"
      >
        Close
      </button>
    </div>
  );
}