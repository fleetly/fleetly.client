import * as React from 'react';

// Components
import { P, H4, H5 } from '@components/Typography';

// Styles
import styles from './Section.scss';

const GeneralSection: React.FC<General.SectionProps> = ({
  children,
  description,
  label,
  title
}) => (
  <div className={styles.Root}>
    <div className={styles.Info}>
      <H5 className={styles.Label}>{label}</H5>
      <H4 className={styles.Title}>{title}</H4>
      <P className={styles.Description}>{description}</P>
    </div>

    {children}
  </div>
);

export default GeneralSection;
