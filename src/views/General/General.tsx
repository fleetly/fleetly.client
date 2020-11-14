import * as React from 'react';

// Components
import { Caption, H4, H5 } from '@components/Typography';
import Page, { Wrapper } from '@components/Page';

// Constants
import {
  DELETE_COMPANY_FORM,
  DISABLE_COMPANY_FORM,
  UPDATE_COMPANY_NAME_FROM
} from '@constants';

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
  const { data, handleUCNFormSubmit } = useGenerals();
  const title = data?.company?.title;
  return (
    <Page classes={{ container: styles.Container }} title="General">
      <Wrapper classes={{ container: styles.General }} title="General">
        <GeneralForm form={UPDATE_COMPANY_NAME_FROM} title={title} />
      </Wrapper>
      <Wrapper classes={{ container: styles.Forms }}>
        <div>
          <H5 className={styles.Title}>Disable</H5>
          <H4 className={styles.CompanyNameBlock}>Disable this company</H4>
          <Caption className={styles.Description}>
            All incoming information will no longer be processed.
          </Caption>
          <DisableForm form={DISABLE_COMPANY_FORM} />

          <H5 className={styles.Title}>Rename</H5>
          <H4 className={styles.CompanyNameBlock}>
            Rename <span className={styles.CompanyName}>«{title}»</span> to
            something new
          </H4>
          <Caption className={styles.Description}>
            Renaming your company can have unintended side effects.
          </Caption>
          <RenameForm
            form={UPDATE_COMPANY_NAME_FROM}
            onSubmit={handleUCNFormSubmit}
            title={data?.company?.title}
          />

          <H5 className={styles.Title}>Delete</H5>
          <H4 className={styles.CompanyNameBlock}>
            Delete <span className={styles.CompanyName}>«{title}»</span>
          </H4>
          <Caption className={styles.Description}>
            Delete your company can have unintended side effect.
          </Caption>
          <DeleteForm form={DELETE_COMPANY_FORM} />
        </div>
      </Wrapper>
    </Page>
  );
};

export default General;
