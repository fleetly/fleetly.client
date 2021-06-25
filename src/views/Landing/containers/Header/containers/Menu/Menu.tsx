import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import Button from '@views/Landing/components/Button';

import MenuItem from './components/Item';
import Toggle from './components/Toggle';

// Containers
import Integrations from '../Integrations';
import Products from '../Products';

// Data
import { MENU, MENU_ID } from './Menu.data';

// Hooks
import { useResponsive } from '@hooks/responsive';

// Routes
import routes from '@routes';

// Styles
import styles from './Menu.scss';

const LandingHeaderMenu: React.FC<{}> = () => {
  // Setup
  const { isDesktop, isMobile } = useResponsive();

  // State
  const [currentIndex, setIndex] = useState<null | string>(MENU_ID.PRODUCTS);
  const [isOpened, setOpenState] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    isDesktop && setIndex(null);
    isMobile && setIndex(MENU_ID.PRODUCTS);
  }, [isDesktop, isMobile]);

  // Handlers
  const handleItemClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      isMobile &&
        setIndex(event.currentTarget.dataset.itemIndex || MENU_ID.PRODUCTS);
    },
    [isMobile]
  );

  const handleToggleClick = useCallback(
    () =>
      setOpenState((isOpened) => {
        document.body.style.overflow = isOpened ? 'auto' : 'hidden';
        return !isOpened;
      }),
    [setOpenState]
  );

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsOpened]: isOpened })}
    >
      <Toggle onClick={handleToggleClick} opened={isOpened} />

      <div className={styles.Wrapper}>
        <nav className={styles.Nav} role="menu">
          {MENU.map(({ id, Dropdown, title }) => (
            <MenuItem
              key={id}
              id={id}
              onClick={handleItemClick}
              selected={currentIndex === id}
              title={title}
            >
              {Dropdown && <Dropdown />}
            </MenuItem>
          ))}
        </nav>

        {isMobile && (
          <div
            className={classNames(styles.Slider, {
              [styles.SliderVariantIntegrations]:
                currentIndex === MENU_ID.INTEGRATIONS,
              [styles.SliderVariantProducts]: currentIndex === MENU_ID.PRODUCTS
            })}
          >
            <div className={styles.Track}>
              <Products />
              <Integrations />
            </div>

            <div className={styles.Actions}>
              <Button to={routes.SIGN.UP} variant="orange">
                Try Free
              </Button>

              <Button to={routes.SIGN.IN} variant="green">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingHeaderMenu;
