import { useRef, useState, useEffect } from "react";

export const useTargetOnScreen = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const callback = (entries) => {
    const [entry] = entries;
    let timerId;

    if (entry.isIntersecting) {
      clearTimeout(timerId);
      setIsVisible(entry.isIntersecting);

      timerId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const targetElem = containerRef.current;
    const observer = new IntersectionObserver(callback, options);

    if (targetElem) {
      observer.observe(targetElem);
    }

    return () => {
      if (targetElem) {
        observer.unobserve(targetElem);
      }
    };
  }, [containerRef]);

  return [containerRef, isVisible];
};
