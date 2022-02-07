import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useField } from 'react-final-form';
import { compose } from 'recompose';
import { Transforms, createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

// Components
import Button from '@components/Button';
import { Text } from '@components/Typography';

import { ContentTextEditorVariable, withVariable } from './components/Variable';

// Styles
import styles from './Editor.scss';

// Utils
import { deserialize } from './utils/deserialize';
import { serialize } from './utils/serialize';
import classNames from 'classnames';

export interface ContentTextEditorProps {
  readOnly?: boolean;
}

export const ContentTextEditor: React.FC<ContentTextEditorProps> = ({
  readOnly
}) => {
  // Setup
  const { input } = useField('text', {
    format: (value) => deserialize(value),
    parse: (value) => serialize(value)
  });

  const editor = useMemo(
    () => compose(withVariable, withReact)(createEditor() as any),
    []
  );

  // State
  const [isFocused, setFocusState] = useState(false);

  // Effects
  useEffect(() => {
    if (readOnly) {
      Transforms.deselect(editor as any);
      setFocusState(false);
    }
  }, [editor, readOnly]);

  // Handlers
  const handleInputBlur = useCallback(() => {
    Transforms.deselect(editor as any);
    setFocusState(false);
  }, [editor]);

  const handleInputFocus = useCallback(() => setFocusState(!readOnly), [
    readOnly
  ]);

  const handleInputMouseDown = useCallback(
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
        return <ContentTextEditorVariable {...props} />;
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsEditable]: !readOnly,
        [styles.RootIsFocused]: !readOnly && isFocused
      })}
    >
      <Slate editor={editor as any} {...input}>
        <Editable
          className={styles.Editor}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onMouseDown={handleInputMouseDown}
          readOnly={readOnly}
          renderElement={renderElement}
        />

        {!readOnly && (
          <div className={styles.Actions}>
            <Button
              className={styles.Variable}
              icon="far fa-brackets-curly"
              onClick={handleVariableClick}
            />

            <Text className={styles.Limit}>500</Text>
          </div>
        )}
      </Slate>
    </div>
  );
};
