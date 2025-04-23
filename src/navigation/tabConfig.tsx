import HomeScreen from "@screens/home/HomeScreen";
import MapScreen from "@screens/map/MapScreen";
import ProfileScreen from "@screens/notification/NotificationScreen";
import { SCREENS } from "@shared-constants";
import CustomTabBarButton from "./CustomTabBarButton";
import { CustomTabBarButtonProps, TabParamList } from "./types";
import { renderTabBarIcon } from "./utils";

export const TAB_BAR_ICONS: Partial<
  Record<
    keyof TabParamList,
    { focused: string; unfocused: string; size: number; unfocusedColor: string }
  >
> = {
  [SCREENS.HOME]: {
    focused: "home",
    unfocused: "home-outline",
    size: 24,
    unfocusedColor: "gray",
  },
  [SCREENS.MAPS]: {
    focused: "map",
    unfocused: "map-outline",
    size: 28,
    unfocusedColor: "#333",
  },
  [SCREENS.PROFILE]: {
    focused: "person",
    unfocused: "person-outline",
    size: 24,
    unfocusedColor: "gray",
  },
};

export const tabs: {
  name: keyof TabParamList;
  component: React.ComponentType;
  options: {
    tabBarIcon: ReturnType<typeof renderTabBarIcon>;
    tabBarButton?: (props: CustomTabBarButtonProps) => JSX.Element;
  };
}[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    options: { tabBarIcon: renderTabBarIcon(SCREENS.HOME) },
  },
  {
    name: SCREENS.MAPS,
    component: MapScreen,
    options: {
      tabBarIcon: renderTabBarIcon(SCREENS.MAPS),
      tabBarButton: (props: CustomTabBarButtonProps) => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <CustomTabBarButton {...props} />
      ),
    },
  },
  {
    name: SCREENS.PROFILE,
    component: ProfileScreen,
    options: { tabBarIcon: renderTabBarIcon(SCREENS.PROFILE) },
  },
];
