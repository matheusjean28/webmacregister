import { useEffect } from 'react';

const useDataUpdater = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]); 
};

export default useDataUpdater;
