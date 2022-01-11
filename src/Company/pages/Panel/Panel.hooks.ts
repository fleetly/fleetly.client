import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { generatePath, useParams } from 'react-router-dom';

// Components
import { MenuGroupProps } from '@components/Menu';

// GraphQL
import GET_COMPANY from './Panel.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import { CHAT_ROUTES } from '@chat/Chat.routes';
import { COMPANY_ROUTES } from '@company/Company.routes';
import { FLOW_ROUTES } from '@flow/Flow.routes';

export const usePanel = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ company: ICompany }>(GET_COMPANY, {
    variables: { companyId }
  });

  // Memo
  const menu = useMemo<MenuGroupProps[]>(
    () => [
      {
        children: [
          {
            icon: 'far fa-tachometer-alt',
            exact: true,
            title: 'Dashboard',
            to: generatePath(COMPANY_ROUTES.ROOT, { companyId })
          }
        ]
      },
      {
        children: [
          {
            icon: 'far fa-comment',
            title: 'Chat',
            to: generatePath(CHAT_ROUTES.ROOT, { companyId })
          },
          {
            icon: 'far fa-code-merge',
            title: 'Flows',
            to: generatePath(FLOW_ROUTES.ROOT, { companyId })
          }
        ],
        title: 'Apps'
      },
      {
        children: [
          {
            icon: 'far fa-database',
            title: 'Channels',
            to: generatePath(COMPANY_ROUTES.CHANNELS, { companyId })
          },
          {
            icon: 'far fa-users',
            title: 'Subscribers',
            to: generatePath(COMPANY_ROUTES.SUBSCRIBERS, { companyId })
          }
        ],
        title: 'General'
      },
      {
        children: [
          {
            icon: 'far fa-home-alt',
            title: 'General',
            to: generatePath(COMPANY_ROUTES.GENERAL, { companyId })
          },
          {
            icon: 'far fa-wallet',
            title: 'Billing',
            to: generatePath(COMPANY_ROUTES.BILLING, { companyId })
          },
          {
            icon: 'far fa-user-friends',
            title: 'Collaborators',
            to: generatePath(COMPANY_ROUTES.COLLABORATORS, { companyId })
          },
          {
            icon: 'far fa-table',
            title: 'Fields',
            to: generatePath(COMPANY_ROUTES.FIELDS, { companyId })
          },
          {
            icon: 'far fa-tags',
            title: 'Tags',
            to: generatePath(COMPANY_ROUTES.TAGS, { companyId })
          }
        ],
        title: 'Settings'
      }
    ],
    [companyId]
  );

  return { company: data?.company, loading, menu };
};
