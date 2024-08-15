import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link style={{ fontSize: 20 }} href='/posts/1'>
        Open posts 1
      </Link>
      <Link style={{ fontSize: 20 }} href='/posts/2'>
        Open posts 2
      </Link>
      <Link style={{ fontSize: 20 }} href='/posts/3'>
        Open posts 3
      </Link>
    </View>
  );
}
