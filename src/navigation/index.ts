// import React from "react";
// import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
// import {
//   createBottomTabNavigator,
//   type BottomTabNavigationProp,
// } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";
// import HomeScreen from "@screens/home/HomeScreen";
// import ProfileScreen from "@screens/notification/NotificationScreen";
// import SearchScreen from "@screens/search/SearchScreen";
// import { styles } from "./styles";

// // Define the type for the tab navigator's route params
// type TabParamList = {
//   Home: undefined;
//   Search: undefined;
//   Profile: undefined;
// };

// interface CustomTabBarButtonProps {
//   children: React.ReactNode;
//   onPress?: (event: GestureResponderEvent) => void;
//   accessibilityLabel?: string;
//   testID?: string;
// }

// // Custom tab bar button component
// const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
//   children,
//   onPress,
// }) => (
//   <TouchableOpacity style={styles.customButton} onPress={onPress}>
//     <View style={styles.customButtonInner}>{children}</View>
//   </TouchableOpacity>
// );

// // Define icon configuration for tabs
// const TAB_BAR_ICONS: Record<
//   keyof TabParamList,
//   { focused: string; unfocused: string; size: number; unfocusedColor: string }
// > = {
//   Home: {
//     focused: "home",
//     unfocused: "home-outline",
//     size: 24,
//     unfocusedColor: "gray",
//   },
//   Search: {
//     focused: "map",
//     unfocused: "map-outline",
//     size: 28,
//     unfocusedColor: "#333",
//   },
//   Profile: {
//     focused: "person",
//     unfocused: "person-outline",
//     size: 24,
//     unfocusedColor: "gray",
//   },
// };

// // Reusable function to render tab bar icons
// const renderTabBarIcon = (tabName: keyof TabParamList) => {
//   const TabBarIcon: React.FC<{ focused: boolean }> = ({ focused }) => (
//     <Icon
//       name={
//         focused
//           ? TAB_BAR_ICONS[tabName].focused
//           : TAB_BAR_ICONS[tabName].unfocused
//       }
//       size={TAB_BAR_ICONS[tabName].size}
//       color={focused ? "tomato" : TAB_BAR_ICONS[tabName].unfocusedColor}
//     />
//   );
//   TabBarIcon.displayName = `TabBarIcon${tabName}`;
//   return TabBarIcon;
// };

// const Tab = createBottomTabNavigator<TabParamList>();

// type TabNavigatorNavigationProp = BottomTabNavigationProp<TabParamList>;

// const TabNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ tabBarIcon: renderTabBarIcon("Home") }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarIcon: renderTabBarIcon("Search"),
//           tabBarButton: (props) => <CustomTabBarButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ tabBarIcon: renderTabBarIcon("Profile") }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;
// export type { TabParamList, TabNavigatorNavigationProp };
export { default as TabNavigator } from "./TabNavigator";
export { default as CustomTabBarButton } from "./CustomTabBarButton";
export { TAB_BAR_ICONS, tabs } from "./tabConfig";
export { renderTabBarIcon } from "./utils";
export type {
  TabParamList,
  TabNavigatorNavigationProp,
  CustomTabBarButtonProps,
} from "./types";
