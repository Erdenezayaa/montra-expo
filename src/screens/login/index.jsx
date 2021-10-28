import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from '../../styles';
import Header from '../../views/Header';
import GoogleIcon from '../../../assets/google_logo.svg';
import SafeAreaContainer from '../../views/SafeAreaContainer';
import Button from '../../views/Button';

export default function LoginScreen(props) {
  const {navigation} = props;
  const onSignupPress = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaContainer>
      <View style={styles.screenContainer}>
        <Header title="Login" />
        <View style={styles.formContainer}>
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
          <Button title="Login" onPress={() => {}} />
          <Text style={styles.orWith}>Or with</Text>
          <TouchableOpacity style={styles.neutralButton}>
            <View style={styles.horizontalRow}>
              <GoogleIcon width={32} height={32} />
              <Text style={styles.neutralBtnTitle}>Login with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordBtn}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.loginRow}>
            <Text style={styles.loginDesc}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={onSignupPress}>
              <Text style={styles.loginBtn}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
}
