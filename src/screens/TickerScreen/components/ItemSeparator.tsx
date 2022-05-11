import { StyleSheet, View } from 'react-native';
import React from 'react';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#3A3B3C',
    marginHorizontal: 12,
  },
});

export default ItemSeparator;
