import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';
import '../styles/global.css';
import { useNavigation } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DetailTour from './tour/detail-tour/detail-tour';
import GetStart from './getstart/getstart';

export default function _layout() {
  const router = useRouter();
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  // dinh tuyen routing bang Stack
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      {/* <Stack.Screen
        name='index'
        options={{
          presentation: 'modal',
          title: '',
        }}
      /> */}
      <Stack.Screen
      
      name='index'
      options={{
        header:  () => <GetStart />,
      }}
    />
      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
          headerRight: () => (
            
            <Button
              title='Login'
              onPress={() => router.push('/login/login')}
              
              //onPress={() => navigation.navigate('/login')}
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name='login/login'
        options={{
          title: 'Login',
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='hello'
        options={{
          title: 'Hello Modal1',
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
        name='getstart/adventures/adventures'
        options={{
          title: 'Hello Modal',
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
      name='tour/detail-tour/detail-tour'
      options={{
        title: 'Hello Modal',
        presentation: 'modal',
        header:  () => <DetailTour />,
      }}
    />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[missing]"
        options={{
          title: 'not!!!',
        }}
      />

    </Stack>

    
  );
}
