import { useEffect, useState } from "react";

function useEveryFouceTime() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.addEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

export default useEveryFouceTime;
