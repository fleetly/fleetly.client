import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Toggle.scss';

interface LandingHeaderMenuToggleProps {
  onClick(): void;
  opened: boolean;
}

const LandingHeaderMenuToggle: React.FC<LandingHeaderMenuToggleProps> = ({
  onClick,
  opened
}) => (
  <button className={styles.Root} onClick={onClick}>
    <div
      className={classNames(styles.Line, {
        [styles.LineIsSelected]: !opened
      })}
    />

    <div
      className={classNames(styles.Line, {
        [styles.LineIsSelected]: opened
      })}
    />
  </button>
);

export default LandingHeaderMenuToggle;
