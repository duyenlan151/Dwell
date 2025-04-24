import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CustomTabBarButtonProps } from "./types";

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity style={styles.customButton} onPress={onPress}>
    <View style={styles.customButtonInner}>{children}</View>
  </TouchableOpacity>
);

export default CustomTabBarButton;
