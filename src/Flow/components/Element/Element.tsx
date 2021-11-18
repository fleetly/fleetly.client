import React, { useCallback } from 'react';
import { Form } from 'react-final-form';

export const Element: React.FC = ({ children }) => {
  // Handlers
  const handleFormSubmit = useCallback(async () => {
    return true;
  }, []);

  return (
    <Form onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
    </Form>
  );
};
