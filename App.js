import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNav from './src/Navigation/StackNav';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
