import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Message.scss';
import { getClassName } from '@utils/styles';

type Variant = 'incoming' | 'outcoming';

export interface LandingIntroPhoneMessageProps {
  buttons?: string[];
  id: string;
  text: string;
  variant?: Variant;
}

const LandingIntroPhoneMessage: React.FC<LandingIntroPhoneMessageProps> = ({
  buttons,
  text,
  variant = 'outcoming'
}) => (
  <div
    className={classNames(
      styles.Root,
      getClassName('variant', { collection: styles, value: variant })
    )}
  >
    <div className={styles.Container}>
      <Text className={styles.Text} medium size="extraLarge">
        {text}
      </Text>

      {buttons && buttons.length > 0 && (
        <div className={styles.Actions}>
          {buttons.map((text, index) => (
            <button className={styles.Button} key={index} type="button">
              <Text medium size="extraLarge">
                {text}
              </Text>
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default LandingIntroPhoneMessage;
