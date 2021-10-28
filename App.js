import React from 'react';
import AppLoading from 'expo-app-loading';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';
import './src/locales';
import {useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin, 
    Inter_200ExtraLight, 
    Inter_300Light, 
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold, 
    Inter_900Black
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    );  
  }
}

