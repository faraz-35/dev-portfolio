import { useEffect, useRef, DependencyList } from "react";

function useDebouncedEffect(
  callback: () => void,
  dependencies: DependencyList,
  delay: number
): void {
  const debounceTimer = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    // Clear existing timer if any
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new timer
    debounceTimer.current = setTimeout(() => {
      callback();
    }, delay);

    // Clear timer on cleanup
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [...dependencies]); // Pass dependencies array directly
}

export default useDebouncedEffect;
