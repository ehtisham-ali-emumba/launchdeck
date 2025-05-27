import { useEffect } from "react";

export const useHandleResize = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);
};
