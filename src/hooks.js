import { useState } from "react";

export const useLoadStatus = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  return {
    isLoaded,
    setIsLoaded,
    error,
    setError
  }
};
