import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CarMenu = ({ textColor, bgColor, carImg, number, team, driver }) => {
  const Driver = useRef();
  const containerRef = useRef();
  const numberRef = useRef();
  const buttonRef = useRef();
  const carImgRef = useRef();

  useGSAP(() => {
    const el = containerRef.current;

    const handleEnter = () => {
      gsap.to(containerRef.current, {
        backgroundColor: bgColor,
        duration: 0.3,
      });

      gsap.to(numberRef.current, {
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(Driver.current, {
        y: 355,
        color: textColor,
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        y: 355,
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        borderWidth: 0,
        duration: 0.3,
      });

      gsap.fromTo(
        carImgRef.current,
        { opacity: 1, y: -115, scale: 0 },
        { scale: 1.65, duration: 0.3 }
      );
    };

    const handleLeave = () => {
      gsap.to(containerRef.current, {
        backgroundColor: "white",
        duration: 0.5,
      });

      gsap.to(numberRef.current, {
        color: bgColor,
        opacity: 1,
        duration: 0.3,
      });

      gsap.to(Driver.current, {
        y: 0,
        color: "black",
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        y: 0,
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        borderWidth: 1,
        duration: 0.3,
      });

      gsap.to(carImgRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    };

    el?.addEventListener("mouseenter", handleEnter);
    el?.addEventListener("mouseleave", handleLeave);

    return () => {
      el?.removeEventListener("mouseenter", handleEnter);
      el?.removeEventListener("mouseleave", handleLeave);
    };
  }, [bgColor, textColor]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-white transition-colors duration-500"
    >
      <img
        ref={carImgRef}
        src={carImg}
        alt="Car"
        className="absolute h-full w-auto object-contain opacity-0 rotate-[-90deg]  "
      />

      <div className="flex flex-col  ">
        <div
          ref={numberRef}
          className="text-5xl font-semibold mb-7"
          style={{ color: textColor }}
        >
          {number}
        </div>
        <div ref={Driver} className="flex flex-col text-black">
          <div className="text-5xl font-bold">{team}</div>
          <div className="text-3xl font-semibold">{driver}</div>
        </div>
        <div className="flex flex-row mt-[7rem]">
          <button
            ref={buttonRef}
            className="border-solid border-black rounded-full py-2 px-4 bg-white"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarMenu;
