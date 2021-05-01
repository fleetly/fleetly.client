import React, { useCallback, useState } from 'react';

// Components
import { PropTypes } from '@components/ContextMenu';

interface Result {
  anchor?: HTMLElement;
  handleMenuClose?(event: React.SyntheticEvent): void;
  handleMenuOpen?(event: React.SyntheticEvent): void;
  isOpened: boolean;
}

const useContextMenu = (): [PropTypes, Result] => {
  // State
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [isOpened, setOpenState] = useState(false);

  // Handlers
  const handleMenuClose = useCallback(() => {
    setAnchor(undefined);
    setOpenState(false);
  }, []);

  const handleMenuOpen = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      setAnchor(event.currentTarget);
      setOpenState(true);
    },
    []
  );

  return [
    { anchor, onClose: handleMenuClose, opened: isOpened },
    { anchor, handleMenuClose, handleMenuOpen, isOpened }
  ];
};

export { useContextMenu };
