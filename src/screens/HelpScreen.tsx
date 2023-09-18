import useLoadingOverlay from 'hooks/useLoadingOverlay'
import { Button, Center, Text } from 'native-base'
import { AppTabScreenProps } from 'navigators/TabNavigatorData'
import { useTranslation } from 'react-i18next'

interface HelpScreenProps extends AppTabScreenProps<'Help'> {}

const HelpScreen: React.FC<HelpScreenProps> = ({ navigation, route }) => {
  const { t } = useTranslation()
  const loadingOverlay = useLoadingOverlay()

  const loadingOverlayHandler = () => {
    loadingOverlay.onOpen()

    setTimeout(() => {
      loadingOverlay.onClose()
    }, 2000)
  }

  return (
    <Center width='full' height='full'>
      <Button onPress={loadingOverlayHandler}>{t('loadingOverlay')}</Button>
    </Center>
  )
}

export default HelpScreen
