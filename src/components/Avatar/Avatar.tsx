import { Source } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Avatar.scss';

const Avatar: React.FC<Avatar.Props> = ({
  alt = 'avatar',
  classes,
  sourceType,
  src
}) => {
  const { rootClassName, photoClassName, sourceClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.root, styles.Root),
      photoClassName: classNames(classes?.photo, styles.Photo),
      sourceClassName: classNames(
        classes?.source,
        styles.Source,
        sourceType === Source.VK.toUpperCase() && {
          'fab fa-vk': true,
          [styles.SourceVariantVK]: true
        }
      )
    }),
    [classes, sourceType]
  );

  return (
    <div className={rootClassName}>
      <img alt={alt} className={photoClassName} src={src} />
      {sourceType && <i className={sourceClassName} />}
    </div>
  );
};

export default Avatar;
