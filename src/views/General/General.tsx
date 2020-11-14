import * as React from 'react';

// Components
import { P, H4, H5 } from '@components/Typography';
import Page, { Wrapper } from '@components/Page';

// Containers
import GeneralForm from './containers/GeneralForm';

// Hooks
import { useGenerals } from './General.hooks';

// Styles
import styles from './General.scss';

const General = () => {
  const { data, forms } = useGenerals();
  const title = data?.company?.title;

  return (
    <Page classes={{ container: styles.Root }} title="General">
      <Wrapper classes={{ container: styles.Container }} title="General">
        <GeneralForm title={title} />
      </Wrapper>
      <Wrapper classes={{ container: styles.Container }}>
        <div className={styles.Wrapper}>
          {forms.map(
            ({ description, label, title, FormComponent, onSubmit }, index) => (
              <div className={styles.Section} key={index}>
                <div className={styles.Info}>
                  <H5 className={styles.Label}>{label}</H5>
                  <H4 className={styles.Title}>{title}</H4>
                  <P className={styles.Description}>{description}</P>
                </div>

                <FormComponent onSubmit={onSubmit} />
              </div>
            )
          )}
        </div>
      </Wrapper>
    </Page>
  );
};

export default General;
