import * as React from 'react';
import classNames from 'classnames';
import { Portal } from 'react-portal';
import { get } from 'lodash';
import { connect, MapStateToProps } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { H3 } from '@components/Typography';

// Actions
import { closeModal } from '@services/modals';

// Interfaces
import { IModalState } from '@services/modals/reducer';

// Styles
import styles from './Modal.scss';

const Modal: React.ComponentClass<Modal.Props> = ({
  children,
  classes,
  isOpened = false,
  handleClose,
  title,
  ...props
}) =>
  isOpened && (
    <Portal>
      <div className={classNames(classes?.root, styles.Root)}>
        <div
          className={classNames(classes?.backdrop, styles.Backdrop)}
          onClick={handleClose}
        />

        <div className={classNames(classes?.container, styles.Container)}>
          {title && (
            <H3 className={classNames(classes?.title, styles.Title)}>
              {title}
            </H3>
          )}

          <div className={classNames(classes?.content, styles.Content)}>
            {typeof children === 'function' ? children({ ...props }) : children}
          </div>
        </div>
      </div>
    </Portal>
  );

const mapStateToProps: MapStateToProps<Modal.Props, IModalState> = (
  state,
  { id, isOpened }
) => {
  const modal = get(state, `modals.${id}`);

  return {
    ...modal,
    isOpened: isOpened || !!modal
  };
};

export default compose(
  connect(mapStateToProps, { closeModal }),
  withHandlers({
    handleClose: ({ closeModal, id }: Modal.IHandleCloseProps) => (): void => {
      closeModal(id);
    }
  })
)(Modal);
