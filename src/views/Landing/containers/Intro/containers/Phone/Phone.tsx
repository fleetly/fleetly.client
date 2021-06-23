import last from 'lodash/last';
import React, { useEffect, useMemo, useState } from 'react';

// Components
import Button from '@components/Button';
import { Text } from '@components/Typography';
import Message from './components/Message';

// Data
import { MESSAGES } from './Phone.data';

// Styles
import styles from './Phone.scss';

const LandingIntroPhone = () => {
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState(MESSAGES);

  // Effects
  useEffect(() => {
    setMessages(MESSAGES.slice(0, currentIndex + 1));
    const newIndex = currentIndex + 1;

    setTimeout(
      () => setCurrentIndex(newIndex),
      MESSAGES[newIndex]?.timeout || 0
    );
  }, [currentIndex]);

  // Memo
  const groups = useMemo(() => {
    const result: { messages: any[]; variant: string }[] = [];

    messages.forEach(({ variant = 'outcoming', ...message }) => {
      const lastMessage = last(result);

      if (lastMessage && lastMessage.variant === variant) {
        lastMessage.messages.push(message);
      } else {
        result.push({
          messages: [message],
          variant: variant || 'outcoming'
        });
      }
    });

    return result.reverse();
  }, [messages]);

  return (
    <div className={styles.Root}>
      <div className={styles.Header} />

      <div className={styles.Container}>
        <div className={styles.Track}>
          {groups.map(({ messages, variant }, index) => (
            <div className={styles.Group} key={messages[0].id}>
              {messages.map((message) => (
                <Message {...message} key={message.id} variant={variant} />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.Form}>
          <Text medium size="extraLarge">
            Type something...
          </Text>
          <Button color="primary" icon="fas fa-paper-plane" />
        </div>
      </div>
    </div>
  );
};

export default LandingIntroPhone;
