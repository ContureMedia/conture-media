import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-3 bg-gray-800 p-2 rounded-l-xl z-50 overflow-hidden">
      <a
        href="https://wa.me/+917425081690"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-green-400 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/yourUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-pink-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com/yourUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaXTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://www.youtube.com/channel/yourChannelID"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-red-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;