import ReactLenis from "lenis/react";
import "./index.css";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import Work from "./sections/Work";
import ContactSummary from './sections/ContactSummary';

function App() {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary/>
    <Services/>
    <About/>
    <Work/>
    <ContactSummary />
    </ReactLenis>
  );
}

export default App;
