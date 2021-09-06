import { Picker } from 'emoji-mart';
import insertTextAtCursor from 'insert-text-at-cursor';
import React, { useCallback, useState } from 'react';

// Components
import Button from '@components/Button';
import Transition from '@components/Transition';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Emoji.scss';

import 'emoji-mart/css/emoji-mart.css';

export interface DialogSendEmojiProps {
  id: string;
}

export const DialogSendEmoji: React.FC<DialogSendEmojiProps> = ({ id }) => {
  // Setup
  const ref = useOutsideClick<HTMLDivElement>(() => setOpenState(false));

  // State
  const [isOpened, setOpenState] = useState(false);

  // Handlers
  const handleEmojiSelect = useCallback(
    ({ native }) => {
      const el = document.getElementById(id);
      el && insertTextAtCursor(el as HTMLTextAreaElement, native);
    },
    [id]
  );

  const handleTriggerClick = useCallback((event) => {
    setOpenState((isOpened) => !isOpened);
  }, []);

  return (
    <div className={styles.Root}>
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
