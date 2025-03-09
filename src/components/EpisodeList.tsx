import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EpisodeCard from "./EpisodeCard";

const episodes = [
    { episodeNumber: 1, title: "The Future of Gaming", description: "We discuss the latest gaming trends." },
    { episodeNumber: 2, title: "Retro Gaming Gems", description: "A nostalgic look at classic games." },
    { episodeNumber: 3, title: "Top 5 RPGs of All Time", description: "Our picks for the best RPGs ever made." },
    { episodeNumber: 4, title: "Esports Revolution", description: "How esports changed competitive gaming." },
    { episodeNumber: 5, title: "Gaming Myths & Legends", description: "Exploring famous gaming myths." },
    { episodeNumber: 6, title: "Game Developers Tell All", description: "Behind the scenes with game devs." },
];

const EpisodeList = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleEpisodes = 3; // Number of visible episodes at a time
    const scrollRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (startIndex + visibleEpisodes < episodes.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <section className="container mx-auto py-12 px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-6">Latest Episodes</h2>

            <div className="relative">
                {/* Left Arrow - Hidden if at start */}
                {startIndex > 0 && (
                    <button
                        className="absolute left-0 z-10 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/80 transition"
                        onClick={prevSlide}
                    >
                        <FaChevronLeft size={24} />
                    </button>
                )}

                {/* Episode Grid - Now Scrollable */}
                <div
                    ref={scrollRef}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-x-auto"
                >
                    {episodes.slice(startIndex, startIndex + visibleEpisodes).map((ep, index) => (
                        <EpisodeCard key={index} {...ep} />
                    ))}
                </div>

                {/* Right Arrow - Hidden if at end */}
                {startIndex + visibleEpisodes < episodes.length && (
                    <button
                        className="absolute right-0 z-10 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/80 transition"
                        onClick={nextSlide}
                    >
                        <FaChevronRight size={24} />
                    </button>
                )}
            </div>
        </section>
    );
};

export default EpisodeList;
