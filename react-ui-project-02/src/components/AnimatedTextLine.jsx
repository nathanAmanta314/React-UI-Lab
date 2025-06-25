import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const AnimatedTextLine = ({ text, className }) => {
  const containerRef = useRef(null);
  const LineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  useGSAP(() => {
    if (LineRefs.current.length > 0) {
      gsap.from(LineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (LineRefs.current[index] = el)}
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLine;
