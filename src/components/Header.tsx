import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-900 text-white p-4">
            <nav className="flex justify-between items-center">
                <h1 className="text-xl font-bold">High Scores High Stakes</h1>
                <div>
                    <Link className="mx-2" to="/">Home</Link>
                    <Link className="mx-2" to="/episodes">Episodes</Link>
                    <Link className="mx-2" to="/gotm">GOTM Club</Link>
                    <Link className="mx-2" to="/news">Podcast News</Link>
                    <Link className="mx-2" to="/playstation-news">PlayStation News</Link>
                    <Link className="mx-2" to="/opinions">Opinions</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
