import React, { useCallback, useState } from 'react';
import { Field } from 'react-final-form';
import { Position } from 'react-flow-renderer';

// Components
import { Button, Handle } from '../../../../Common';

// Hooks
import { useOutsideClick } from '@hooks/events';
import { useFlowBuilder } from '../../../../Common/hooks/useFlowBuilder';

// Styles
import styles from './Button.scss';

const FlowBuilderContentTextButton: React.FC<{}> = () => {
  // Setup
  const { avoidMouseDown } = useFlowBuilder();

  // State
  const [isFocused, setFocusState] = useState(false);

  // Handlers
  const handleClickClosed = useCallback(() => setFocusState(false), []);
  const handleClickOpened = useCallback(() => setFocusState(true), []);

  // Refs
  const ref = useOutsideClick<HTMLDivElement>(
    isFocused ? handleClickClosed : undefined
  );

  return (
    <div ref={ref}>
      <Field name="button">
        {({ input }) => (
          <Button color="blue" onClick={handleClickOpened}>
            {isFocused ? (
              <input
                {...input}
                autoFocus
                className={styles.Input}
                onMouseDown={avoidMouseDown}
              />
            ) : (
              input.value
            )}

            <Handle
              blockId="1"
              className={styles.Handle}
              color="blue"
              id="1"
              position={Position.Right}
              type="source"
            />
          </Button>
        )}
      </Field>
    </div>
  );
};

export default FlowBuilderContentTextButton;
