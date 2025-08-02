import { useState } from "react";
import CarMenu from "./components/CarMenu";
import MainMenu from "./components/MainMenu";
import Hero from './components/Hero';

const teams = [
  {
    number: "01",
    team: "FERRARI",
    driver: "Charles Leclerc & Lewis Hamilton",
    textColor: "#FFEB00",
    bgColor: "#A6051A",
    carImg: "/2025ferraricarright.jpg",

    fontSize: "500px",
    marginBottom: "10rem",
  },
  {
    number: "02",
    team: "RED BULL",
    driver: "Max Verstappen & Yuki Tsunoda",
    textColor: "#CC1E4A",
    bgColor: "#121F45",
    carImg: "/2025redbullracingcarright.jpg",

    fontSize: "300px",
    marginBottom: "10rem",
  },
  {
    number: "03",
    team: "MCLAREN",
    driver: "Oscar Piastri & Lando Norris",
    textColor: "#000000",
    bgColor: "#FF8000",
    carImg: "/2025mclarencarright.jpg",

    fontSize: "100px",
    marginBottom: "14rem",
  },
  {
    number: "04",
    team: "MERCEDES",
    driver: "George Russell & Kimi Antonelli",
    textColor: "#c6c6c6",
    bgColor: "#00A19C",
    carImg: "/2025mercedescarright.jpg",

    fontSize: "300px",
    marginBottom: "12rem",
  },
];

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTeamSelect = (teamData) => {
    setSelectedTeam(teamData);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTeam(null);
      setIsTransitioning(false);
    }, 1200);
  };

  return (
    <div className="overflow-hidden">
  <Hero/>

      {selectedTeam ? (

        <MainMenu
          teamData={selectedTeam}
          onBack={handleBack}
          isTransitioning={isTransitioning}
        />
      ) : (
        <CarMenu
          carData={teams}
          onSelect={handleTeamSelect}
          isTransitioning={isTransitioning}
        />
      )}
    </div>
  );
};

export default App;
