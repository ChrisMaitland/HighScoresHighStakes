import { useEffect, useRef } from "react";
import {
    FaChevronDown, FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaSpotify,
    FaTiktok,
    FaTwitch,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import EpisodeList from "./EpisodeList";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
    const controls = useAnimation();
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [controls]);

    return (
        <div className="w-screen min-h-screen overflow-y-auto scroll-smooth no-scrollbar">
            {/* Hero Section */}
            <section
                className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative"
                style={{ backgroundImage: "url('/ps-small.png')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-200">Welcome to High Scores High Stakes</h1>
                    <p className="text-lg md:text-xl italic text-blue-200 mt-2">The Only Gaming Podcast on the Internet*</p>
                </div>

                {/* Chevron Scroll Indicator */}
                <FaChevronDown className="absolute bottom-10 text-white text-3xl animate-bounce" />
            </section>

            {/* About Section */}
            <motion.section
                ref={(el) => sectionsRef.current[0] = el}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="w-screen min-h-screen flex items-center justify-center bg-cover bg-fixed text-white"
                style={{ backgroundImage: "url('/GTA-small.png')" }}
            >
                <div className="bg-black/80 text-blue-200 p-6 rounded-lg shadow-lg text-center max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold">About the Podcast</h2>
                    <p className="text-lg mt-2">
                        High Scores High Stakes is a PlayStation-centric podcast where our hosts, MrLuvvaLuvva, MrJohnSherry,
                        Cardinal Smith, and Tomahawk compete in PlayStation games for glory in the HSHS League.
                    </p>
                    <p className="text-lg mt-2">
                        Every week, we pick a new game and create a challenge within the game to prove their gaming superiority.
                        Challenges include Speedruns, Permadeath runs, competitive multiplayer, sports, and much more.
                    </p>
                </div>
            </motion.section>

            {/* Latest Episodes Section */}
            <motion.section
                ref={(el) => sectionsRef.current[1] = el}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="w-screen min-h-screen flex items-center justify-center bg-cover bg-fixed text-blue-200"
                style={{ backgroundImage: "url('/bg-pattern.png')" }}
            >
                <EpisodeList />
            </motion.section>

            {/* Contact Us Section */}
            <motion.section
                ref={(el) => sectionsRef.current[2] = el}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="w-screen min-h-screen flex flex-col items-center justify-center bg-blue-800 text-blue-200"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-6">Have questions or feedback? We'd love to hear from you!</p>
                <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-lg">
                    Contact Us
                </a>
            </motion.section>

            {/* Footer Section */}
            <footer className="w-screen h-20 flex items-center justify-center playstationDark text-blue-200">
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
        </div>
    );
};

export default Hero;
