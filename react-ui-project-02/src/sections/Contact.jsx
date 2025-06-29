import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`;

  const items = [
    "just imagin, i code",
    "just imagin, i code",
    "just imagin, i code",
  ];

  useGSAP(() => {
    gsap.from(".sosial-link", {
      y: 100,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".sosial-link",
      },
    });
  });
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Get in touch"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="sosial-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                zanuarnanta@gmail.com
              </p>
            </div>
            <div className="sosial-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                081-1234-5678
              </p>
            </div>
            <div className="sosial-link">
              <h2>Sosial Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    href={social.href}
                    key={index}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={items} className="text-white " />
    </section>
  );
};

export default Contact;
