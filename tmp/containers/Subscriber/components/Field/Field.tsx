import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { Caption, P } from '@components/Typography';

// Hooks
import { useSubscriberField } from './Field.hooks';

// Styles
import styles from './Field.scss';

// Utils
import { getClassName } from '@utils/styles';

const SubscriberField: React.FC<Subscriber.FieldProps> = ({
  color = Color.BLUE,
  ...props
}) => {
  const { title, value } = props;

  const {
    isCopied,
    handleClick,
    handleCopyClick,
    handleRemoveClick
  } = useSubscriberField(props);

  const { copyIcon, rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Root,
        getClassName('color', { collection: styles, value: color })
      ),
      copyIcon: classNames({
        'far fa-clipboard': !isCopied,
        'far fa-clipboard-check': isCopied
      })
    }),
    [color, isCopied]
  );

  return (
    <div
      className={rootClassName}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <Caption className={styles.Title} component="div">
        {title}
      </Caption>

      {value && (
        <>
          <P className={styles.Value} component="div">
            {value}
          </P>

          <div className={styles.Cover} />

          <div className={styles.Actions}>
            <Button
              icon={copyIcon}
              onClick={handleCopyClick}
              variant="outlined"
            />

            <Button
              color="danger"
              icon="far fa-times"
              onClick={handleRemoveClick}
              variant="outlined"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SubscriberField;
