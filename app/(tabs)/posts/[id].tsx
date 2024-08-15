import { Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function Page() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: 'Post ' + id,
        }}
      />
      <Text style={{ fontSize: 20 }}> Post {id}</Text>
      <View className='flex-1 items-center justify-center bg-white'>
        <Text className='text-red-300'>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </View>
    </View>
  );
}
