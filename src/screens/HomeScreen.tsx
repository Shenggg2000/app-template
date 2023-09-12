import { IMAGES } from 'constants/images';
import { Center, Text } from 'native-base'
import { AppTabScreenProps } from 'navigators/TabNavigatorData';
import { Image } from 'react-native';

interface HelpScreenProps extends AppTabScreenProps<"Home"> {}

const HomeScreen: React.FC<HelpScreenProps> = ({navigation, route}) => {
  return (
    <Center width='full' height="full">
      <Text mb={5}>HomeScreen</Text>
      <Image source={IMAGES.Logo} style={{width: 40, height: 40}} />
    </Center>
  );
}

export default HomeScreen