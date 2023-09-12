import React from 'react'
import { NativeBaseProvider, Box } from "native-base";
import { theme } from 'theme/config';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from 'navigators/StackNavigator';
import LoadingOverlay from 'components/LoadingOverlay';
import useLoadingOverlay from 'hooks/useLoadingOverlay';

const App = () => {
  const loadingOverlay = useLoadingOverlay();

  return (
    <NativeBaseProvider theme={theme}>
      <LoadingOverlay isOpen={loadingOverlay.isOpen}/>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App