import classNames from 'classnames';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useField, useFormState } from 'react-final-form';
import { compose } from 'recompose';
import { Transforms, createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

// Components
import Button from '@components/Button';
import { Text } from '@components/Typography';

import { BlockContentTextVariable, withVariable } from './components/Variable';

// Contexts
import { BuilderContext } from '@flow/containers/Builder';
import { BuilderElementsContext } from '../../../Elements';

// Styles
import styles from './Text.scss';

// Utils
import { deserialize } from './utils/deserialize';
import { serialize } from './utils/serialize';

export const BlockContentText: React.FC = () => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { isFocused: isSelected } = useContext(BuilderElementsContext);

  const { input } = useField('text', {
    format: (value) => deserialize(value),
    parse: (value) => serialize(value)
  });

  const { values } = useFormState();

  const editor = useMemo(
    () => compose(withVariable, withReact)(createEditor() as any),
    []
  );

  // State
  const [isFocused, setFocusState] = useState(false);

  // Handlers
  const handleInputBlur = useCallback(() => setFocusState(false), []);
  const handleInputFocus = useCallback(() => setFocusState(true), []);

  const handleSlateMouseDown = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.stopPropagation();
    },
    []
  );

  const handleVariableClick = useCallback(() => {
    Transforms.insertNodes(
      editor as any,
      {
        type: 'variable',
        children: [{ text: '' }],
        variable: ''
      } as any
    );
  }, [editor]);

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
        [styles.RootIsEditable]: isEditable,
        [styles.RootIsFocused]: isEditable && isSelected && isFocused,
        [styles.RootIsSelected]: isEditable && isSelected
      })}
    >
      <div className={styles.Control}>
        <Slate editor={editor as any} {...input}>
          <Editable
            className={styles.Editor}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onMouseDown={handleSlateMouseDown}
            readOnly={!isEditable || !isSelected}
            renderElement={renderElement}
          />

          {isEditable && isSelected && (
            <div className={styles.Actions}>
              <Button
                className={styles.Variable}
                icon="far fa-brackets-curly"
                onClick={handleVariableClick}
              />

              <Text className={styles.Limit}>{500 - values.text.length}</Text>
            </div>
          )}
        </Slate>
      </div>
    </div>
  );
};
