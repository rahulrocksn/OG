import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CreatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is where you would broadcast.</Text>
      {/* Integration of live streaming upload goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'black',
    padding: 10,
  },
});

export default CreatorScreen;
