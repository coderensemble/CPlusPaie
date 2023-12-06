import styles from "../styles/VirevoltantTitle.module.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';

const VirevoltantTitle = ({ title }) => {
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  useEffect(() => {
    const titleElement = titleRef.current;
    const letters = lettersRef.current;

    const tl = gsap.timeline({ paused: true });

    letters.forEach((letter, index) => {
      tl.fromTo(
        letter,
        {
          x: gsap.utils.random(-500, 500, true),
          y: gsap.utils.random(-500, 500, true),
          rotation: gsap.utils.random(-720, 720),
          scale: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.1, 
          onComplete: () => {
            if (index === letters.length - 1) {
              setIsFullyDisplayed(true);
            }
          },
        }
      );
    });

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          tl.play();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    letters.forEach(letter => observer.observe(letter));

    return () => {
      observer.disconnect();
    };
  }, [title]);

  return (
    <div className={`${styles.impressionnantTitle} ${isFullyDisplayed ? styles.fullyDisplayed : ''}`} ref={titleRef}>
      {title.split('').map((letter, index) => (
        <span key={index} ref={(el) => (lettersRef.current[index] = el)}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default VirevoltantTitle;
