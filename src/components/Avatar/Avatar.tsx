import { Source } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Avatar.scss';

const Avatar: React.FunctionComponent<Avatar.Props> = ({
  alt = 'avatar',
  classes,
  sourceType,
  src
}) => (
  <div className={classNames(classes?.root, styles.Root)}>
    <img
      alt={alt}
      className={classNames(classes?.photo, styles.Photo)}
      src={src}
    />

    {sourceType && (
      <i
        className={classNames(
          classes?.source,
          styles.Source,
          sourceType === Source.VK.toUpperCase() && {
            'fab fa-vk': true,
            [styles.SourceVariantVK]: true
          }
        )}
      />
    )}
  </div>
);

export default Avatar;
