import React, { MutableRefObject, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  callback?: (event: React.SyntheticEvent) => void,
  externalRef?: MutableRefObject<HTMLElement | null>
) => {
  const _ref = useRef<T>(null);
  const ref = externalRef || _ref;

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

  return _ref;
};
