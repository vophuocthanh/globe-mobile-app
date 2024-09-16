import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 20 }} className='text-red-500'>
        This is tab one1
      </Text>
      <Button title='Go back' onPress={() => router.back()}></Button>
    </View>
  );
}
