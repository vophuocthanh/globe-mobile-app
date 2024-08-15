import { Tabs } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='one'
        options={{ headerTitle: 'One', tabBarLabel: 'One' }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='two'
        options={{ headerTitle: 'Two', tabBarLabel: 'Two' }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='posts'
        options={{
          headerTitle: 'Posts',
          tabBarLabel: 'Posts',
          headerShown: false,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
