import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Field } from 'react-final-form';
import Textarea from 'react-textarea-autosize';

// Components
import { Text } from '@components/Typography';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Text.scss';

export const BlockContentText: React.FC = () => {
  // State
  const [isFocused, setFocusState] = useState(false);

  // Handlers
  const handleClickClosed = useCallback(() => setFocusState(false), []);
  const handleClickOpened = useCallback(() => setFocusState(true), []);

  const ref = useOutsideClick<HTMLDivElement>(
    isFocused ? handleClickClosed : undefined
  );

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsFocused]: isFocused
      })}
      onClick={handleClickOpened}
      ref={ref}
    >
      <Field name="text">
        {({ input }) =>
          isFocused ? (
            <Textarea {...input} className={styles.Textarea} />
          ) : (
            <Text className={styles.Text} component="div" weight="semiBold">
              {input.value}
            </Text>
          )
        }
      </Field>
    </div>
  );
};
