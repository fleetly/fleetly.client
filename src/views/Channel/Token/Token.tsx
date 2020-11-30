import * as React from 'react';

// Containers
import Set from './containers/Set';
import Show from './containers/Show';

// Hooks
import { useChannelTokenView } from './Token.hooks';

const ChannelToken = () => {
  const { handleSetSubmit, handleShowSubmit } = useChannelTokenView();

  return (
    <>
      <Set onSubmit={handleSetSubmit} />
      <Show onSubmit={handleShowSubmit} />
    </>
  );
};

export default ChannelToken;
