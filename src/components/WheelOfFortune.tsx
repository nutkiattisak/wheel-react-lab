import React, { useRef } from "react";
import styles from "../WheelOfFortune.module.css";

const WheelOfFortune = () => {
  const wheelRef = useRef(null);
  let previousEndDegree = useRef(0);

  const handleSpin = () => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree.current + randomAdditionalDegrees;

    wheel.animate(
      [
        { transform: `rotate(${previousEndDegree.current}deg)` },
        { transform: `rotate(${newEndDegree}deg)` },
      ],
      {
        duration: 4000,
        easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
        fill: "forwards",
      }
    );

    previousEndDegree.current = newEndDegree;
  };

  return (
    <fieldset className={styles.uiWheelOfFortune}>
      <ul ref={wheelRef}>
        <li>
          <span>asdsad</span>
          <span>1</span>
        </li>
        <li>
          <span>asdsad</span>
          <span>1</span>
        </li>
        <li>$3000</li>
        <li>$4000</li>
        <li>$5000</li>
        <li>$6000</li>
        <li>$7000</li>
        <li>$8000</li>
        <li>$9000</li>
        <li>$10000</li>
        <li>$11000</li>
        <li>$12000</li>
      </ul>
      <button type="button" onClick={handleSpin}>
        SPIN
      </button>
    </fieldset>
  );
};

export default WheelOfFortune;
