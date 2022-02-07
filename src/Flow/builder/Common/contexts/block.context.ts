import React from 'react';

export const BlockContext = React.createContext<{
  blockId?: string;
  color?: Color;
}>({});
