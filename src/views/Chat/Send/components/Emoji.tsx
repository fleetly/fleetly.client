import * as React from 'react';
import Picker from 'emoji-picker-react';

// Components
import Button from '@components/Button';

// Styles
import styles from './Emoji.scss';

const Emoji = () => {
  const [isHidden, setIsHidden] = React.useState(false);
  const openEmoji = () => setIsHidden(!isHidden);

  const [chosenEmoji, setChosenEmoji] = React.useState(null);
  const onEmojiClick = ({ event, emojiObject }: any) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className={styles.Root}>
      {isHidden && (
        <div className={styles.EmojiList}>
          <Picker
            disableSearchBar
            disableSkinTonePicker
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
      <Button onClick={openEmoji} icon="far fa-smile" variant="outlined" />
    </div>
  );
};

export default Emoji;
