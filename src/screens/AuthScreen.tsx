import { Center, Button, Box, Text } from "native-base";
import { AppStackScreenProps } from "navigators/StackNavigatorData";
import { useTranslation } from "react-i18next";
import Config from "react-native-config";

interface AuthScreenProps extends AppStackScreenProps<"Auth"> {}

const AuthScreen: React.FC<AuthScreenProps> = ({navigation}) => {
  const { t } = useTranslation();

  return (
    <Center width='full' height="full">
      <Box mb={5}>
        <Text>{t('currentEnvironment', {env: Config.APP_ENV})}</Text>
      </Box>
      <Button onPress={() => navigation.replace('HomeTab')} >{t('start')}</Button>
    </Center>
  )
}

export default AuthScreen