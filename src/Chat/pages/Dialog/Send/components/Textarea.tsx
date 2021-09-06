import React, { useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useField } from 'react-final-form';

// Styles
import styles from './Textarea.scss';

export interface DialogSendTextareaProps {
  id: string;
}

export const DialogSendTextarea: React.FC<DialogSendTextareaProps> = ({
  id
}) => {
  // Setup
  const { input } = useField('text');

  // Handlers
  const handleBlur = useCallback(
    (event: React.SyntheticEvent) => event.preventDefault(),
    []
  );

  return (
    <TextareaAutosize
      {...input}
      className={styles.Root}
      id={id}
      maxRows={12}
      minRows={1}
      name="text"
      onBlur={handleBlur}
      placeholder="Enter Message..."
    />
  );
};
