const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/driver/www.jpeg"
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <div className="absolute top-0 left-0 w-full z-20 pt-4 px-4">
        <nav className=" px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1200px-F1.svg.png
"
              alt="F1 Logo"
              className="h-8 md:h-10 object-contain"
            />
          </div>

          <div className="flex-1 mx-8 max-w-md ml-[26rem]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center gap-16 text-white font-medium">
            <ul className="hidden md:flex gap-6 text-xl">
              <li className="hover:text-red-500 transition">Race</li>
              <li className="hover:text-red-500 transition">Driver</li>
              <li className="hover:text-red-500 transition">Standing</li>
              <li className="hover:text-red-500 transition">Team</li>
            </ul>
            <h1 className="hover:text-red-500 cursor-pointer transition">
              Sign In
            </h1>
          </div>
        </nav>
      </div>
      <div className="absolute top-1/4 z-30">
        <div className="flex px-8 items-center  jusctify-center ">
          <h1 className="text-white text-2xl font-bold  p-2 px-4 bg-black/50 hover:bg-red-700 ">
            video
          </h1>
        </div>
        <div>
          <h1 className="text-white text-[5.5rem] font-bold px-8 py-4 leading-tight">
            What To Watch For in the <br /> 2025 Hungarian Grand <br />
            Prix
          </h1>
        </div>
      </div>
      <div className="absolute top-[80%] left-[52%]  z-30">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col bg-black/50 text-white px-8 py-4 hover:bg-red-700">
              <h1>Highlights</h1>
              <h2>Relive Hungarian GP Qualifying as Leclerc takes pole</h2>
            </div>
            <div className="flex flex-col bg-black/50 text-white px-8 py-4 hover:bg-red-700 transition">
              <h2>Leclerc stunned by unexpected pole in Hungary</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col bg-black/50 text-white px-8 py-4 hover:bg-red-700 transition">
              <h2>ECH TALK – The final updates before summer</h2>
            </div>
            <div className="flex flex-col bg-black/50 text-white px-8 py-4 hover:bg-red-700 transition">
              <h2>Mekies reflects on Verstappen staying at Red Bulle</h2>
            </div>
            <div className="flex flex-col bg-black/50 text-white px-8 py-4 hover:bg-red-700 transition">
              <h1>Exclusive</h1>
              <h2>Elkann on Ferrari's 2025 so far and Vasseur's contract</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
