import CarMenu from "./components/CarMenu";

function App() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
<div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <CarMenu
          number="01"
          team="FERRARI"
          driver="Charles Leclerc & Lewis Hamilton"
          textColor="#FFEB00"
          bgColor="#A6051A"
          carImg="2025ferraricarright.jpg"
        />
        <CarMenu
          number="02"
          team="RED BULL RACING"
          driver="Max Verstappen & Yuki Tsunoda"
          textColor="#CC1E4A"
          bgColor="#121F45"
          carImg="2025redbullracingcarright.jpg"
        />
        <CarMenu
          number="03"
          team="MCLAREN"
          driver="Oscar Piastri & Lando Norris"
          textColor="#000000"
          bgColor="#FF8000"
          carImg="2025mclarencarright.jpg"
        />
        <CarMenu
          number="04"
          team="MERCEDES"
          driver="George Russell & Kimi Antonelli"
          textColor="#c6c6c6"
          bgColor="#00A19C"
          carImg="2025mercedescarright.jpg"
        />
      </div>
    </div>
  );
}

export default App;
