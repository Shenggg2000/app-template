import { IMAGES } from 'constants/images'
import { Center, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { AppTabScreenProps } from 'navigators/TabNavigatorData'

interface HelpScreenProps extends AppTabScreenProps<'Home'> {}

const HomeScreen: React.FC<HelpScreenProps> = ({ navigation, route }) => {
  const { t } = useTranslation()

  return (
    <Center width='full' height='full'>
      <Text mb={5} style={{ textAlign: 'center' }}>
        {t('greetingDate', {
          date: new Date(),
          interpolation: { escapeValue: false },
        })}
      </Text>
      <Image source={IMAGES.Logo} style={{ width: 40, height: 40 }} />
    </Center>
  )
}

export default HomeScreen
