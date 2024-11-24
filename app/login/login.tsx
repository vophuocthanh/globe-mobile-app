import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from "./style";

export default function Login() {
  const [hidePass, setHidePass] = useState(true);
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password cannot be empty.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Kiểm tra phản hồi từ server
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred.");
      }

      const data = await response.json();

      await AsyncStorage.setItem("accessToken", data.access_token);
      await AsyncStorage.setItem("refreshToken", data.refresh_token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      router.push("/(tabs)/");

      Alert.alert("Success", "Login successful 🚀");


    } catch (error) {

    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello !</Text>
      <Text style={styles.lable}>Welcome to Roammate</Text>
      <View>
        <View style={styles.input}>
          <TextInput
            theme={{ roundness: 17, colors: { primary: "black" } }}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            theme={{ roundness: 17, colors: { primary: "black" } }}
            mode="outlined"
            label="Pasword"
            secureTextEntry={hidePass ? true : false}
            value={password}
            onChangeText={(text) => setPassword(text)}
            right={
              <TextInput.Icon
                icon={hidePass ? "eye-off" : "eye"}
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
        </View>
        <View style={styles.header}>
          <View style={styles.checkbox}>
            <Checkbox
              theme={{ colors: { primary: "black" } }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.titleCheck}>Remember me</Text>
          </View>
          <Link href="/login/forgotpassword/forgotpassword" asChild>
            <TouchableOpacity>
              <Text style={styles.color}>Forgot Password</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text className="text-xl">Don’t have an account? </Text>
        <Link href="/register" asChild>
          <TouchableOpacity>
            <Text style={styles.color}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Text style={styles.subtext}>Or login with</Text>
      <View></View>
    </View>
  );
}
