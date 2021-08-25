import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter';
import Form from './src/components/Form';
import Button from './src/components/Button';
import Length from './src/components/Length';
import Dog from './src/components/Dog';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      {/*<Counter/>*/}
      {/*<Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(prev => !prev)} //누르면 true -> false 변경
        />
      */}
      {/*isVisible && <Form/>*/}
      {/*<Length/>*/}
      <Dog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
