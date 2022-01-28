import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useField } from 'react-final-form';
import { compose } from 'recompose';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

// Components
import { BlockContentTextVariable, withVariable } from './components/Variable';

// Contexts
import { BuilderContext } from '@flow/containers/Builder';

// Styles
import styles from './Text.scss';

// Utils
import { deserialize } from './utils/deserialize';
import { BuilderButton } from '@flow/containers/Builder/Common/components';
import classNames from 'classnames';

export const BlockContentText: React.FC = () => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { input } = useField('text', {
    format: (value) => deserialize(value)
  });

  // State
  const [, setValue] = useState(deserialize('Hello, {{firstname}}!'));

  // Handlers
  const handleSlateMouseDown = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.stopPropagation();
    },
    []
  );

  // Memo
  const editor = useMemo(
    () => compose(withVariable, withReact)(createEditor() as any),
    []
  );

  // Renders
  const renderElement = useCallback((props) => {
    const { attributes, children, element } = props;

    switch (element.type) {
      case 'variable':
        return <BlockContentTextVariable {...props} />;
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsEditable]: isEditable
      })}
    >
      <Slate editor={editor as any} onChange={setValue} value={input.value}>
        <Editable
          className={styles.Editor}
          onMouseDown={handleSlateMouseDown}
          readOnly={!isEditable}
          renderElement={renderElement}
        />
      </Slate>

      <div className={styles.Buttons}>
        <BuilderButton color="blue">Add Button</BuilderButton>
      </div>
    </div>
  );
};
