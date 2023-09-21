import React, { useEffect } from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { getLocales } from 'react-native-localize'
import { useTranslation } from 'react-i18next'
import codePush from 'react-native-code-push'

import { theme } from 'theme/config'
import StackNavigator from 'navigators/StackNavigator'
import LoadingOverlay from 'components/LoadingOverlay'
import useLoadingOverlay from 'hooks/useLoadingOverlay'
import { requestUserNotificationPermission } from 'utils/notification'

const App = () => {
  const { i18n } = useTranslation()
  const loadingOverlay = useLoadingOverlay()

  useEffect(() => {
    // setup FCM service
    requestUserNotificationPermission()
    // get user perfer language from system and set to application language
    i18n.changeLanguage(getLocales()[0].languageCode)
  }, [])

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <LoadingOverlay isOpen={loadingOverlay.isOpen} />
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default codePush(App)
