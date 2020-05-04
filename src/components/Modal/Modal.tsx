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

interface IHandleCloseProps {
  closeModal(id: string): void;
  id: string;
  onClose(): void;
}

const Modal: ({
  children,
  classes,
  isOpened,
  title,
  ...props
}: Modal.Props) => false | any = ({
  children,
  classes,
  isOpened,
  title = 'hallo',
  ...props
}) =>
  isOpened && (
    <Portal>
      <div className={classNames(classes?.root, styles.Root)}>
        <div className={classNames(classes?.backdrop, styles.Backdrop)} />

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

const mapStateToProps: MapStateToProps<
  Modal.Props,
  IModalState,
  { services: any }
> = ({ services }, { id, isOpened }) => {
  const modal = get(services, `modals.${id}`);

  return {
    ...modal,
    isOpened: isOpened || !!modal
  };
};

export default compose(
  connect(mapStateToProps, { closeModal }),
  withHandlers({
    handleClose: ({
      closeModal,
      id,
      onClose
    }: IHandleCloseProps) => (): void => {
      closeModal(id);
      onClose();
    }
  })
)(Modal);
