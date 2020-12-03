import * as React from 'react';
import Placeholder from 'react-select/src/components/Placeholder';

// Styles
import styles from './Placeholder.scss';

const Placeholder: React.FC<Placeholder.Props> = ({ description, title }) => {
  // Handlers

  return (
    <div className={styles.Root}>
      <i className={styles.Icon} />

      <H5 className={styles.Title} component="div">
        {(title = 'Hello, world!')}
      </H5>

      <Caption className={styles.Description} component="div">
        {(description = 'Here is some description below.')}
      </Caption>
    </div>
  );
};

export default Placeholder;
