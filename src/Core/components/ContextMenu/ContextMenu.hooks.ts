import React, { useCallback, useState } from 'react';

// Components
import { ContextMenuProps } from '@components/ContextMenu';

interface Result {
  anchor?: HTMLElement;
  closeMenu(): void;
  handleMenuClose(): void;
  handleMenuOpen(event: React.SyntheticEvent<HTMLElement>): void;
  isOpened: boolean;
  openMenu(event: React.SyntheticEvent<HTMLElement>): void;
}

const useContextMenu = (): [ContextMenuProps, Result] => {
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
    {
      anchor,
      closeMenu: handleMenuClose,
      handleMenuClose,
      handleMenuOpen,
      openMenu: handleMenuOpen,
      isOpened
    }
  ];
};

export { useContextMenu };
