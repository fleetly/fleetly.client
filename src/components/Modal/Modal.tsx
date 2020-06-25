import classNames from 'classnames';
import * as React from 'react';
import { Portal } from 'react-portal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { createSelector } from 'reselect';

// Components
import { H3 } from '@components/Typography';

// Services
import { closeModal } from '@store';

// Styles
import styles from './Modal.scss';

const Modal: React.SFC<Modal.Props> = ({
  children,
  classes,
  data,
  id,
  isOpened = false,
  onClose = () => null,
  title
}) => {
  const dispatch = useDispatch();
  const modal = useSelector(
    React.useMemo(
      () =>
        createSelector(
          (state: any) => state.modals,
          (modals) => modals[id]
        ),
      [id]
    )
  );

  const handleBackdropClick = React.useCallback(
    (event) => {
      dispatch(closeModal(id));
      onClose(event);
    },
    [dispatch, id, onClose]
  );

  return (
    <Portal>
      <CSSTransition
        classNames={{
          enter: styles.RootTransitionEnter,
          enterActive: styles.RootTransitionEnterActive
        }}
        in={!!modal || isOpened}
        timeout={700}
        unmountOnExit
      >
        <div className={classNames(classes?.root, styles.Root)}>
          <div
            className={classNames(classes?.backdrop, styles.Backdrop)}
            onClick={handleBackdropClick}
          />

          <div className={classNames(classes?.container, styles.Container)}>
            {title && (
              <H3 className={classNames(classes?.title, styles.Title)}>
                {title}
              </H3>
            )}

            <div className={classNames(classes?.content, styles.Content)}>
              {typeof children === 'function'
                ? children({ ...data })
                : children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
