import React, { SyntheticEvent, useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useField } from 'react-final-form';

// Styles
import styles from './Textarea.scss';

export const ChatSendTextarea: React.FC<any> = ({ id, name }) => {
  // Setup
  const { input } = useField(name);

  // Handlers
  const handleBlur = useCallback(
    (event: SyntheticEvent) => event.preventDefault(),
    []
  );

  return (
    <TextareaAutosize
      {...input}
      className={styles.Root}
      id={id}
      maxRows={12}
      minRows={1}
      name={name}
      onBlur={handleBlur}
      placeholder="Enter Message..."
    />
  );
};
