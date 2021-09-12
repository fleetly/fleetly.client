import React, { useEffect, useState } from 'react';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

export const SignRecoverySuccess = () => {
  // State
  const [delay, setDelay] = useState<number>(20);

  // Effects
  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => setDelay(delay - 1), 1000);
    }
  }, [delay]);

  return (
    <Hero
      actions={
        <Button
          color="blue"
          disabled={!!delay}
          icon={!delay ? 'far fa-undo' : undefined}
          to={SIGN_ROUTES.RECOVERY}
        >
          {!!delay ? `Try in ${delay} seconds` : 'Send again'}
        </Button>
      }
      description="We have sent you a link to reset your password by email. If there is no mail, check your spam folder or try again."
      icon="fad fa-envelope-open-text"
      title="Check your email"
    />
  );
};
