import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";

const CarMenu = ({ carData, onSelect, isTransitioning }) => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {carData.map((car, i) => (
          <CarCard
            key={i}
            {...car}
            onSelect={onSelect}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

const CarCard = ({
  number,
  team,
  driver,
  textColor,
  bgColor,
  carImg,
  onSelect,
  disabled,
}) => {
  const containerRef = useRef();
  const carImgRef = useRef();
  const numberRef = useRef();
  const driverRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    const el = containerRef.current;

    const handleEnter = () => {
      gsap.to(containerRef.current, {
        backgroundColor: bgColor,
        duration: 0.3,
      });
      gsap.to(numberRef.current, { opacity: 0, duration: 0.3 });
      gsap.to(driverRef.current, { y: 355, color: textColor, duration: 0.5 });
      gsap.to(buttonRef.current, { y: 355, duration: 0.5 });
      gsap.to(buttonRef.current, { borderWidth: 0, duration: 0.3 });
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
      gsap.to(numberRef.current, { color: bgColor, opacity: 1, duration: 0.3 });
      gsap.to(driverRef.current, { y: 0, color: "black", duration: 0.5 });
      gsap.to(buttonRef.current, { y: 0, duration: 0.5 });
      gsap.to(buttonRef.current, { borderWidth: 1, duration: 0.3 });
      gsap.to(carImgRef.current, { opacity: 0, duration: 0.5 });
    };

    el?.addEventListener("mouseenter", handleEnter);
    el?.addEventListener("mouseleave", handleLeave);

    return () => {
      el?.removeEventListener("mouseenter", handleEnter);
      el?.removeEventListener("mouseleave", handleLeave);
    };
  }, [bgColor, textColor]);

  const handleClick = () => {
    const el = containerRef.current;
    const rect = el.getBoundingClientRect();
    const offsetX = rect.left;
    const timeline = gsap.timeline({
      onComplete: () => {
        onSelect({ number, team, driver, textColor, bgColor, carImg });
      },
    });

    if (offsetX > 10) {
      timeline.to(el, {
        x: -offsetX,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    timeline.to(carImgRef.current, {
      rotate: 0,
      scale: 0.789,
      x: -10,
      y: 48,
      duration: 1,
      ease: "power2.out",
    });

    timeline.to(
      containerRef.current,
      {
        width: "100vw",
        height: "100vh",
        backgroundColor: bgColor,
        zIndex: 50,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-white transition-colors duration-500"
    >
      <img
        ref={carImgRef}
        src={carImg}
        alt="Car"
        className="absolute h-full w-auto object-contain opacity-0 rotate-[-90deg]"
      />
      <div className="flex flex-col">
        <div
          ref={numberRef}
          className="text-5xl font-semibold mb-7"
          style={{ color: textColor }}
        >
          {number}
        </div>
        <div ref={driverRef} className="flex flex-col text-black">
          <div className="text-5xl font-bold">{team}</div>
          <div className="text-3xl font-semibold">{driver}</div>
        </div>
        <div className="flex flex-row mt-[7rem]">
          <button
            ref={buttonRef}
            onClick={handleClick}
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
