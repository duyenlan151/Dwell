import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TAB_BAR_ICONS } from "./tabConfig";
import { TabParamList } from "./types";

// export const renderTabBarIcon = (tabName: keyof TabParamList | string) => {
//   const TabBarIcon: React.FC<{ focused: boolean }> = ({ focused }) => (
//     <Icon
//       name={
//         focused
//           ? TAB_BAR_ICONS[tabName].focused
//           : TAB_BAR_ICONS[tabName].unfocused
//       }
//       size={TAB_BAR_ICONS[tabName].size}
//       color={focused ? "#FF6347" : TAB_BAR_ICONS[tabName].unfocusedColor}
//     />
//   );
//   TabBarIcon.displayName = `TabBarIcon${tabName}`;
//   return TabBarIcon;
// };
export const renderTabBarIcon = (tabName: keyof TabParamList) => {
  const TabBarIcon: React.FC<{ focused: boolean }> = ({ focused }) => {
    const iconConfig = TAB_BAR_ICONS[tabName];
    if (!iconConfig) {
      return null;
    }
    return (
      <Icon
        name={focused ? iconConfig.focused : iconConfig.unfocused}
        size={iconConfig.size}
        color={focused ? "tomato" : iconConfig.unfocusedColor}
      />
    );
  };
  TabBarIcon.displayName = `TabBarIcon${tabName}`;
  return TabBarIcon;
};
