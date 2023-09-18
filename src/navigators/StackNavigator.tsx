import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stackNavigationData, { AppStackParamList } from './StackNavigatorData'

const Stack = createStackNavigator<AppStackParamList>()

const StackNavigator = () => {
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
