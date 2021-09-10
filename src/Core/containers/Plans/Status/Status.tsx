import React, { useCallback } from 'react';

// Assets
import canceledImage1x from './assets/canceled@1x.png';
import canceledImage2x from './assets/canceled@2x.png';
import succeededImage1x from './assets/succeeded@1x.png';
import succeededImage2x from './assets/succeeded@1x.png';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';
import Image from '@components/Image';
import Modal from '@components/Modal';

// Hooks
import { usePlansStatus } from './Status.hooks';

export const PlansStatus: React.FC = () => {
  const { canceledModal, succeededModal } = usePlansStatus();

  // Handlers
  const handleCloseClick = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <>
      <Modal id={succeededModal.id!}>
        <Hero
          actions={
            <Button color="blue" onClick={handleCloseClick}>
              Start
            </Button>
          }
          description="Thanks for subscription!"
          image={
            <Image
              src={succeededImage1x}
              srcSet={{ '1x': succeededImage1x, '2x': succeededImage2x }}
            />
          }
          title="Let's rock! 🤘"
        />
      </Modal>

      <Modal id={canceledModal.id!}>
        <Hero
          actions={
            <Button color="blue" onClick={handleCloseClick}>
              Close
            </Button>
          }
          description="I will be glad to work together again."
          image={
            <Image
              src={canceledImage1x}
              srcSet={{ '1x': canceledImage1x, '2x': canceledImage2x }}
            />
          }
          title="Very sorry 😞"
        />
      </Modal>
    </>
  );
};
