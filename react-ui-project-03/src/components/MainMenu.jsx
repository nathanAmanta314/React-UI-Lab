const MainMenu = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen  bg-[#A6051A] text-white">
      <nav className="w-full flex justify-between items-center px-10 py-6 text-[#FFEB00] ">
        <h1 className="text-6xl font-bold">F1 2025</h1>
        <ul className="flex flex-row justify-between gap-32 font-medium text-4xl m-auto">
          <li className=" cursor-pointer">Drivers</li>
          <li className=" cursor-pointer">Statistics</li>
          <li className=" cursor-pointer">Statistics</li>
          <li className=" cursor-pointer">Team Profile</li>
        </ul>
        <button className=' border-solid border-black rounded-full py-2 px-6 bg-white text-black'>
          Back
        </button>
      </nav>
      <div className="flex justify-center items-center mx-[25%] my-[25%]">
        <h1 className="absolute text-[#FFEB00] text-[440px] font-bold mb-[10rem]">
          FERRARI
        </h1>{" "}
        <img
          src="/2025ferraricarright.jpg"
          alt="Car"
          className="absolute h-full w-[80%] object-contain  "
        />
        <h1 className="absolute text-[#FFEB00] text-[70px] font-bold mb-[-28rem]">
          Charles Leclerc & Lewis Hamilton
        </h1>{" "}
      </div>

      <section className="px-6 md:px-16 py-12 bg-[#A6051A] text-[#FFEB00]">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 border-b border-yellow-400 pb-2">
          Team Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/90">
          <div>
            <p className="text-lg text-white/70">Full Team Name</p>
            <p className="text-2xl font-semibold">Scuderia Ferrari HP</p>
          </div>
          <div>
            <p className="text-lg text-white/70">Base</p>
            <p className="text-2xl font-semibold">Maranello, Italy</p>
          </div>
          <div>
            <p className="text-lg text-white/70">Team Chief</p>
            <p className="text-2xl font-semibold">Frédéric Vasseur</p>
          </div>
          <div>
            <p className="text-lg text-white/70">Technical Chief</p>
            <p className="text-2xl font-semibold">
              Loic Serra / Enrico Gualtieri
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Chassis</p>
            <p className="text-2xl font-semibold">SF-25</p>
          </div>
          <div>
            <p className="text-lg text-white/70">Power Unit</p>
            <p className="text-2xl font-semibold">Ferrari</p>
          </div>
          <div>
            <p className="text-lg text-white/70">Reserve Drivers</p>
            <p className="text-2xl font-semibold">
              Antonio Giovinazzi, Zhou Guanyu
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">First Team Entry</p>
            <p className="text-2xl font-semibold">1950</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
