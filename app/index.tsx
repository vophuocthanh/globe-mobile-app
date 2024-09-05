import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Page() {
  return (
    <View className='items-center justify-center flex-1 bg-white'>
      <StatusBar style='light' />
      <Text className='text-red-300'>Home Page</Text>
      <Link href='/register' asChild>
        <Button title='Register' />
      </Link>
      <Link href='/one' asChild>
        <Button title='Open tabs one' />
      </Link>
    </View>
  );
}
