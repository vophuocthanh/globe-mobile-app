import { NavigationProp } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import axios from "axios";
import authApi from "../apis/auth.api";
import styles from "./style";

export default function Login() {
  const [hidePass, setHidePass] = useState(true);
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email: string, password: string) => {
    // try {
    //     const res = await axios.post('http://localhost:3001/api/auth/login', {
    //         email,
    //         password,
    //     });
    //     console.log(res,"ré");

    //     console.log(res.data, "res");
    // } catch (err) {
    //     console.error(err, "err");
    // }
    try {
      const response = await fetch(`http://localhost:3001/api/auth/login`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse, "123");

      if (response.ok) {
        Alert.alert("Login Successful", `Welcome, ${jsonResponse.user}!`);
      } else {
        Alert.alert(
          "Login Failed",
          jsonResponse.message || "Invalid credentials"
        );
      }
    } catch (error) {
      router.push("/(tabs)");
      Alert.alert("Error", "Something went wrong. Please try again.");
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
        onPress={() => {
          handleLogin(email, password);
        }}
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
