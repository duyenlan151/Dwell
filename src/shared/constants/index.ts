// ? Screens
export const SCREENS = {
  ROOT: "Root",
  HOME: "Home",
  SEARCH: "Search",
  NOTIFICATION: "Notification",
  PROFILE: "Profile",
  DETAIL: "Detail",
  MAPS: "Maps",
};

export type ScreenName = (typeof SCREENS)[keyof typeof SCREENS];
