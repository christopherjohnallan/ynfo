import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Ynfo = () => (
  <View>
    <Text style={styles.container}>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default Ynfo;
