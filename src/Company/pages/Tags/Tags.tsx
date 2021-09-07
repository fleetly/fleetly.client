import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Assets
import emptyImage1x from './Common/assets/empty@1x.png';
import emptyImage2x from './Common/assets/empty@1x.png';

// Components
import Button from '@components/Button';
import Empty from '@components/Empty';
import Image from '@components/Image';
import Loader from '@components/Loader';
import Page, { Wrapper } from '@components/Page';

// Constants
import { CREATE_TAG_MODAL } from '@constants';

// Fragments
import { TagsCreate } from './Create';
import { TagsTable } from './Table';

// GraphQL
import GET_TAG_LIST from './Tag.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Store
import { useModals } from '@store';

const Tags = () => {
  // Setup
  const { openModal } = useModals(CREATE_TAG_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ tags: ITag[] }>(GET_TAG_LIST, {
    variables: { companyId }
  });

  const hasTags = data?.tags && data?.tags.length > 0;

  return (
    <Page title="Tags">
      <Wrapper
        actions={
          hasTags && (
            <Button
              color="blue"
              icon="far fa-plus"
              onClick={openModal}
              variant="outlined"
            >
              Create Tag
            </Button>
          )
        }
        title="Tags"
      >
        {!hasTags && loading ? (
          <Loader />
        ) : (
          <>
            <TagsCreate />

            {hasTags ? (
              <TagsTable data={data?.tags || []} />
            ) : (
              <Empty
                actions={
                  <Button color="blue" onClick={openModal}>
                    Create Tag
                  </Button>
                }
                description="Diversify your customers with tags."
                image={
                  <Image
                    src={emptyImage1x}
                    srcSet={{ '1x': emptyImage1x, '2x': emptyImage2x }}
                  />
                }
                title="Be Varied"
              />
            )}
          </>
        )}
      </Wrapper>
    </Page>
  );
};

export default Tags;
