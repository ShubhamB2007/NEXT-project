'use client'

import { useEffect, useRef } from "react";

const SplitText = ({
  text,
  className,
  delay = 0,
  animationFrom,
  animationTo,
  easing,
  threshold,
  rootMargin,
  onLetterAnimationComplete
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.style.transition = `all 0.6s ${easing}`;
              Object.assign(letter.style, animationTo);

              if (index === letters.length - 1 && onLetterAnimationComplete) {
                onLetterAnimationComplete();
              }
            }, index * delay);
          });
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, [delay, animationFrom, animationTo, easing, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <span ref={containerRef} className={className}>
      {text.split("").map((letter, index) => {
        // Specially color first 14 letters ("AI Front Office")
        const isHighlight = index < 14; // "AI Front Office".length === 14
        return (
          <span
            key={index}
            className="letter"
            style={{
              display: "inline-block",
              opacity: animationFrom.opacity,
              transform: animationFrom.transform,
              color: isHighlight ? "#7d69e2" : undefined,
              fontWeight: isHighlight ? "600" : undefined
            }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
