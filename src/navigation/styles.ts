import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 60,
    right: 10,
    left: 10,
    borderRadius: 20,
    bottom: 10,
  },
  customButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
