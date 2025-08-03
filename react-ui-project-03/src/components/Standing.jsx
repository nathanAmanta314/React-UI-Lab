const data = [
  { name: "Oscar Piastri", team: "McLaren", pts: 266, color: "#FF8000" },
  { name: "Lando Norris", team: "McLaren", pts: 250, color: "#FF8000" },
  {
    name: "Max Verstappen",
    team: "Red Bull Racing",
    pts: 185,
    color: "#121F45",
  },
  { name: "George Russell", team: "Mercedes", pts: 157, color: "#00A19C" },
  { name: "Charles Leclerc", team: "Ferrari", pts: 139, color: "#A6051A" },
  { name: "Lewis Hamilton", team: "Ferrari", pts: 109, color: "#A6051A" },
  { name: "Kimi Antonelli", team: "Mercedes", pts: 63, color: "#00A19C" },
  { name: "Alexander Albon", team: "Williams", pts: 54, color: "#005AFF" },
  { name: "Nico Hulkenberg", team: "Kick Sauber", pts: 37, color: "#00C49F" },
  { name: "Esteban Ocon", team: "Haas", pts: 27, color: "#D4D4D4" },
];

const Standing = () => {
  return (
    <div
      className="relative
      h-screen "
    >
      <img
        src="/driver/wdc.jpg"
        alt="wdc"
        className=" w-full h-full top-0 left-0 relative object-cover "
      />

      <div>
        <h1 className="absolute top-[6%] -right-0 z-20 text-[2.5rem] text-white font-bold bg-black/50 px-8 py-2 uppercase hover:bg-red-700 ">
          World Drivers Championship
        </h1>
      </div>
      <div className="absolute top-0 left-0 right-0 z-10 px-10 bg-black/50 text-white w-full h-full font-bold"></div>
      <div className="absolute top-[36rem] left-0 right-0 z-20 px-10 text-white font-bold">
        <div className="flex flex-wrap justify-between gap-6">
          <div className="backdrop-blur-sm bg-black/50 shadow-md px-6 py-4  w-full md:w-[30%] hover:bg-red-700 transition text-white mt-5">
            <h2 className="text-2xl font-extrabold ">2nd</h2>
            <h2 className="text-xl mt-1">Lando Norris</h2>
            <p className="text-sm opacity-80 mt-1">England</p>
            <p className="text-sm opacity-80 mb-3">McLaren</p>
            <span className="text-3xl ">250 pts</span>
          </div>

          <div className="backdrop-blur-sm bg-black/50 shadow-md  px-6 py-4  w-full md:w-[30%] text-start hover:bg-red-700 transition text-white ">
            <h2 className="text-2xl font-extrabold ">1st</h2>
            <h2 className="text-xl mt-1">Oscar Piastri</h2>
            <p className="text-sm opacity-80 mt-1">Australia</p>
            <p className="text-sm opacity-80 mb-3">McLaren</p>
            <span className="text-3xl ">266 pts</span>
          </div>

          <div className="backdrop-blur-sm bg-black/50 shadow-md  px-6 py-4  w-full md:w-[30%] hover:bg-red-700 transition text-white mt-10">
            <h2 className="text-2xl font-extrabold ">3rd</h2>
            <h2 className="text-xl mt-1">Max Verstappen</h2>
            <p className="text-sm opacity-80 mt-1">Netherlands</p>
            <p className="text-sm opacity-80 mb-3">Red Bull Racing</p>
            <span className="text-3xl ">185 pts</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[48rem] left-0 right-0 z-10 px-10 text-white font-bold">
        <div className="flex flex-col gap-4 "></div>
      </div>
    </div>
  );
};

export default Standing;
