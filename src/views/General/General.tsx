import classNames from 'classnames';
import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

import Section from './components/Section';

// Containers
import DeleteForm from './containers/DeleteForm';
import DisableForm from './containers/DisableForm';
import UpdateForm from './containers/UpdateForm';
import UpdateNameForm from './containers/UpdateNameForm';

// Hooks
import { useGenerals } from './General.hooks';

// Styles
import styles from './General.scss';

const General = () => {
  const { company, handleUpdateNameFormSubmit } = useGenerals();

  // Class names
  const { dangerContainerClassName } = React.useMemo(
    () => ({
      dangerContainerClassName: classNames(
        styles.Container,
        styles.ContainerColorTypeDanger
      )
    }),
    []
  );

  // Sections
  const SECTIONS = React.useMemo(
    () => [
      {
        children: <DisableForm />,
        description: 'All incoming information will no longer be processed.',
        label: 'Disable',
        title: 'Disable this company'
      },
      {
        children: <UpdateNameForm onSubmit={handleUpdateNameFormSubmit} />,
        description: 'Renaming your company can have unintended side effects.',
        label: 'Rename',
        title: (
          <>
            {`Rename `}
            <span className={styles.Name}>«{company?.name}»</span>
            {` to something new`}
          </>
        )
      },
      {
        children: <DeleteForm />,
        description: 'Delete your company can have unintended side effect.',
        label: 'Delete',
        title: (
          <>
            Delete <span className={styles.Name}>«{company?.title}»</span>
          </>
        )
      }
    ],
    [company, handleUpdateNameFormSubmit]
  );

  return (
    <Page classes={{ container: styles.Root }} title="General">
      <Wrapper classes={{ container: styles.Container }} title="General">
        {company && (
          <UpdateForm
            initialValues={{ companyId: company?.id, title: company?.title }}
          />
        )}
      </Wrapper>

      <Wrapper
        classes={{ container: dangerContainerClassName }}
        title="Danger section"
      >
        <div className={styles.Wrapper}>
          {SECTIONS.map((section, index) => (
            <Section {...section} key={index} />
          ))}
        </div>
      </Wrapper>
    </Page>
  );
};

export default General;
