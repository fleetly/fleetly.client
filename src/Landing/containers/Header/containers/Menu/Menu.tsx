import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import Button from 'Landing/components/Button';

import MenuItem from './components/Item';
import Toggle from './components/Toggle';

// Containers
import Integrations from '../Integrations';
import Products from '../Products';

// Constants
import { PLANS_MODAL } from '@constants';

// Data
import { MENU, MENU_ID } from './Menu.data';

// Hooks
import { useResponsive } from '@hooks/responsive';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Store
import { useModals } from '@store';

// Styles
import styles from './Menu.scss';

const LandingHeaderMenu: React.FC<{}> = () => {
  // Setup
  const { openModal } = useModals(PLANS_MODAL);
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
      const itemId = event.currentTarget.dataset.itemId;

      if (itemId === MENU_ID.PRICING) {
        openModal();
      } else if (isMobile) {
        setIndex(itemId || MENU_ID.PRODUCTS);
      }
    },
    [isMobile, openModal]
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
              <Button to={SIGN_ROUTES.UP} variant="orange">
                Try Free
              </Button>

              <Button to={SIGN_ROUTES.IN} variant="green">
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
