import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tabNavigationData, { AppTabParamList } from './TabNavigatorData'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator<AppTabParamList>()

const TabNavigator = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator>
      {tabNavigationData.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return item.activeIcon ?? <></>
              } else {
                return item.icon ?? <></>
              }
            },
            tabBarLabel: () => <></>,
            title: item.titleI18n ? t(item.titleI18n) : item.title || item.name,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default TabNavigator
