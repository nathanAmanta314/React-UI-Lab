import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Car = [
  {
    id: 1,
    img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp",
  },
];

const CarMenu = () => {
  const Driver = useRef();
  const containerRef = useRef();
  const numberRef = useRef();
  const buttonRef = useRef();
  const carImgRef = useRef();

  useGSAP(() => {
    const el = containerRef.current;

    const handleEnter = () => {
      gsap.to(containerRef.current, {
        backgroundColor: "black",
        duration: 0.3,
      });

      gsap.to(numberRef.current, {
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(Driver.current, {
        y: 210,
        color: "red",
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        y: 210,
        duration: 0.5,
      });

      gsap.to(buttonRef.current, {
        borderWidth: 0,
        duration: 0.3,
      });

      gsap.fromTo(
        carImgRef.current,
        { opacity: 1, duration: 0.3, y: -100, scale: 0 },
        { scale: 1.5, duration: 0.3 }
      );
    };

    const handleLeave = () => {
      gsap.to(containerRef.current, {
        backgroundColor: "white",
        duration: 0.5,
      });

      gsap.to(numberRef.current, {
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

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen  p-4 transition-colors duration-500 overflow-hidden bg-white"
    >
      <img
        ref={carImgRef}
        src={Car[0].img}
        alt="Red Bull Racing Car"
        className="absolute  w-400px opacity-0 rotate-[-90deg] mb-20"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          objectFit: "contain",
        }}
      />

      <div className="flex flex-col mr-[20%] mt-[-25%]">
        <div ref={numberRef} className="text-5xl font-semibold mb-6">
          01
        </div>
        <div ref={Driver} className="flex flex-col text-black">
          <div className="text-4xl font-semibold">Red Bull Racing</div>
          <div className="text-2xl font-normal">
            Max Verstappen & Yuki Tsunoda
          </div>
        </div>
        <div className="flex flex-row mt-[8rem]">
          <button
            ref={buttonRef}
            className="ring-1 ring-black rounded-full py-2 px-4 bg-white"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarMenu;
