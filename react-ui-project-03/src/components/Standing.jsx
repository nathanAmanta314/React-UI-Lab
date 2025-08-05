import { useState } from "react";

const Standing = () => {
  const [activeFilter, setActiveFilter] = useState("drivers");
  const [hoveredRow, setHoveredRow] = useState(null);

  const driversData = [
    {
      name: "Oscar Piastri",
      team: "McLaren",
      pts: 266,
      color: "#FF8000",
      country: "AUS",
      position: 1,
      gap: "LEADER",
    },
    {
      name: "Lando Norris",
      team: "McLaren",
      pts: 293,
      color: "#FF8000",
      country: "GBR",
      position: 2,
      gap: "+27",
    },
    {
      name: "Max Verstappen",
      team: "Red Bull Racing",
      pts: 194,
      color: "#1E41FF",
      country: "NED",
      position: 3,
      gap: "+72",
    },
    {
      name: "Charles Leclerc",
      team: "Ferrari",
      pts: 142,
      color: "#DC143C",
      country: "MON",
      position: 4,
      gap: "+124",
    },
    {
      name: "George Russell",
      team: "Mercedes",
      pts: 128,
      color: "#00D2BE",
      country: "GBR",
      position: 5,
      gap: "+138",
    },
    {
      name: "Lewis Hamilton",
      team: "Ferrari",
      pts: 118,
      color: "#DC143C",
      country: "GBR",
      position: 6,
      gap: "+148",
    },
    {
      name: "Kimi Antonelli",
      team: "Mercedes",
      pts: 108,
      color: "#00D2BE",
      country: "ITA",
      position: 7,
      gap: "+158",
    },
    {
      name: "Alexander Albon",
      team: "Williams",
      pts: 37,
      color: "#005AFF",
      country: "THA",
      position: 8,
      gap: "+229",
    },
    {
      name: "Franco Colapinto",
      team: "Williams",
      pts: 33,
      color: "#005AFF",
      country: "ARG",
      position: 9,
      gap: "+233",
    },
    {
      name: "Fernando Alonso",
      team: "Aston Martin",
      pts: 32,
      color: "#006F62",
      country: "ESP",
      position: 10,
      gap: "+234",
    },
  ];

  const teamsData = [
    {
      name: "McLaren",
      drivers: ["Oscar Piastri", "Lando Norris"],
      pts: 559,
      color: "#FF8000",
      position: 1,
      gap: "LEADER",
    },
    {
      name: "Ferrari",
      drivers: ["Charles Leclerc", "Lewis Hamilton"],
      pts: 260,
      color: "#DC143C",
      position: 2,
      gap: "+299",
    },
    {
      name: "Mercedes",
      drivers: ["George Russell", "Kimi Antonelli"],
      pts: 236,
      color: "#00D2BE",
      position: 3,
      gap: "+323",
    },
    {
      name: "Red Bull Racing",
      drivers: ["Max Verstappen", "Sergio Perez"],
      pts: 194,
      color: "#1E41FF",
      position: 4,
      gap: "+365",
    },
    {
      name: "Williams",
      drivers: ["Alexander Albon", "Franco Colapinto"],
      pts: 70,
      color: "#005AFF",
      position: 5,
      gap: "+489",
    },
    {
      name: "Aston Martin",
      drivers: ["Fernando Alonso", "Lance Stroll"],
      pts: 52,
      color: "#006F62",
      position: 6,
      gap: "+507",
    },
    {
      name: "Kick Sauber",
      drivers: ["Nico Hulkenberg", "Zhou Guanyu"],
      pts: 51,
      color: "#52C41A",
      position: 7,
      gap: "+508",
    },
    {
      name: "Racing Bulls",
      drivers: ["Yuki Tsunoda", "Liam Lawson"],
      pts: 45,
      color: "#4A90E2",
      position: 8,
      gap: "+514",
    },
    {
      name: "Haas",
      drivers: ["Kevin Magnussen", "Esteban Ocon"],
      pts: 35,
      color: "#B6BABD",
      position: 9,
      gap: "+524",
    },
    {
      name: "Alpine",
      drivers: ["Pierre Gasly", "Jack Doohan"],
      pts: 20,
      color: "#0090FF",
      position: 10,
      gap: "+539",
    },
  ];

  const currentData = activeFilter === "drivers" ? driversData : teamsData;

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="relative">

        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-16 bg-red-600" />

              <div>
                <h1 className="text-5xl font-light text-white tracking-tight">
                  Championship
                </h1>
                <p className="text-lg text-white/60 mt-2">
                  2025 Drivers' Standings
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-1 mb-8 bg-white/5 p-2 rounded-full w-fit">
            {[
              { key: "drivers", label: "Drivers" },
              { key: "teams", label: "Constructors" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-white/10 text-sm text-white/60 font-medium">
              <div className="col-span-1">POS</div>
              <div className="col-span-5">
                {activeFilter === "drivers" ? "DRIVER" : "TEAM"}
              </div>
              <div className="col-span-2">
                {activeFilter === "drivers" ? "TEAM" : "DRIVERS"}
              </div>
              <div className="col-span-2">POINTS</div>
              <div className="col-span-2 text-right">GAP</div>
            </div>

            <div className="divide-y divide-white/5">
              {currentData.map((item, index) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-12 gap-4 px-8 py-6 transition-all duration-300 group cursor-pointer ${
                    hoveredRow === index
                      ? "bg-white/5"
                      : "hover:bg-white/[0.02]"
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="col-span-1 flex items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-light text-white/90">
                        {item.position}
                      </span>
                      {item.position <= 3 && (
                        <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />
                      )}
                    </div>
                  </div>

                  <div className="col-span-5 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: item.color + "20",
                        borderColor: item.color,
                      }}
                    >
                      {activeFilter === "drivers"
                        ? item.country
                        : item.name.substring(0, 3).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-white group-hover:text-red-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center">
                    {activeFilter === "drivers" ? (
                      <span className="text-white/70 font-light">
                        {item.team}
                      </span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-white/70 font-light text-sm">
                          {item.drivers[0]}
                        </span>
                        <span className="text-white/50 font-light text-xs">
                          {item.drivers[1]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="col-span-2 flex items-center">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-light text-white">
                        {item.pts}
                      </span>
                      <span className="text-sm text-white/50">pts</span>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-end">
                    <span
                      className={`text-sm font-mono ${
                        item.gap === "LEADER"
                          ? "text-red-400 font-medium"
                          : "text-white/60"
                      }`}
                    >
                      {item.gap}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-light text-white mb-2">
                {activeFilter === "drivers" ? "266" : "559"}
              </div>
              <div className="text-white/60 text-sm">Points Leader</div>
              <div className="text-red-400 text-sm mt-1">
                {activeFilter === "drivers" ? "Oscar Piastri" : "McLaren"}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-light text-white mb-2">24</div>
              <div className="text-white/60 text-sm">Races Completed</div>
              <div className="text-white/40 text-sm mt-1">2025 Season</div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-light text-white mb-2">
                {activeFilter === "drivers" ? "+27" : "+299"}
              </div>
              <div className="text-white/60 text-sm">Gap to Leader</div>
              <div className="text-orange-400 text-sm mt-1">
                {activeFilter === "drivers" ? "Lando Norris" : "Ferrari"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standing;
