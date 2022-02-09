import React, { useContext } from 'react';

// Builder
import { BuilderContext, ElementContext } from '@flow/builder';

// Layouts
import { ContentTextButtons } from './Buttons';
import { ContentTextEditor } from './Editor';

// Styles
import styles from './Text.scss';
import classNames from 'classnames';

export const ContentText: React.FC = () => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { isSelected } = useContext(ElementContext);

  const readOnly = !isEditable || (isEditable && !isSelected);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsSelected]: isSelected
      })}
    >
      <ContentTextEditor readOnly={readOnly} />
      <ContentTextButtons readOnly={readOnly} />
    </div>
  );
};
