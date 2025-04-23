import { GestureResponderEvent } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { SCREENS } from "@shared-constants";

export type TabParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.MAPS]: undefined;
};

export interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityLabel?: string;
  testID?: string;
}

export type TabNavigatorNavigationProp = BottomTabNavigationProp<TabParamList>;
