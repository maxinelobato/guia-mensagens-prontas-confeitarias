
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  delay = 0,
  direction = "up"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up": return "translate-y-10";
      case "down": return "-translate-y-10";
      case "left": return "translate-x-10";
      case "right": return "-translate-x-10";
      default: return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      // Fixed: Merged multiple style attributes into one to prevent JSX error
      style={{
        width,
        transitionDelay: `${delay}ms`
      }}
      className={`transition-all duration-1000 ease-out ${isVisible
        ? "opacity-100 translate-y-0 translate-x-0"
        : `opacity-0 ${getDirectionClass()}`
        }`}
    >
      {children}
    </div>
  );
};
