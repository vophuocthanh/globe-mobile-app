import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';
import '../styles/global.css';
import { useNavigation } from '@react-navigation/native';
import ForgotPassword from './login/forgotpassword/forgotpassword';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function _layout() {
  const router = useRouter();
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  // dinh tuyen routing bang Stack
  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: 'black',
          // },
          // headerTintColor: 'white',
        }
      }
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name='register/index'
        options={{
          title: 'Register',
          headerRight: () => (
            <Button
              title='Login'
              onPress={() => router.push('/login')}
              //onPress={() => navigation.navigate('/login')}
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name='hello'
        options={{
          title: 'Hello Modal',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='login/forgotpassword/forgotpassword'
        options={{
          title: '',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='[missing]'
        options={{
          title: 'Login',
        }}
      />

    </Stack>

    
  );
}
