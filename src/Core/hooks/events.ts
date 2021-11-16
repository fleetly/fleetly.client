import React, { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  callback?: (event: React.SyntheticEvent) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleDocumentClick = (event: React.SyntheticEvent) => {
      if (ref && ref.current && !(ref.current as any).contains(event.target)) {
        callback && callback(event);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick as any, true);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleDocumentClick as any,
        true
      );
    };
  }, [callback, ref]);

  return ref;
};
