import { Center, Button, Box, Text } from "native-base";
import { AppStackScreenProps } from "navigators/StackNavigatorData";
import Config from "react-native-config";

interface AuthScreenProps extends AppStackScreenProps<"Auth"> {}

const AuthScreen: React.FC<AuthScreenProps> = ({navigation}) => {
  return (
    <Center width='full' height="full">
      <Box mb={5}>
        <Text>Current Environment: {Config.APP_ENV}</Text>
      </Box>
      <Button onPress={() => navigation.replace('HomeTab')} >Start</Button>
    </Center>
  )
}

export default AuthScreen