import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-playstationDark shadow-md">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                {/* Logo */}
                <a href={"Home.tsx"} className="text-2xl font-bold">
                    <img src="/hshslogo.jpg" alt="High Scores High Stakes" className="w-12 h-12" />
                </a>

                {/* Navbar Title (Changes to HSHS on small screens) */}
                <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-300 tracking-wide">
                    <span className="block md:hidden">HSHS</span>
                    <span className="hidden md:block">HIGH SCORES HIGH STAKES</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 relative">
                    <li className="relative p-4">
                        <a href="#" className="relative z-10 hover:text-playstationLightBlue">
                            Home
                        </a>
                        <img
                            src="/Circle.png"
                            alt="Circle"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:block"
                        />
                    </li>
                    <li className="relative p-4">
                        <a href="#" className="relative z-10 hover:text-playstationLightBlue">
                            Episodes
                        </a>
                        <img
                            src="/Square.png"
                            alt="Square"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:block"
                        />
                    </li>
                    <li className="relative p-4">
                        <a href="#" className="relative z-10 hover:text-playstationLightBlue">
                            About
                        </a>
                        <img
                            src="/Cross.png"
                            alt="Cross"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:block"
                        />
                    </li>
                    <li className="relative p-4">
                        <a href="#" className="relative z-10 hover:text-playstationLightBlue">
                            Contact
                        </a>
                        <img
                            src="/Triangle.png"
                            alt="Triangle"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:block"
                        />
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden w-full`}>
                <ul className="bg-playstationDark w-full text-center flex flex-col">
                    <li className="relative p-4 border-b border-gray-700">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="relative z-10"
                        >
                            Home
                        </a>
                        <img
                            src="/Circle.png"
                            alt="Circle"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:hidden"
                        />
                    </li>
                    <li className="relative p-4 border-b border-gray-700">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="relative z-10"
                        >
                            Episodes
                        </a>
                        <img
                            src="/Square.png"
                            alt="Square"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:hidden"
                        />
                    </li>
                    <li className="relative p-4 border-b border-gray-700">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="relative z-10"
                        >
                            About
                        </a>
                        <img
                            src="/Cross.png"
                            alt="Cross"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:hidden"
                        />
                    </li>
                    <li className="relative p-4">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="relative z-10"
                        >
                            Contact
                        </a>
                        <img
                            src="/Triangle.png"
                            alt="Triangle"
                            className="absolute inset-0 w-full h-full object-contain opacity-30 md:hidden"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
