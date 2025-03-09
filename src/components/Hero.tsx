import { useEffect, useState } from "react";

const Hero = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 500); // Delay fade-in effect
    }, []);
    return (
        <section className="relative w-full overflow-hidden overflow-y-auto items-center justify-center scroll-smooth no-scrollbar h-92">
            {/* First Section (Main Hero) */}
            <div className="relative flex flex-col items-center justify-center text-center bg-no-repeat px-4 py-16 md:py-24 lg:py-32 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`"
                 style={{ backgroundImage: "url('/ps-small.png')" }}>
                <div className="bg-black opacity-60 px-6 py-4 rounded-lg text-center shadow-lg">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Welcome to High Scores High Stakes
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-2">
                        The Only Gaming Podcast on the Internet*
                    </p>
                </div>
            </div>

            {/* Second Section (About the Podcast) */}
            <div
                className="relative flex flex-col items-center justify-center text-center bg-no-repeat px-4 py-16 md:py-24 lg:py-32 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`"
                style={{ backgroundImage: "url('/GTA-small.png')" }}>
                <div className="bg-black opacity-80 px-6 py-4 rounded-lg text-center shadow-lg">
                    <div className="bg-black/80 text-white p-6 rounded-lg shadow-lg text-center max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold">About the Podcast</h2>
                        <p className="text-lg mt-2">
                            High Scores High Stakes is a PlayStation-centric podcast where our hosts, MrLuvvaLuvva, MrJohnSherry, Cardinal Smith, and Tomahawk compete in PlayStation games for glory in the HSHS League.
                        </p>

                        <p className="text-lg mt-2">
                            Every week, we pick a new game and create a challenge within the game to prove their gaming superiority over each other. Challenges have included Speedruns, Permadeath runs, competitive multiplayer, sports, and much more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
