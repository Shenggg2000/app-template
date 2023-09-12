import useLoadingOverlay from 'hooks/useLoadingOverlay';
import { Button, Center, Text } from 'native-base'
import { AppTabScreenProps } from 'navigators/TabNavigatorData'

interface HelpScreenProps extends AppTabScreenProps<"Help"> {}

const HelpScreen: React.FC<HelpScreenProps> = ({navigation, route}) => {
  const loadingOverlay = useLoadingOverlay();

  const loadingOverlayHandler = () => {
    loadingOverlay.onOpen();

    setTimeout(() => {
      loadingOverlay.onClose();
    }, 2000);
  }

  return (
    <Center width='full' height="full">
      <Text mb={5}>HelpScreen</Text>
      <Button onPress={loadingOverlayHandler} >Loading Overlay</Button>
    </Center>
  )
}

export default HelpScreen