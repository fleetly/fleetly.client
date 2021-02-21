// @todo - make custom fleetly emoji picker
import React, { useCallback, useState } from 'react';
import Picker from 'emoji-picker-react';

// Components
import Button from '@components/Button';

// Styles
import styles from './Emoji.scss';

const ChatSendEmoji: React.FC<any> = ({ onSelect }) => {
  // State
  const [isOpened, setOpenState] = useState(false);

  // Handlers
  const handleTriggerClick = useCallback(
    () => setOpenState((isOpened) => !isOpened),
    []
  );

  return (
    <div className={styles.Root}>
      {isOpened && (
        <div className={styles.Picker}>
          <Picker
            disableSearchBar
            disableSkinTonePicker
            onEmojiClick={onSelect}
          />
        </div>
      )}

      <Button
        onClick={handleTriggerClick}
        icon="far fa-smile"
        variant="outlined"
      />
    </div>
  );
};

export default ChatSendEmoji;
