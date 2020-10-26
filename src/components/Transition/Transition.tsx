import { get } from 'lodash';
import * as React from 'react';
import { Transition as ReactTransition } from 'react-transition-group';

// Styles
import './Transition.scss';

const Transition: React.SFC<Transition.Props> = ({
  children,
  delay = 0,
  duration = 0,
  in: propIn,
  enter,
  exit
}) => {
  const formattedDelay: Transition.Timing = {
    enter: get(delay, 'enter', delay || 0),
    exit: get(delay, 'exit', delay || 0)
  };

  const formattedDuration: Transition.Timing = {
    enter: get(duration, 'enter', duration || 0),
    exit: get(duration, 'exit', duration || 0)
  };

  const getAnimationStyle = (state: string) => {
    let animation = null;

    if ((state === 'entering' && enter) || (state === 'exiting' && exit)) {
      const type = state === 'entering' ? 'enter' : 'exit';

      animation = `${type === 'enter' ? enter : exit} ${
        get(formattedDuration, type) / 1000
      }s ${get(formattedDelay, type) / 1000}s both`;
    }

    return animation;
  };

  return (
    <ReactTransition
      in={propIn}
      timeout={{
        enter: formattedDelay.enter + formattedDuration.enter,
        exit: formattedDelay.exit + formattedDuration.exit
      }}
      unmountOnExit
    >
      {(state) =>
        React.cloneElement(children, {
          style: {
            animation: getAnimationStyle(state)
          }
        })
      }
    </ReactTransition>
  );
};

export default Transition;
