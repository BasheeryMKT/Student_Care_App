import { View, Text } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>UoV © 2025</Text>
    </View>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f4d0f',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0, 
    marginVertical: 20,
    width: '100%',
  },
  footerText: {
    color: '#fff',
    padding: 20,
  },
};
