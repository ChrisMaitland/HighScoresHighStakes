import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex justify-between items-center py-4 px-6 bg-playstationDark shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="Home.tsx" className="text-2xl font-bold">
                    <img src="/hshslogo.jpg" alt="High Scores High Stakes" className="w-12 h-12" />
                </a>

                {/* Navbar Title */}
                <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-300 tracking-wide">
                    <span className="block md:hidden">HSHS</span>
                    <span className="hidden md:block">HIGH SCORES HIGH STAKES</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4">
                    {["Home", "Episodes", "About", "Contact"].map((item, index) => (
                        <li key={item} className="relative p-4">
                            <a href="#" className="relative z-10 hover:text-playstationLightBlue">
                                {item}
                            </a>
                            <img
                                src={`/${["Circle", "Square", "Cross", "Triangle"][index]}.png`}
                                alt={item}
                                className="absolute inset-0 w-full h-full object-contain opacity-30 md:block"
                            />
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu with Smooth Drop-down Animation */}
            <div
                className={`absolute top-0 left-0 w-full bg-blue-900/95 shadow-lg z-40 transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <ul className="text-center flex flex-col py-6">
                    {["Home", "Episodes", "About", "Contact"].map((item, index) => (
                        <li key={item} className="relative p-4 border-b border-gray-700">
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 text-white text-lg font-semibold"
                            >
                                {item}
                            </a>
                            <img
                                src={`/${["Circle", "Square", "Cross", "Triangle"][index]}.png`}
                                alt={item}
                                className="absolute inset-0 w-full h-full object-contain opacity-30 md:hidden"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
