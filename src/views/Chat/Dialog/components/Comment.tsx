import moment from 'moment';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Comment.scss';

const DialogComment: React.FC<Chat.Dialog.CommentProps> = ({
  date,
  text,
  author
}) => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <div className={styles.Title}>Comment</div>

      <div className={styles.Author}>
        <div className={styles.Date}>{moment(date).format('HH:mm')}</div>

        <div className={styles.Name}>
          {author.firstname} {author.lastname}
        </div>

        <Avatar src={author.photo} classes={{ root: styles.Avatar }} />
      </div>
    </div>

    <div className={styles.Text}>{text}</div>
  </div>
);

export default DialogComment;
