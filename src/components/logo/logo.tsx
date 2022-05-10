import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
}

export const Logo: FC<Props> = () => {
  return (
    <Image
      source={require('../../../assets/images/logo.png')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});
