import React, { FC } from "react";
import { AppStack } from "./app-navigator";
import { AuthStack } from "./auth-navigator";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator: FC<NavigationProps> = (props) => {
  const colorScheme = useColorScheme();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // useBackButtonHandler(canExit)

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
