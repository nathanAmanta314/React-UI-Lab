import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DriverCard from "./DriverCard";

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
      <div className="relative flex flex-col items-center justify-center py-32 h-screen">
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

      <DriverCard />

    </div>

  );
};

export default MainMenu;
