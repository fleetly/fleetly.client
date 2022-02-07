import React, { useContext } from 'react';

// Builder
import { BuilderContext, ElementContext } from '@flow/builder';

// Styles
import styles from './Text.scss';
import { ContentTextEditor } from './Editor';

export const ContentText: React.FC = () => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { isSelected } = useContext(ElementContext);

  return (
    <div className={styles.Root}>
      <ContentTextEditor
        readOnly={!isEditable || (isEditable && !isSelected)}
      />
    </div>
  );
};
