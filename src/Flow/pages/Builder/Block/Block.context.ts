import React from 'react';

export const BuilderBlockContext = React.createContext<{
  blockId?: string;
  color?: Color;
}>({});
