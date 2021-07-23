import React from 'react';

// Components
import Empty from '@components/Empty';
import Page, { Wrapper } from '@components/Page';

// Containers
import Header from './Header';
import Messages from './Messages';
import SendForm from './Send';

// Context
import { ChatContext } from './Chat.context';

// Hooks
import { useChatView } from './Chat.hooks';

// Styles
import styles from './Chat.scss';

const Chat = () => {
  // Setup
  const { chat, chatId, handleSearchSubmit, search } = useChatView();

  return (
    <ChatContext.Provider value={{ chatId, search }}>
      <Page title="Chat">
        <Wrapper
          classes={{ root: styles.Root, container: styles.Container }}
          key={chatId}
          title="Chat"
        >
          {chat ? (
            <>
              <Header {...chat} onSearch={handleSearchSubmit} />
              <Messages />
              <SendForm {...chat} />
            </>
          ) : (
            <Empty
              description="Select a chat to start messaging."
              icon="fal fa-comments-alt"
              title="Open Dialog"
            />
          )}
        </Wrapper>
      </Page>
    </ChatContext.Provider>
  );
};

export default Chat;
