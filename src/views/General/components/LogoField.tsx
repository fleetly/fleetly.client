import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { FieldHeader, withReduxForm } from '@components/Form';

// Styles
import styles from './LogoField.scss';

const GeneralLogo: React.FC<General.LogoFieldProps> = ({
  alt = 'Logo',
  color,
  label
}) => (
  <div>
    <FieldHeader label={label} />

    <div className={styles.Wrapper}>
      <Avatar
        alt={alt}
        classes={{ root: styles.Avatar, plug: styles.AvatarPlug }}
        color={color}
      />

      <Button color="primary" variant="outlined">
        Upload
      </Button>
    </div>
  </div>
);

export default withReduxForm<General.LogoFieldProps>()(GeneralLogo);
