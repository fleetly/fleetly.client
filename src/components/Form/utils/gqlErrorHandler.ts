import { set } from 'lodash';
import { SubmissionError } from 'redux-form';

interface IError {
  graphQLErrors: {
    message: string;
  }[];
  message: string;
}

interface IGraphQLError {
  message: string;
}

export default ({ graphQLErrors, message }: IError): void => {
  const errors = {};

  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.forEach((gqlError: IGraphQLError) => {
      set(errors, '_error', gqlError.message);
    });
  } else if (message) {
    set(errors, '_error', message);
  }

  throw new SubmissionError(errors);
};
