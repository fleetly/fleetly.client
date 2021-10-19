import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Assets
import emptyImage1x from './Common/assets/empty@1x.png';
import emptyImage2x from './Common/assets/empty@1x.png';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';
import { Image } from '@components/Picture';
import Loader from '@components/Loader';
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
  const { data, loading } = useQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
  }>(GET_FIELD_LIST, {
    variables: { companyId }
  });

  const hasFields = data?.fields && data?.fields.length > 0;

  return (
    <Page title="Fields">
      <Wrapper
        actions={
          hasFields && (
            <Button
              color="blue"
              icon="far fa-plus"
              onClick={openModal}
              variant="outlined"
            >
              Create Field
            </Button>
          )
        }
        title="Fields"
      >
        {!hasFields && loading ? (
          <Loader />
        ) : (
          <>
            <FieldsCreate fieldTypes={data?.fieldTypes || []} />

            {hasFields ? (
              <FieldsTable
                data={data?.fields || []}
                fieldTypes={data?.fieldTypes || []}
              />
            ) : (
              <Hero
                actions={
                  <Button color="blue" onClick={openModal}>
                    Create Field
                  </Button>
                }
                description="Store important information about your customers in dedicated fields."
                image={
                  <Image
                    src={emptyImage1x}
                    srcSet={{ '1x': emptyImage1x, '2x': emptyImage2x }}
                  />
                }
                title="Be Aware"
              />
            )}
          </>
        )}
      </Wrapper>
    </Page>
  );
};

export default Fields;
