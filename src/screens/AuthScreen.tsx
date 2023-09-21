import React from 'react'
import { Center, Button, Box, Text, useToast } from 'native-base'
import { AppStackScreenProps } from 'navigators/StackNavigatorData'
import { useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { authenticateBiometric, checkBiometricSupport } from 'utils/biometric'

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const toast = useToast()
  const { t } = useTranslation()

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
