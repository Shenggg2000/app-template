import React from 'react'
import { Center, Heading, Modal, Spinner } from 'native-base';
import useLoadingOverlay from 'hooks/useLoadingOverlay';

interface LoadingOverlayProps {
  isOpen: boolean
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({isOpen}) => {  
  return (
    <Modal isOpen={isOpen}>
      <Spinner color="darkText"/>
      <Heading color="darkText" fontSize="md">
        Loading
      </Heading>
    </Modal>
  );
};

export default LoadingOverlay