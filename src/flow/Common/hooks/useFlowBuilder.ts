import React, { useCallback } from 'react';

const useFlowBuilder = () => {
  const avoidMouseDown = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => event.stopPropagation(),
    []
  );

  return { avoidMouseDown };
};

export { useFlowBuilder };
