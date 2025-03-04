import { FaTwitter, FaFacebook, FaSpotify, FaYoutube, FaInstagram, FaTwitch, FaTiktok, FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} High Scores High Stakes. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                    <FaSpotify className="text-green-400 text-xl cursor-pointer hover:text-green-300" />
                    <FaYoutube className="text-red-500 text-xl cursor-pointer hover:text-red-400" />
                    <FaTwitch className="text-purple-500 text-xl cursor-pointer hover:text-purple-400" />
                    <FaTwitter className="text-white text-xl cursor-pointer hover:text-gray-300" />
                    <FaFacebook className="text-blue-500 text-xl cursor-pointer hover:text-gray-300" />
                    <FaInstagram className="text-pink-500 text-xl cursor-pointer hover:text-pink-400" />
                    <FaTiktok className="text-black text-xl cursor-pointer hover:text-gray-800" />
                    <FaEnvelope className="text-gray-400 text-xl cursor-pointer hover:text-gray-300" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
