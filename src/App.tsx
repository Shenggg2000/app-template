import React, { useEffect } from 'react'
import { NativeBaseProvider, Box } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { getLocales } from 'react-native-localize'
import { useTranslation } from 'react-i18next'
import codePush from 'react-native-code-push'

import { theme } from 'theme/config'
import StackNavigator from 'navigators/StackNavigator'
import LoadingOverlay from 'components/LoadingOverlay'
import useLoadingOverlay from 'hooks/useLoadingOverlay'

const App = () => {
  const { i18n } = useTranslation()
  const loadingOverlay = useLoadingOverlay()

  useEffect(() => {
    i18n.changeLanguage(getLocales()[0].languageCode)
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <LoadingOverlay isOpen={loadingOverlay.isOpen} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default codePush(App)
