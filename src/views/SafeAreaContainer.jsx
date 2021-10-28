import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';

function SafeAreaContainer(props) {
  const {children} = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      {children}
    </SafeAreaView>
  );
}
export default SafeAreaContainer;
