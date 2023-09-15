import React from 'react'
import { Center, Heading, Modal, Spinner } from 'native-base';
import useLoadingOverlay from 'hooks/useLoadingOverlay';
import { useTranslation } from 'react-i18next';

interface LoadingOverlayProps {
  isOpen: boolean
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({isOpen}) => {  
  const {t} = useTranslation();
  
  return (
    <Modal isOpen={isOpen}>
      <Spinner color="darkText"/>
      <Heading color="darkText" fontSize="md">
        {t('loading')}
      </Heading>
    </Modal>
  );
};

export default LoadingOverlay