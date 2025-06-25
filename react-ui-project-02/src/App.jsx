import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import "./index.css"; // Import your global CSS file

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
