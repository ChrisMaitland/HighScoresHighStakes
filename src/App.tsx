import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EpisodeList from "./components/EpisodeList";
import Footer from "./components/Footer";
import "./index.css";
import "./assets/fonts/zrnic.ttf"

function App() {
    return (
        <div className="px-4 flex flex-col min-h-screen bg-playstationDark/80">
            {/* Navigation Bar */}
            <Navbar />

            {/* Main Content Wrapper */}
            <div >
                <Hero />

                <main>
                    {/* Content goes here (className="flex flex-col bg-playstationDark/80 min-h-screen")*/}
                </main>


            </div>
            {/*<EpisodeList />
            <Footer />*/}
        </div>
    );
}

export default App;
