import { useQuery } from '@apollo/client';
import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import { CardHeader } from '@components/Card';
import Loader from '@components/Loader';
import Link from '@components/Link';
import Page, { Wrapper } from '@components/Page';

// Containers
import { Threads } from './containers/Threads';

// GraphQL
import GET_COMPANY from './Chat.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Pages
import { Dialog } from './pages/Dialog';

// Styles
import styles from './Chat.scss';

const Chat = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ company: ICompany }>(GET_COMPANY, {
    variables: { companyId }
  });

  return (
    <Page className={styles.Root} title="Chat">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.Sidebar}>
            <div className={styles.Header}>
              <Link to={`/${companyId}`}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={data?.company?.title}
                      classes={{ root: styles.Avatar }}
                      toColor={data?.company?.id}
                    />
                  }
                  subTitle="Software porject"
                  title={data?.company?.title || 'Loading...'}
                />
              </Link>
            </div>

            <Threads />
          </div>

          <Wrapper classes={{ root: styles.Container }} title="Chat">
            <Switch>
              <Route component={Dialog} path="/:companyId/chat/:chatId" />
            </Switch>
          </Wrapper>
        </>
      )}
    </Page>
  );
};

export default Chat;
