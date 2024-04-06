"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Marquee({ children }) {
  const texts1 = Array.from({ length: 4 }, (_) => children);
  const texts2 = Array.from({ length: 4 }, (_) => children);

  const marquee1 = useRef(null);
  const marquee2 = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;
  let speed = 0.05;

  const animateMarquee = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = 100;
    }
    gsap.set(marquee1.current, { xPercent });
    gsap.set(marquee2.current, { xPercent: xPercent + 100 });
    xPercent += speed * direction;
    window.requestAnimationFrame(animateMarquee);
  };

  useGSAP(() => {
    animateMarquee();
  });

  return (
    <MarqueeLine
      slider={slider}
      ref1={marquee1}
      ref2={marquee2}
      texts1={texts1}
      texts2={texts2}
    />
  );
}

const MarqueeLine = ({ ref1, ref2, texts1, texts2, slider }) => (
  <div ref={slider} class="relative marquee uppercase font-grotesk text-[8rem]">
    <ul ref={ref1} class="marquee__content absolute left-0 top-0">
      {texts1.map((text, index) => (
        <li key={`text-{${index}}`} className="mr-8 odd:font-bold">{text}</li>
      ))}
    </ul>
    <ul ref={ref2} class="marquee__content absolute left-0 top-0 " aria-hidden>
      {texts2.map((text, index) => (
        <li key={`text-{${index}}`} className="mr-8 odd:font-bold">{text}</li>
      ))}
    </ul>
  </div>
);
