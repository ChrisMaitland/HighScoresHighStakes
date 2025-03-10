import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Intersection Observer to detect active section
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-playstationDark shadow-md z-50">
                <div className="container w-full flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <a href={"#home"} className="text-2xl font-bold">
                        <img src="/hshslogo.jpg" alt="High Scores High Stakes" className="w-12 h-12" />
                    </a>

                    {/* Navbar Title */}
                    <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-300 tracking-wide">
                        <span className="block md:hidden">HSHS</span>
                        <span className="hidden md:block">HSHS</span>
                    </h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-10 relative">
                        {["home", "episodes", "about", "contact"].map((item, index) => (
                            <li key={item} className="relative">
                                {/* Background Image Positioned Perfectly Behind Text */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                    <img src={`/${["Circle", "Square", "Cross", "Triangle"][index]}.png`} alt={item} className="w-10 h-10" />
                                </div>
                                {/* Menu Text */}
                                <a
                                    href={`#${item}`}
                                    className={`relative z-10 block px-4 py-2 transition-all duration-300 ${
                                        activeSection === item ? "text-playstationLightBlue font-bold" : "text-white"
                                    }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-2xl z-50 relative" onClick={() => setIsOpen(!isOpen)}>
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
                        {["home", "episodes", "about", "contact"].map((item, index) => (
                            <li key={item} className="relative p-4 border-b border-gray-700">
                                <a
                                    href={`#${item}`}
                                    onClick={() => setIsOpen(false)}
                                    className="relative z-10 text-white text-lg font-semibold"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
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

            {/* Push Hero Section Down */}
            <div className="h-20 md:h-24 w-full"></div>
        </>
    );
};

export default Navbar;
