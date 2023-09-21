import React, { useEffect } from 'react'
import { Center, Button, Box, Text } from 'native-base'
import { AppStackScreenProps } from 'navigators/StackNavigatorData'
import { useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { notificationListener } from 'utils/notification'

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const { t } = useTranslation()

  useEffect(() => {
    // if user open app by clicking notification, can redirect to specify screen
    notificationListener(navigation)
  }, [])

  return (
    <Center width='full' height='full'>
      <Box mb={5}>
        <Text>{t('currentEnvironment', { env: Config.APP_ENV })}</Text>
        <Text>Power of CodePush</Text>
        <Text>PUSH4 on 18 Sep 10:47AM</Text>
      </Box>
      <Button onPress={() => navigation.replace('HomeTab')}>
        {t('start')}
      </Button>
    </Center>
  )
}

export default AuthScreen
