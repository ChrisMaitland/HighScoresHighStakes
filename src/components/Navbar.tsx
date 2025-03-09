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
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="container mx-auto py-12 px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-6">Latest Episodes</h2>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    className="absolute left-0 z-10 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/80 transition"
                    onClick={scrollLeft}
                >
                    <FaChevronLeft size={24} />
                </button>

                {/* Scrollable Episode List */}
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar p-2"
                >
                    {episodes.map((ep, index) => (
                        <div key={index} className="flex-shrink-0 w-80">
                            <EpisodeCard {...ep} />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-0 z-10 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/80 transition"
                    onClick={scrollRight}
                >
                    <FaChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default EpisodeList;
