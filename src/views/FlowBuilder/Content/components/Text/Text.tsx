import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';

// Components
import { Button } from '@views/FlowBuilder/Common';

import TextArea from './components/Area';
import TextButton from './components/Button';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Text.scss';

interface PropTypes {
  id: string;
  text: string;
  buttons?: {
    id: string;
    text: string;
  }[];
}

const FlowBuilderContentText: React.FC<PropTypes> = ({ text }) => {
  // State
  const [isFocused, setFocusState] = useState(false);

  // Handlers
  const handleClickClosed = useCallback(() => setFocusState(false), []);
  const handleClickOpened = useCallback(() => setFocusState(true), []);

  const ref = useOutsideClick(isFocused ? handleClickClosed : undefined);

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsFocused]: isFocused })}
      onClick={handleClickOpened}
      ref={ref}
    >
      <Form
        initialValues={{ button: 'Кликай по мне 😎', text }}
        // tslint:disable-next-line: no-console
        onSubmit={console.log}
        subscription={{ values: true }}
      >
        {({ handleSubmit, values }) => (
          <form className={styles.Form} onSubmit={handleSubmit}>
            <TextArea isFocused={isFocused} />

            <div className={styles.Buttons}>
              <TextButton />
            </div>

            <div className={styles.Actions}>
              <Button color="blue">Add Button</Button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default FlowBuilderContentText;
