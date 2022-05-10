import React, {FC} from 'react';
import {Logo} from '../../components';
import {Headline, Paragraph} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';
import {color, spacing} from '../../theme';
import {NavigatorParamList} from '../../navigation/app-navigator';

type Props = NativeStackScreenProps<NavigatorParamList, 'home'>

export const HomeScreen: FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Logo />
      <Headline>Password Vault</Headline>
      <Paragraph style={styles.paragraph}>
        You are in!
      </Paragraph>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: color.dim,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  button: {
    width: '100%',
    marginVertical: spacing.small,
  },
  signupButtonText: {
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: color.palette.white,
    fontWeight: 'bold',
  },
});
