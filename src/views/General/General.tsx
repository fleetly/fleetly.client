import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Constants
import { RENAME_COMPANY_FORM } from '@constants';

// Containers
import DeleteForm from './containers/deleteForm';
import DisableForm from './containers/disableForm';
import GeneralForm from './containers/GeneralForm';
import RenameForm from './containers/renameForm';

// Hooks
import { useGenerals } from './General.hooks';

// Styles
import styles from './General.scss';

const General = () => {
  const { handleFormSubmit } = useGenerals();

  return (
    <Page classes={{ container: styles.Container }} title="General">
      <Wrapper classes={{ container: styles.General }} title="General">
        <GeneralForm form={RENAME_COMPANY_FORM} />
      </Wrapper>
      <Wrapper classes={{ container: styles.Forms }}>
        <div>
          <DisableForm form={RENAME_COMPANY_FORM} />
          <RenameForm form={RENAME_COMPANY_FORM} onSubmit={handleFormSubmit} />
          <DeleteForm form={RENAME_COMPANY_FORM} />
        </div>
      </Wrapper>
    </Page>
  );
};

export default General;
