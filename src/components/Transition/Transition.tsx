import classNames from 'classnames';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Styles
import './Transition.scss';

type Timing = {
  enter: number;
  exit: number;
};

interface PropTypes {
  children: React.ReactNode;
  delay?: number | Timing;
  duration: number | Timing;
  in?: boolean;
  enter?: string;
  exit?: string;
}

// @todo - refactored enter/exit timing
const Transition: React.FC<PropTypes> = ({
  children,
  delay,
  duration,
  in: propIn,
  enter,
  exit
}) => {
  const formattedDelay: Timing = {
    enter: (delay as Timing)?.enter || (delay as number) || 0,
    exit: (delay as Timing)?.exit || (delay as number) || 0
  };

  const formattedDuration: Timing = {
    enter: (duration as Timing)?.enter || (duration as number) || 0,
    exit: (duration as Timing)?.exit || (duration as number) || 0
  };

  return (
    <CSSTransition
      in={propIn}
      timeout={{
        enter: enter ? formattedDelay.enter + formattedDuration.enter : 0,
        exit: exit ? formattedDelay.exit + formattedDuration.exit : 0
      }}
      unmountOnExit
    >
      {(status) => {
        const isExist =
          (status === 'entering' && enter) || (status === 'exiting' && exit);

        return React.cloneElement(children as any, {
          className: classNames(
            (children as any).props.className,
            isExist &&
              `animate__animated animate__${
                status === 'entering' ? enter : exit
              }`
          ),
          style: isExist
            ? {
                animationDelay: `${
                  (status === 'entering'
                    ? formattedDelay.enter
                    : status === 'exiting'
                    ? formattedDelay.exit
                    : 0) / 1000
                }s`,
                animationDuration: `${
                  (status === 'entering'
                    ? formattedDuration.enter
                    : status === 'exiting'
                    ? formattedDuration.exit
                    : 0) / 1000
                }s`
              }
            : undefined
        });
      }}
    </CSSTransition>
  );
};

export default Transition;
