import * as React from 'react';
import Picker from 'emoji-picker-react';

// Components
import Button from '@components/Button';

// Styles
import styles from './Emoji.scss';

const Emoji = ({ onEmojiSelect }: any) => {
  const [isOpened, setOpenState] = React.useState(false);
  const handleTriggerClick = React.useCallback(
    () => setOpenState((isOpened) => !isOpened),
    []
  );

  return (
    <div className={styles.Root}>
      {isOpened && (
        <div className={styles.EmojiList}>
          <Picker
            disableSearchBar
            disableSkinTonePicker
            onEmojiClick={onEmojiSelect}
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

export default Emoji;
