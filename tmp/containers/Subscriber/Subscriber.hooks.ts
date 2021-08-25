import * as React from 'react';
import { useLazyQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import GET_SUBSCRIBER_BY_ID from './graphql/getSubscriberById.gql';

// Interface
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import { ISubscriber } from '@interfaces/subscriber.interface';
import { ITag } from '@interfaces/tag.interface';

// Store
import { useModals } from '@store';

const VIEW = {
  FIELDS: 'fields',
  TAGS: 'tags'
};

const useSubscriber = () => {
  // Setup
  const { data: modalData, closeModal, isOpened } = useModals<{
    subscriberId: string;
  }>(SUBSCRIBER_MODAL);

  const { companyId } = useParams<{ companyId: string }>();

  // State
  const [currentCompanyId, setCurrentCompanyId] = React.useState(companyId);
  const [currentView, setCurrentView] = React.useState(VIEW.TAGS);

  // Data
  const [getSubscriber, { data }] = useLazyQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
    subscriber: ISubscriber;
    tags: ITag[];
  }>(GET_SUBSCRIBER_BY_ID);

  // Effetcs
  React.useEffect(() => {
    if (companyId !== currentCompanyId) {
      closeModal();
      setCurrentCompanyId(companyId);
    }
  }, [closeModal, companyId, currentCompanyId]);

  React.useEffect(() => {
    if (modalData?.subscriberId) {
      getSubscriber({
        variables: { companyId, subscriberId: modalData?.subscriberId }
      });
    }
  }, [companyId, getSubscriber, modalData]);

  // Handlers
  const handleCloseClick = React.useCallback(() => closeModal(), [closeModal]);

  return {
    companyId,
    currentView,
    handleCloseClick,
    handleSelectTab: setCurrentView,
    fields: data?.fields,
    fieldTypes: data?.fieldTypes,
    isOpened,
    subscriber: data?.subscriber,
    tags: data?.tags
  };
};

export { useSubscriber };
export { VIEW };
