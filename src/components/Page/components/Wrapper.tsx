import classNames from 'classnames';
import * as React from 'react';

// Components
import { H3 } from '@components/Typography';

// Styles
import styles from './Wrapper.scss';

const PageWrapper: React.FC<Page.Wrapper.Props> = ({
  actions,
  children,
  classes,
  title
}) => (
  <div className={classNames(classes?.root, styles.Root)}>
    {(actions || title) && (
      <div className={classNames(classes?.header, styles.Header)}>
        {title && <H3>{title}</H3>}
        <div className={classNames(classes?.actions, styles.Actions)}>
          {actions}
        </div>
      </div>
    )}

    <div className={classNames(classes?.container, styles.Container)}>
      {children}
    </div>
  </div>
);

export default PageWrapper;
