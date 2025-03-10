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
    return (
        <div className="w-screen px-4">
            <h2 className="text-3xl text-blue-200 font-bold text-center mb-6">Latest Episodes</h2>

            {/* Scrollable Episode List */}
            <div className="overflow-x-auto flex space-x-6 p-2">
                {episodes.map((ep, index) => (
                    <div key={index} className="flex-shrink-0 w-80">
                        <EpisodeCard {...ep} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeList;
