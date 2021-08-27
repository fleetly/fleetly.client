import classNames from 'classnames';
import React from 'react';

// Components
import { H2, Text } from '@components/Typography';
import Button from '../../../components/Button';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Item.scss';

// Utils
import { getClassName } from '@utils/styles';

type Color = 'default' | 'white';

interface Classes extends ExtendedClasses {
  content?: string;
  cover?: string;
  description?: string;
  image?: string;
  title?: string;
}

interface PropTypes {
  classes?: Classes;
  className?: string;
  color?: Color;
  description: string;
  image: string;
  link?: boolean;
  reverse?: boolean;
  title: string;
}

const LandingFeaturesItem: React.FC<PropTypes> = ({
  classes = {},
  className,
  color = 'default',
  description,
  image,
  link,
  reverse = false,
  title
}) => (
  <div
    className={classNames(
      className,
      classes.root,
      styles.Root,
      getClassName('color', { collection: styles, value: color }),
      {
        [styles.RootModeReverse]: !!reverse
      }
    )}
  >
    <div className={classNames(classes.cover, styles.Cover)}>
      <img
        alt={title}
        className={classNames(classes.image, styles.Image)}
        src={image}
      />
    </div>

    <div className={classNames(classes.content, styles.Content)}>
      <H2
        className={classNames(classes.title, styles.Title)}
        weight="extraBold"
      >
        {title}
      </H2>

      <Text
        className={classNames(classes.description, styles.Description)}
        component="div"
        size="large"
        weight="medium"
      >
        {description}
      </Text>

      {link && (
        <div className={styles.Actions}>
          <Button to={ROUTES.SIGN.UP}>Try for Free</Button>
        </div>
      )}
    </div>
  </div>
);

export default LandingFeaturesItem;