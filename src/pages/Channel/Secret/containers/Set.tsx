// import * as React from 'react';
// import { InjectedFormProps, reduxForm } from 'redux-form';
// import * as yup from 'yup';

// // Components
// import Button from '@components/Button';
// import Form, { Actions, asyncValidate, Input } from '@components/Form';
// import Link from '@components/Link';
// import Modal from '@components/Modal';
// import { P } from '@components/Typography';

// // Constants
// import { SET_CHANNEL_TOKEN_FORM, SET_CHANNEL_TOKEN_MODAL } from '@constants';

// // Styles
// import styles from './common.scss';

// const ChannelSecretSet: React.FC<InjectedFormProps<
//   Channel.TokenSetFormValues,
//   any
// >> = ({ error, handleSubmit, submitting }) => (
//   <Modal
//     classes={{ container: styles.Container }}
//     id={SET_CHANNEL_TOKEN_MODAL}
//     title="Set new token"
//   >
//     <P className={styles.Description}>
//       You can set a new token for the current channel.{' '}
//       <Link to="/">Where can I get a new token?</Link>
//     </P>
//     <Form error={error} onSubmit={handleSubmit}>
//       <Input label="Token" name="newToken" placeholder="Many letters..." />

//       <Actions>
//         <Button color="primary" fullWidth loaded={submitting} type="submit">
//           Set Token
//         </Button>
//       </Actions>
//     </Form>
//   </Modal>
// );

// export default reduxForm<any, any>({
//   asyncValidate: asyncValidate(
//     yup.object().shape({ newToken: yup.string().required() })
//   ),
//   form: SET_CHANNEL_TOKEN_FORM
// })(ChannelSecretSet);
export default null;
