import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type AppTabParamList = {
  Home: undefined
  Help: undefined
}

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  BottomTabScreenProps<AppTabParamList, T>

import HelpScreen from 'screens/HelpScreen'
import HomeScreen from 'screens/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const homeIcon = <Icon name='home-outline' size={24} />
const activeHomeIcon = <Icon name='home' size={24} />
const helpIcon = <Icon name='information-circle-outline' size={24} />
const activeHelpIcon = <Icon name='information-circle-sharp' size={24} />

type TabItem = {
  name: keyof AppTabParamList
  component: any
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  title?: string
  titleI18n?: string
}

const tabNavigationData: TabItem[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: homeIcon,
    activeIcon: activeHomeIcon,
    // i18n key
    titleI18n: 'home',
  },
  {
    name: 'Help',
    component: HelpScreen,
    icon: helpIcon,
    activeIcon: activeHelpIcon,
    // i18n key
    titleI18n: 'info',
  },
]

export default tabNavigationData
