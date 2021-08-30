import classNames from 'classnames';
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import { H3 } from '@components/Typography';

// Store
import { useModals } from '@store';

// Styles
import styles from './Modal.scss';

export interface ModalClasses extends ExtendedClasses {
  backdrop?: string;
  container?: string;
  title?: string;
  content?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  data?: Map<string, any>;
  classes?: ModalClasses;
  id: string;
  opened?: boolean;
  onClose?(event: React.SyntheticEvent<HTMLDivElement>): void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  classes,
  id,
  onClose = () => null,
  opened,
  title
}) => {
  const { closeModal, isOpened, modal } = useModals(id);

  const handleBackdropClick = useCallback(
    (event) => {
      closeModal();
      onClose(event);
    },
    [closeModal, onClose]
  );

  // @todo - refactored for Transition
  return ReactDOM.createPortal(
    <CSSTransition
      classNames={{
        enter: styles.RootTransitionEnter,
        enterActive: styles.RootTransitionEnterActive
      }}
      in={opened || isOpened}
      timeout={{ enter: 700 }}
      unmountOnExit
    >
      <div className={classNames(classes?.root, styles.Root)}>
        <div
          className={classNames(classes?.backdrop, styles.Backdrop)}
          onClick={handleBackdropClick}
        />

        <div className={classNames(classes?.container, styles.Container)}>
          {(modal?.title || title) && (
            <H3 className={classNames(classes?.title, styles.Title)}>
              {modal?.title || title}
            </H3>
          )}

          <div className={classNames(classes?.content, styles.Content)}>
            {typeof children === 'function'
              ? children(modal?.data || {})
              : children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
