import { StackScreenProps } from "@react-navigation/stack";
import AuthScreen from "screens/AuthScreen";
import TabNavigator from "./TabNavigator";

export type AppStackParamList = {
  Auth: undefined;
  HomeTab: undefined;
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>;

type StackItem = {
  name: keyof AppStackParamList;
  component: any;
}

const stackNavigationData: StackItem[] = [
  {
    name: 'Auth',
    component: AuthScreen,
  },
  {
    name: 'HomeTab',
    component: TabNavigator,
  },
];

export default stackNavigationData;