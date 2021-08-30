import React from 'react';
import { Field } from 'react-final-form';
import Textarea from 'react-textarea-autosize';

// Components
import { Text } from '@components/Typography';

// Hooks
import { useFlowBuilder } from '../../../../Common/hooks/useFlowBuilder';

// Styles
import styles from './Area.scss';

interface PropTypes {
  isFocused?: boolean;
}

const FlowBuilderContentTextArea: React.FC<PropTypes> = ({ isFocused }) => {
  // Setup
  const { avoidMouseDown } = useFlowBuilder();

  return (
    <Field name="text">
      {({ input }) =>
        isFocused ? (
          <Textarea
            {...input}
            className={styles.Root}
            onMouseDown={avoidMouseDown}
          />
        ) : (
          <Text className={styles.Text} size="small" weight="medium">
            {input.value}
          </Text>
        )
      }
    </Field>
  );
};

export default FlowBuilderContentTextArea;
