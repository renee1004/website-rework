import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    const move = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = mouseX + "px"; dotRef.current.style.top = mouseY + "px"; }
    };
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = ringX + "px"; ringRef.current.style.top = ringY + "px"; }
      requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", move);
    requestAnimationFrame(animate);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;