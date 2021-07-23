import React from 'react';

export const ChatContext = React.createContext<{
  chatId?: string;
  search?: null | string;
}>({});
