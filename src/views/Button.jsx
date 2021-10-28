import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import styles from '../styles';

export default function Button(props) {
  const {loading = false, title, onPress, onLayout = () => {}} = props;
  return (
    <TouchableOpacity
      style={styles.signupButton}
      onLayout={onLayout}
      disabled={loading}
      onPress={onPress}>
      <View style={styles.buttonHorizontal}>
        <Text style={styles.buttonTitle}>{title}</Text>
        {loading && (
          <ActivityIndicator
            style={styles.buttonLoader}
            animating={true}
            color="white"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
