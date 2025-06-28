import { useRef, useCallback } from "react";

export const useDebounceFn = (fn, delay) => {
  const timeoutRef = useRef();

  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFn;
};
