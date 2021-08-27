import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Constants
import { CREATE_FIELD_MODAL } from '@constants';

// Fragments
import { FieldsCreate } from './Create';
import { FieldsTable } from './Table';

// GraphQL
import GET_FIELD_LIST from './Fields.gql';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';

// Store
import { useModals } from '@store';

const Fields = () => {
  // Setup
  const { openModal } = useModals(CREATE_FIELD_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
  }>(GET_FIELD_LIST, {
    variables: { companyId }
  });

  return (
    <Page title="Fields">
      <Wrapper
        actions={
          <Button color="primary" onClick={openModal}>
            Create Field
          </Button>
        }
        title="Fields"
      >
        <FieldsTable
          data={data?.fields || []}
          fieldTypes={data?.fieldTypes || []}
        />

        <FieldsCreate fieldTypes={data?.fieldTypes || []} />
      </Wrapper>
    </Page>
  );
};

export default Fields;
