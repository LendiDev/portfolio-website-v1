import { useMemo } from "react";

const useRemToPixels = (multiplier = 1) => {
  const pixels = useMemo(
    () =>
      parseInt(getComputedStyle(document.documentElement).fontSize) *
      multiplier,
    [multiplier]
  );
  return pixels;
};

export default useRemToPixels;
