// CustomCursor.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const move = () => {
      // Lerp movement
      pos.x += (mouse.x - pos.x) * 0.1;
      pos.y += (mouse.y - pos.y) * 0.1;
      xSet(pos.x);
      ySet(pos.y);
      requestAnimationFrame(move);
    };

    move();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "rgba(255, 0, 150, 0.6)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference", // Gives it a cool blend effect
      }}
    />
  );
};

export default CustomCursor;
