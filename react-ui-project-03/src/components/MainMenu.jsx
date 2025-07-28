import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DriverCard from './DriverCard';

const MainMenu = ({ teamData, onBack, isTransitioning }) => {
  const navRef = useRef();
  const titleRef = useRef();
  const driverRef = useRef();
  const buttonRef = useRef();
  const imgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from([navRef.current, driverRef.current, buttonRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
    });

    tl.from(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.set(imgRef.current, { opacity: 1 });
  }, []);

  return (
    <div
      className="relative flex flex-col w-full min-h-screen text-white"
      style={{ backgroundColor: teamData.bgColor }}
    >
      <nav
        ref={navRef}
        className="w-full flex justify-between items-center px-10 py-6"
        style={{ color: teamData.textColor }}
      >
        <h1 className="text-6xl font-bold">F1 2025</h1>
        <ul className="flex flex-row justify-between gap-32 font-medium text-4xl m-auto">
          <li className=" cursor-pointer">Drivers</li>
          <li className=" cursor-pointer">Statistics</li>
          <li className=" cursor-pointer">Statistics</li>
          <li className=" cursor-pointer">Team Profile</li>
        </ul>
        <button
          ref={buttonRef}
          onClick={onBack}
          disabled={isTransitioning}
          className=" border-solid border-black rounded-full py-2 px-6 bg-white text-black"
        >
          Back
        </button>
      </nav>
      <div className="flex justify-center items-center mx-[25%] my-[25%]">
        <h1
          ref={titleRef}
          className="absolute font-bold mb-[25rem] "
          style={{
            fontFamily: "Formula1Bold",
            color: teamData.textColor,
            fontSize:
              teamData.team === "FERRARI"
                ? "300px"
                : teamData.team === "RED BULL"
                ? "280px"
                : teamData.team === "MCLAREN"
                ? "270px"
                : teamData.team === "MERCEDES"
                ? "250px"
                : "300px",
            marginBottom: teamData.marginBottom,
          }}
        >
          {teamData.team}
        </h1>{" "}
        <img
          ref={imgRef}
          src={teamData.carImg}
          alt="Car"
          className="absolute h-full w-[80%] object-contain opacity-100"
        />
        <h1
          ref={driverRef}
          className="absolute  text-[70px] font-bold mb-[-28rem]"
          style={{ color: teamData.textColor }}
        >
          {teamData.driver}
        </h1>{" "}
      </div>

      <section
        className="px-6 md:px-16 py-12"
        style={{
          color: teamData.textColor,
          backgroundColor: teamData.backgroundColor,
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 border-b  pb-2">
          Team Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/90">
          <div>
            <p className="text-lg text-white/70">Full Team Name</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "Scuderia Ferrari HP"
                : teamData.team === "RED BULL"
                ? "Oracle Red Bull Racing"
                : teamData.team === "MCLAREN"
                ? "McLaren Formula 1 Team"
                : teamData.team === "MERCEDES"
                ? "Mercedes-AMG PETRONAS F1 Team"
                : teamData.team}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Base</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "Maranello, Italy"
                : teamData.team === "RED BULL"
                ? "Milton Keynes, UK"
                : teamData.team === "MCLAREN"
                ? "Woking, UK"
                : teamData.team === "MERCEDES"
                ? "Brackley, UK"
                : "Unknown"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Team Principal</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "Frédéric Vasseur"
                : teamData.team === "RED BULL"
                ? "Christian Horner"
                : teamData.team === "MCLAREN"
                ? "Andrea Stella"
                : teamData.team === "MERCEDES"
                ? "Toto Wolff"
                : "Unknown"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Power Unit</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "Ferrari"
                : teamData.team === "RED BULL"
                ? "Honda RBPT"
                : teamData.team === "MCLAREN"
                ? "Mercedes"
                : teamData.team === "MERCEDES"
                ? "Mercedes"
                : "Unknown"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Chassis</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "SF-25"
                : teamData.team === "RED BULL"
                ? "RB21"
                : teamData.team === "MCLAREN"
                ? "MCL39"
                : teamData.team === "MERCEDES"
                ? "W16"
                : "Unknown"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">First Team Entry</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "1950"
                : teamData.team === "RED BULL"
                ? "2005"
                : teamData.team === "MCLAREN"
                ? "1966"
                : teamData.team === "MERCEDES"
                ? "2010"
                : "Unknown"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">World Championships</p>
            <p className="text-2xl font-semibold">
              {teamData.team === "FERRARI"
                ? "16"
                : teamData.team === "RED BULL"
                ? "6"
                : teamData.team === "MCLAREN"
                ? "8"
                : teamData.team === "MERCEDES"
                ? "8"
                : "0"}
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70">Drivers</p>
            <p className="text-2xl font-semibold">{teamData.driver}</p>
          </div>
        </div>
      </section>
      <DriverCard/>
    </div>

  );

};

export default MainMenu;
