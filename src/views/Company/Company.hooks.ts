import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

// Components
import { MenuGroupProps } from '@components/Menu';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Interface
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Utils
import { fillUrl } from '@utils/url';

export const useCompanyView = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const isChat = !!useRouteMatch(ROUTES.COMPANY.CHAT.ROOT);

  // Data
  const { data } = useQuery<{ company: ICompany }>(GET_COMPANY_BY_ID, {
    variables: { companyId }
  });

  // Memo
  const menu = useMemo<MenuGroupProps[]>(
    () => [
      {
        children: [
          {
            icon: 'far fa-tachometer-alt',
            title: 'Dashboard',
            to: fillUrl(ROUTES.COMPANY.DASHBOARD, { companyId })
          }
        ]
      },
      {
        children: [
          {
            icon: 'far fa-comment',
            title: 'Chat',
            to: fillUrl(ROUTES.COMPANY.CHAT.ROOT, { companyId })
          },
          {
            icon: 'far fa-code-merge',
            title: 'Flow',
            to: fillUrl(ROUTES.COMPANY.FLOWS.ROOT, { companyId })
          }
        ],
        title: 'Apps'
      },
      {
        children: [
          {
            icon: 'far fa-database',
            title: 'Channels',
            to: fillUrl(ROUTES.COMPANY.CHANNELS, { companyId })
          },
          {
            icon: 'far fa-users',
            title: 'Subscribers',
            to: fillUrl(ROUTES.COMPANY.SUBSCRIBERS, { companyId })
          }
        ],
        title: 'General'
      },
      {
        children: [
          {
            icon: 'far fa-home-alt',
            title: 'General',
            to: fillUrl(ROUTES.COMPANY.GENERAL, { companyId })
          },
          {
            icon: 'far fa-wallet',
            title: 'Billing',
            to: fillUrl(ROUTES.COMPANY.BILLING, { companyId })
          },
          {
            icon: 'far fa-user-friends',
            title: 'Collaborators',
            to: fillUrl(ROUTES.COMPANY.COLLABORATORS, { companyId })
          },
          {
            icon: 'far fa-table',
            title: 'Fields',
            to: fillUrl(ROUTES.COMPANY.FIELDS, { companyId })
          },
          {
            icon: 'far fa-tags',
            title: 'Tags',
            to: fillUrl(ROUTES.COMPANY.TAGS, { companyId })
          }
        ],
        title: 'Settings'
      }
    ],
    [companyId]
  );

  return { company: data?.company, isChat, menu };
};
