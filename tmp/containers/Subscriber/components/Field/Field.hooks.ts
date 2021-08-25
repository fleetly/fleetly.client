import * as React from 'react';

// Utils
import { copyToClipboard } from '@utils/clipboard';

const useSubscriberField = ({ id, onClick, onRemove, title, value }: any) => {
  // State
  const [isCopied, setCopyState] = React.useState(false);

  // Handlers
  const handleClick = React.useCallback(
    () => onClick && onClick(id, title, value),
    [id, onClick, title, value]
  );

  const handleCopyClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      copyToClipboard(value);
      setCopyState(true);

      setTimeout(() => setCopyState(false), 1000);
    },
    [value]
  );

  const handleRemoveClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onRemove && onRemove(id);
    },
    [id, onRemove]
  );

  return {
    isCopied,
    handleClick,
    handleCopyClick,
    handleRemoveClick
  };
};

export { useSubscriberField };
