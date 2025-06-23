import { useEffect, useRef } from "react";

import {gsap} from "gsap";
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);


  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return null;
  }

  useEffect(() => {
      const cursor = cursorRef.current;
      const cursorBorder = cursorBorderRef.current;

      gsap.set([cursor, cursorBorder], {
       xPercent: -50,
       yPercent: -50,
      });

      const xTo = gsap.quickTo(cursor, "x", {
          duration: 0.2, ease: "power3.out",
      })

      const yTo = gsap.quickTo(cursor, "y", {
          duration: 0.2, ease: "power3.out",
      })

      const xBorderTo = gsap.quickTo(cursorBorder, "x", {
          duration: 0.3, ease: "power3.out",
      })

      const yBorderTo = gsap.quickTo(cursorBorder, "y", {
          duration: 0.3, ease: "power3.out",
      })

      const handlemouseMove = (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
          xBorderTo(e.clientX);
          yBorderTo(e.clientY);
      }

      window.addEventListener("mousemove", handlemouseMove);

      document.addEventListener("mousedown", () => {
        gsap.to([cursor, cursorBorder], {
         scale: 0.6,
         duration: 0.2
        });
      });

      document.addEventListener("mouseup", () => {
          gsap.set([cursor, cursorBorder], {
           scale: 1,
           duration: 0.2
          });
      })
  })
  return <>
  {}
  <dev
  ref={cursorRef}
  className='fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference'
  />

  <div
  ref={cursorBorderRef}
  className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference "
  />
  </>;
};

export default CustomCursor;
