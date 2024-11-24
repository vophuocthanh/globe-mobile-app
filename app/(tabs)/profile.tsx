import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { Avatar } from 'react-native-paper';

interface User {
  id?: string
  email?: string
  name?: string
  role?: string
  avatar?: string
  phone?: string
  address: string
  date_of_birth?: string
  country?: string
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        const response = await axios.get("http://localhost:3001/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
      }
    };

    fetchUserData();
  }, []);

  const handleAvatarChange = () => {
    alert('Avatar change function goes here');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={100}
          source={{ uri: user?.avatar || 'https://www.example.com/default-avatar.jpg' }} // Dùng avatar mặc định nếu không có avatar
        />
        <Button title="Change Avatar" onPress={handleAvatarChange} />
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={user?.name} editable={false} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={user?.email} editable={false} />

      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} value={user?.phone} editable={false} />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} value={user?.date_of_birth} editable={false} />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} value={user?.address} editable={false} />

      <Text style={styles.label}>Country</Text>
      <TextInput style={styles.input} value={user?.country} editable={false} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value="********"
        secureTextEntry
        editable={false}
      />


      <Button title="Edit Profile" onPress={() => alert('Edit Profile clicked')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

