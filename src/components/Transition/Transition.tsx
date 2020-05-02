import { get } from 'lodash';
import * as React from 'react';
import { Transition as ReactTransition } from 'react-transition-group';

// Styles
import './Transition.scss';

const Transition: React.SFC<Transition.Props> = ({
  children,
  delay,
  duration,
  in: propIn,
  enter,
  exit,
  timeout
}) => {
  const getAnimationStyle = (state: string) => {
    let animation = null;

    if ((state === 'entering' && enter) || (state === 'exiting' && exit)) {
      const type = state === 'entering' ? 'enter' : 'exit';

      // Timing
      const currentDelay = get(delay, type, delay || 0) / 1000;
      const currentDuration = get(duration, type, duration || 1000) / 1000;
      const currentName = type === 'enter' ? enter : exit;

      animation = `${currentName} ${currentDuration}s ${currentDelay}s both`;
    }

    return animation;
  };

  return (
    <ReactTransition in={propIn} timeout={timeout}>
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
