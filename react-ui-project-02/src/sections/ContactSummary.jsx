import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Marquee from "../components/Marquee";
gsap.registerPlugin(ScrollTrigger);
const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-bold">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-yellow-500">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black  bg-transparent border-y-2 "
        iconClassName="stroke-yellow-500 stroke-2 fill-none bg-transparent text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
