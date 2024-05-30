import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Watch Live Stream"
        onPress={() => navigation.navigate('Viewer')}
      />
      <Button
        title="Start Live Stream"
        onPress={() => navigation.navigate('Creator')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
