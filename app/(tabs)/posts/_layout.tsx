import { Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Posts',
        }}
      />
      <Stack.Screen
        name='[id]'
        options={{
          title: 'Post Details',
        }}
      />
    </Stack>
  );
}
