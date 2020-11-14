import classNames from 'classnames';
import * as React from 'react';
import { Portal } from 'react-portal';
import { CSSTransition } from 'react-transition-group';

// Components
import { H3 } from '@components/Typography';

// Store
import { useModals } from '@store';

// Styles
import styles from './Modal.scss';

const Modal: React.FC<Modal.Props> = ({
  children,
  classes,
  id,
  onClose = () => null,
  title
}) => {
  const { closeModal, isOpened, modal } = useModals(id);

  const handleBackdropClick = React.useCallback(
    (event) => {
      closeModal();
      onClose(event);
    },
    [closeModal, onClose]
  );

  return (
    <Portal>
      <CSSTransition
        classNames={{
          enter: styles.RootTransitionEnter,
          enterActive: styles.RootTransitionEnterActive
        }}
        in={isOpened}
        timeout={{ enter: 700 }}
        unmountOnExit
      >
        {(state: string) => (
          <div className={classNames(classes?.root, styles.Root)}>
            <div
              className={classNames(classes?.backdrop, styles.Backdrop)}
              onClick={handleBackdropClick}
            />

            <div className={classNames(classes?.container, styles.Container)}>
              {modal && (
                <>
                  {(title || modal?.title) && (
                    <H3 className={classNames(classes?.title, styles.Title)}>
                      {modal?.title || title}
                    </H3>
                  )}

                  <div className={classNames(classes?.content, styles.Content)}>
                    {typeof children === 'function'
                      ? children({ ...modal?.data })
                      : children}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
