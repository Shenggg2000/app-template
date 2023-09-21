import React, { useEffect } from 'react'
import { Center, Button, Box, Text, useToast } from 'native-base'
import { AppStackScreenProps } from 'navigators/StackNavigatorData'
import { useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { notificationListener } from 'utils/notification'
import TouchID from 'react-native-touch-id'
import { Platform } from 'react-native'

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const toast = useToast()
  const { t } = useTranslation()

  useEffect(() => {
    // if user open app by clicking notification, can redirect to specify screen
    notificationListener(navigation)
  }, [])

  const startHandler = async () => {
    const isBiometricSupported = await checkBiometricSupport()

    if (isBiometricSupported) {
      const isSuccess = await authenticateBiometric()
      if (isSuccess) {
        toast.show({
          description: 'Authentication Successful',
          placement: 'top',
        })
        navigation.replace('HomeTab')
      }
    } else {
      console.log(
        'Either phone does not support biometric auth or the user did not activate the function'
      )
    }
  }

  const checkBiometricSupport = async () => {
    try {
      const biometricType = await TouchID.isSupported()

      if (
        Platform.OS === 'ios' &&
        (biometricType === 'FaceID' || biometricType === 'TouchID')
      ) {
        return true
      } else if (Platform.OS === 'android' && biometricType) {
        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const authenticateBiometric = async () => {
    return TouchID.authenticate('Verify your identity')
  }

  return (
    <Center width='full' height='full'>
      <Box mb={5}>
        <Text>{t('currentEnvironment', { env: Config.APP_ENV })}</Text>
      </Box>
      <Button onPress={startHandler}>{t('start')}</Button>
    </Center>
  )
}

export default AuthScreen
