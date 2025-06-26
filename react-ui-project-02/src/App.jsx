import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import "./index.css"; 
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary/>
    <Services/>
    </ReactLenis>
  );
}

export default App;
