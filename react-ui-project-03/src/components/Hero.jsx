const Hero = () => {
  return (
    <div className="relative w-full h-[91.5vh] overflow-hidden bg-black">
     <img
        src="/driver/www.jpeg"
        alt="wdc"
        className="absolute w-full h-full top-0 left-0  object-contain  "
                    style={{ objectPosition: "center 0" }}

      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <nav className="relative z-50 px-6 lg:px-12 pt-8">
        <div className="flex items-center justify-between backdrop-blur-md bg-white/5 rounded-2xl px-8 py-4 border border-white/10">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1200px-F1.svg.png"
              alt="F1 Logo"
              className="h-10 w-auto filter brightness-0 invert transition-transform hover:scale-110"
            />
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-12">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search races, drivers, teams..."
                className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 ">
            <ul className="hidden lg:flex gap-8">
              {["Races", "Drivers", "Standings", "Teams"].map((item) => (
                <li
                  key={item}
                  className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer relative group"
                >
                  <span className="text-sm font-medium tracking-wide">
                    {item}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
            <button className="bg-white/10 hover:bg-red-500 border border-white/20 hover:border-red-500 px-6 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-40 flex flex-col justify-center h-full px-6 ">
        <div className="max-w-6xl mx-10 mb-60">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Live Video
            </span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8">
            What To Watch For in the{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              2025 Hungarian
            </span>{" "}
            Grand Prix
          </h1>

          <button

            className="group relative inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
              <svg
                className="w-5 h-5 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white font-medium">Watch Highlights</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-50 hidden xl:block">
        <div className="space-y-4 ">
          {[
            {
              type: "Highlights",
              title: "Leclerc takes pole position in Hungary",
            },
            {
              type: "Analysis",
              title: "Tech Talk – Final updates before summer",
            },
            {
              type: "Exclusive",
              title: "Verstappen reflects on Red Bull future",
            },
          ].map((item, index) => (
            <div
              key={index}
              className= " w-80 bg-black/40 backdrop-blur-md border border-white/10  p-6  hover:bg-black transition-all duration-300 cursor-pointer "
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-red-500 text-xs font-semibold uppercase tracking-wide">
                  {item.type}
                </span>
                <svg
                  className="w-4 h-4 text-white/60 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-sm font-medium leading-relaxed">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Hero;
