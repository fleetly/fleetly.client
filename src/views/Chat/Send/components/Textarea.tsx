import React, { SyntheticEvent, useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { WrappedFieldInputProps } from 'redux-form';

// HOCs
import { withReduxForm } from '@components/Form';

// Styles
import styles from './Textarea.scss';

const ChatSendTextarea: React.FC<Form.FieldBase & WrappedFieldInputProps> = ({
  id,
  name,
  onChange,
  value
}) => {
  // Handlers
  const handleBlur = useCallback(
    (event: SyntheticEvent) => event.preventDefault(),
    []
  );

  return (
    <TextareaAutosize
      className={styles.Root}
      id={id}
      maxRows={12}
      minRows={1}
      name={name}
      onBlur={handleBlur}
      onChange={onChange}
      placeholder="Enter Message..."
      value={value}
    />
  );
};

export default withReduxForm<Form.FieldBase>()(ChatSendTextarea);
