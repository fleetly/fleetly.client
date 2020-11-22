import classNames from 'classnames';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Styles
import './Transition.scss';

// @todo - refactored enter/exit timing
const Transition: React.FC<Transition.Props> = ({
  children,
  delay,
  duration,
  in: propIn,
  enter,
  exit
}) => {
  const formattedDelay: Transition.Timing = {
    enter: (delay as Transition.Timing)?.enter || (delay as number) || 0,
    exit: (delay as Transition.Timing)?.exit || (delay as number) || 0
  };

  const formattedDuration: Transition.Timing = {
    enter: (duration as Transition.Timing)?.enter || (duration as number) || 0,
    exit: (duration as Transition.Timing)?.exit || (duration as number) || 0
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

        return React.cloneElement(children, {
          className: classNames(
            children.props.className,
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
