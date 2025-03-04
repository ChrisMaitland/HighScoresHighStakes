interface EpisodeCardProps {
    episodeNumber: number;
    title: string;
    description: string;
}

const EpisodeCard = ({ episodeNumber, title, description }: EpisodeCardProps) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-bold">Episode {episodeNumber}: {title}</h2>
            <p className="text-sm mt-2">{description}</p>
            <button className="mt-4 bg-playstationBlue hover:bg-playstationLightBlue text-white px-4 py-2 rounded">Listen Now</button>
        </div>
    );
};

export default EpisodeCard;
