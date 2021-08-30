import classNames from 'classnames';
import React, { useMemo } from 'react';

// Fleetly
import { Color, Source } from '@fleetly/common/dist/enums';

// Styles
import styles from './Avatar.scss';

// Utils
import { convertToColor } from '@utils/string';
import { getClassName } from '@utils/styles';

interface Classes extends ExtendedClasses {
  photo?: string;
  plug?: string;
  source?: string;
}

interface PropTypes {
  alt?: string;
  aura?: boolean;
  classes?: Classes;
  className?: string;
  color?: Color;
  sourceType?: Source;
  src?: string;
  toColor?: string;
}

const Avatar: React.FC<PropTypes> = ({
  alt,
  aura,
  classes,
  className,
  color: propColor,
  sourceType,
  src,
  toColor
}) => {
  // Memo
  const color = useMemo(() => propColor || convertToColor(toColor), [
    propColor,
    toColor
  ]);

  const displayedAlt = useMemo(
    () =>
      (alt || '')
        .split(' ')
        .slice(0, 2)
        .map((str: string) => str.substr(0, 1))
        .join(''),
    [alt]
  );

  return (
    <div
      className={classNames(
        className,
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color
        }),
        {
          [styles.RootWithAura]: aura
        }
      )}
    >
      {src ? (
        <img
          alt={alt}
          className={classNames(classes?.photo, styles.Photo)}
          src={src}
        />
      ) : (
        <div className={classNames(classes?.plug, styles.Plug)}>
          {displayedAlt}
        </div>
      )}

      {sourceType && (
        <i
          className={classNames(
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
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
