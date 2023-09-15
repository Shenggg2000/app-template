import { createStackNavigator } from '@react-navigation/stack';
import stackNavigationData, { AppStackParamList } from './StackNavigatorData';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<AppStackParamList>();

const StackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{
      headerShown: false
    }}>
      {stackNavigationData.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
}

export default StackNavigator