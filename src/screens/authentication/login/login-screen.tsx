import React, { FC } from "react";
import { Logo } from "../../../components";
import { Headline, Paragraph, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { color, spacing } from "../../../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/slices/authSlice";
import { NavigatorParamList } from "../../../navigation/auth-navigator";

type Props = NativeStackScreenProps<NavigatorParamList, "login">;

export const LoginScreen: FC<Props> = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const credentials = {
      email: "jdoe@test.com",
      userName: "johnDoe",
    };

    dispatch(signIn(credentials));
  };

  return (
    <View style={styles.root}>
      <Logo />
      <Headline>Password Vault</Headline>

      <Paragraph style={styles.paragraph}>
        Your data is yours, ... yours alone.
      </Paragraph>

      <Button
        style={styles.button}
        labelStyle={styles.loginButtonText}
        mode="contained"
        onPress={handleLogin}
      >
        Login
      </Button>
      <Button
        style={styles.button}
        labelStyle={styles.signupButtonText}
        mode="outlined"
        onPress={() => {}}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    color: color.dim,
    textAlign: "center",
    marginBottom: spacing.medium,
  },
  button: {
    width: "100%",
    marginVertical: spacing.small,
  },
  signupButtonText: {
    fontWeight: "bold",
  },
  loginButtonText: {
    color: color.palette.white,
    fontWeight: "bold",
  },
});
