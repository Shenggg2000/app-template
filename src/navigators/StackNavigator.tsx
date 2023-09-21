import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stackNavigationData, { AppStackParamList } from './StackNavigatorData'
import { notificationListener } from 'utils/notification'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator<AppStackParamList>()

const StackNavigator = () => {
  const navigation = useNavigation()

  useEffect(() => {
    // if user open app by clicking notification, can redirect to specify screen
    notificationListener(navigation)
  }, [])

  return (
    <Stack.Navigator
      initialRouteName='Auth'
      screenOptions={{
        headerShown: false,
      }}
    >
      {stackNavigationData.map((item) => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default StackNavigator
