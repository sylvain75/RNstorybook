import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1
  },
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12
  },
  topRow: {
    marginBottom: 28
  }
});

export default ({ children, header, subHeader }) => (
  <View style={styles.container}>
    {(header || subHeader) && (
      <View style={styles.topRow}>
        {header && <Text style={styles.headerText}>{header}</Text>}
        {subHeader && <Text style={styles.subHeaderText}>{subHeader}</Text>}
      </View>
    )}
    {children}
  </View>
)