import { useState, useEffect } from "react";

export default function useResize(): number {
  const [nowWidth, setNowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setNowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return nowWidth;
}
