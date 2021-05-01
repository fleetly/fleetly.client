import React, { useEffect, useRef } from 'react';

const useOutsideClick = (callback?: (event: React.SyntheticEvent) => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event: React.SyntheticEvent) => {
      if (ref && ref.current && !(ref.current as any).contains(event.target)) {
        callback && callback(event);
      }
    };

    document.addEventListener('click', handleDocumentClick as any);

    return () => {
      document.removeEventListener('click', handleDocumentClick as any);
    };
  }, [callback, ref]);

  return ref;
};

export { useOutsideClick };
