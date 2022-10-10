import { useState } from "react";

interface useCounterProps {
  initialValue?: number;
}

export const useCounter = ({ initialValue = 0 }: useCounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounter = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    handleCounter,
  };
};
