import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./tabConfig";
import { TabNavigatorNavigationProp, TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          right: 10,
          left: 10,
          borderRadius: 20,
          bottom: 10,
        },
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
export type { TabParamList, TabNavigatorNavigationProp };
