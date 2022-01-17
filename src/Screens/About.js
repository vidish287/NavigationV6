import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text> This is about screen...!</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.goBack()} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default About;
