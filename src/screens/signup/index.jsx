import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '../../styles';
import Header from '../../views/Header';
import GoogleIcon from '../../../assets/google_logo.svg';
import SafeAreaContainer from '../../views/SafeAreaContainer';
import Button from '../..//views/Button';


export default function SignupScreen(props) {
  const {navigation} = props;
  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  const onSignupPress = () => {
  };
  return (
    <SafeAreaContainer>
      <View style={styles.screenContainer}>
        <Header title="Sign Up" />
        <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            autoCapitalize="none"
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#91919F"
          />
          <Button
            title="Sign Up"
            onPress={onSignupPress}
          />
          <Text style={styles.orWith}>Or with</Text>
          <TouchableOpacity style={styles.neutralButton}>
            <View style={styles.horizontalRow}>
              <GoogleIcon width={32} height={32} />
              <Text style={styles.neutralBtnTitle}>Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.loginRow}>
            <Text style={styles.loginDesc}>Already have an account?</Text>
            <TouchableOpacity onPress={onLoginPress}>
              <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Text />
      </View>
    </SafeAreaContainer>
  );
}
