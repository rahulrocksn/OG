import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const ViewerScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{uri: 'http://yourstreamingurl.m3u8'}} // Use your live stream URL here
        style={styles.video}
        controls={true}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default ViewerScreen;
