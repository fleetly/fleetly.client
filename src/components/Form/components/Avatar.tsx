import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { FieldHeader } from '@components/Form';

// HOCs
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Avatar.scss';

const FormAvatar: React.FC<Form.AvatarProps> = ({
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

export default withReduxForm<Form.AvatarProps>()(FormAvatar);
