import { Source } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Avatar.scss';

// Utils
import { getClassName } from '@utils/styles';
import { convertToColor } from '@utils/string';

const Avatar: React.FC<Avatar.Props> = ({
  alt = 'avatar',
  aura,
  classes,
  color: propColor,
  sourceType,
  src,
  toColor
}) => {
  // Memo
  const color = React.useMemo(() => convertToColor(toColor) || propColor, [
    propColor,
    toColor
  ]);

  const {
    rootClassName,
    photoClassName,
    plugClassName,
    sourceClassName
  } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color
        }),
        {
          [styles.RootWithAura]: aura
        }
      ),
      photoClassName: classNames(classes?.photo, styles.Photo),
      plugClassName: classNames(classes?.plug, styles.Plug),
      sourceClassName: classNames(
        classes?.source,
        styles.Source,
        sourceType === Source.VK.toUpperCase() && {
          'fab fa-vk': true,
          [styles.SourceVariantVK]: true
        },
        sourceType === Source.TELEGRAM.toUpperCase() && {
          'fab fa-telegram-plane': true,
          [styles.SourceVariantTelegram]: true
        }
      )
    }),
    [aura, classes, color, sourceType]
  );

  return (
    <div className={rootClassName}>
      {src ? (
        <img alt={alt} className={photoClassName} src={src} />
      ) : (
        <div className={plugClassName}>{alt.substr(0, 1)}</div>
      )}

      {sourceType && <i className={sourceClassName} />}
    </div>
  );
};

export default Avatar;
