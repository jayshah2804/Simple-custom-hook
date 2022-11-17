import { useEffect, useState } from "react";

const useCounter = (flag) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + flag);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default useCounter;
