import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      <Link href='/hello' asChild>
        <Button title='Open hello modal' />
      </Link>
    </View>
  );
}
