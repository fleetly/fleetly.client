import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Loader from '@components/Loader';

// Fragments
import { DialogHeader } from './Header';
import { DialogMessages } from './Messages';
import { DialogSend } from './Send';

// GraphQL
import GET_CHAT from './Dialog.gql';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

// Styles
import styles from './Dialog.scss';

export const Dialog: React.FC = () => {
  // Setup
  const { chatId } = useParams<{ chatId: string }>();

  // State
  const [search, setSearch] = useState<string>('');

  // Data
  const { data, loading } = useQuery<{ chat: IChat }>(GET_CHAT, {
    variables: { chatId }
  });

  return (
    <div className={styles.Root}>
      {!data?.chat || loading ? (
        <Loader />
      ) : (
        <>
          <DialogHeader {...data.chat} onSearch={setSearch} />
          <DialogMessages search={search} />
          <DialogSend {...data.chat} />
        </>
      )}
    </div>
  );
};
