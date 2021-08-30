import { setIn, ValidationErrors } from 'final-form';
import { ValidationError, SchemaOf } from 'yup';

export const yupValidator = <T>(schema: SchemaOf<unknown>) => async (
  values: T
): Promise<ValidationErrors> => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return (e as ValidationError)?.inner.reduce(
      (errors, error) => setIn(errors, error.path || '', error.message),
      {}
    );
  }
};
