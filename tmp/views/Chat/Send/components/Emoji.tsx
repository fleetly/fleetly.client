import classNames from 'classnames';
import { Picker } from 'emoji-mart';
import React, { useCallback, useState } from 'react';

// Components
import Button from '@components/Button';
import Transition from '@components/Transition';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Emoji.scss';

import 'emoji-mart/css/emoji-mart.css';

const ChatSendEmoji: React.FC<any> = ({ onSelect }) => {
  // Setup
  const ref = useOutsideClick<HTMLDivElement>(() => setOpenState(false));

  // State
  const [isOpened, setOpenState] = useState(false);

  // Handlers
  const handleEmojiSelect = useCallback(
    ({ native }) => onSelect && onSelect(native),
    [onSelect]
  );

  const handleTriggerClick = useCallback((event) => {
    setOpenState((isOpened) => !isOpened);
  }, []);

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsOpened]: isOpened })}
    >
      <Transition duration={300} enter="zoomIn" exit="zoomOut" in={isOpened}>
        <div className={styles.Picker} ref={ref}>
          <Picker
            emojiSize={28}
            onSelect={handleEmojiSelect}
            perLine={8}
            showPreview={false}
            showSkinTones={false}
            set="apple"
          />
        </div>
      </Transition>

      <Button
        onClick={handleTriggerClick}
        icon="far fa-smile"
        variant="outlined"
      />
    </div>
  );
};

export default ChatSendEmoji;
